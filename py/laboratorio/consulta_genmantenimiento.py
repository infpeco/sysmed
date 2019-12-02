import pymysql, json, sys
#recibo dato
result = sys.argv[1]
#CONEXION CON LA BASE DE DATOS
mydb = pymysql.connect("localhost","root","","sysmed")
mycursor = mydb.cursor()
def consultaprueba():
	mycursor.execute("SELECT idprueba_lab, nombre_labprueba,estado_labprueba, nombre_labdepartamento "+
		"FROM lab_prueba  INNER JOIN lab_departamento  on iddepartamento_lab=iddepartamento_labdepartamento ")
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = "" ;
	
	for row in myconsulta:
		estado="A";
		if(row[2]==b'\x00'):
			estado="D"
		dato = {"idprueba_lab": json.dumps(row[0]),"nombre_labprueba":row[1],
		"estado_labprueba":estado,"nombre_labdepartamento":row[3] }
		j = json.dumps(dato, ensure_ascii=False)
		myjson=myjson+j+","

	eliminarultimacoma = len(myjson)
	myjson = myjson[:eliminarultimacoma - 1]	
	print("["+myjson+"]")
	mydb.close()

def consultapruebafac():
	mycursor.execute("SELECT idprueba_lab, nombre_labprueba, nombre_labdepartamento "+
		"FROM lab_prueba  INNER JOIN lab_departamento  on iddepartamento_lab=iddepartamento_labdepartamento where estado_labprueba=1 ")
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = "" ;
	
	for row in myconsulta:
		dato = {"idprueba_lab": json.dumps(row[0]),"nombre_labprueba":row[1],
		"nombre_labdepartamento":row[2] }
		j = json.dumps(dato, ensure_ascii=False)
		myjson=myjson+j+","

	eliminarultimacoma = len(myjson)
	myjson = myjson[:eliminarultimacoma - 1]	
	print("["+myjson+"]")
	mydb.close()

def consultamuestra():
	mycursor.execute("SELECT `idmuestra_lab`, `nombre_labmuestra`, `detalle_labmuestra`,"+ 
		"nombre_labdepartamento,`nombre_labprueba`, abv_labumedida, `vminimo_labmuestra`,"+
		"`vmaximo_labmuestra`, `estado_labmuestra` FROM `lab_muestra`"+
		"INNER JOIN lab_prueba on idprueba_labprueba=idprueba_lab "+
		"INNER JOIN lab_departamento on iddepartamento_labdepartamento=iddepartamento_lab "+ 
		"INNER JOIN lab_unidadmedida ON idumedida_labnidadmedida=idumedida_lab ")
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = "" ;
	
	for row in myconsulta:
		estado="A";detalle=row[2];
		if(row[8]==b'\x00'):
			estado="D"
		if(row[2] is None):
			detalle=""
		dato = {"idmuestra_lab": json.dumps(row[0]),"nombre_labmuestra":row[1],
		"detalle_labmuestra":detalle,"nombre_labdepartamento":row[3],
		"nombre_labprueba":row[4],"abv_labumedida":row[5],
		"vminimo_labmuestra":str(float(row[6])),"vmaximo_labmuestra":str(float(row[7])),
		"estado_labprueba":estado }
		j = json.dumps(dato, ensure_ascii=False)
		myjson=myjson+j+","

	eliminarultimacoma = len(myjson)
	myjson = myjson[:eliminarultimacoma - 1]	
	print("["+myjson+"]")
	mydb.close()

def consultaumedida():
	mycursor.execute("SELECT idumedida_lab, nombre_labumedida,abv_labumedida, detalle_labumedida,"+
		"estado_labumedida FROM lab_unidadmedida")
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = "" ;
	
	for row in myconsulta:
		estado="A";
		if(row[4]==b'\x00'):
			estado="D"
		dato = {"idumedida_lab": json.dumps(row[0]),"nombre_labumedida":row[1],
		"abv_labumedida":row[2] ,"detalle_labumedida":row[3],"estado_labumedida":estado }
		j = json.dumps(dato, ensure_ascii=False)
		myjson=myjson+j+","

	eliminarultimacoma = len(myjson)
	myjson = myjson[:eliminarultimacoma - 1]	
	print("["+myjson+"]")
	mydb.close()
def consultaars():
	mycursor.execute("SELECT * FROM lab_ars")
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = "" ;
	
	for row in myconsulta:
		estado="A";
		if(row[2]==b'\x00'):
			estado="D"
		dato = {"idars_lab": json.dumps(row[0]),"nombre_labars":row[1],
		"estado_labars":estado }
		j = json.dumps(dato, ensure_ascii=False)
		myjson=myjson+j+","

	eliminarultimacoma = len(myjson)
	myjson = myjson[:eliminarultimacoma - 1]	
	print("["+myjson+"]")
	mydb.close()

def consultancf():
	mycursor.execute("SELECT * FROM `lab_ncf`")
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = "" ;
	
	for row in myconsulta:
		estado="A";detalle=row[2];
		if(row[7]==b'\x00'):
			estado="D"
		dato = {"idncf_lab": json.dumps(row[0]),"nombre_labncf":row[1],
		"abreviatura_labncf":row[2],"fechaven_labncf":str(row[3]),
		"cantidad_labncf":str(row[4]),"prisecuencia_labncf":str(row[5]),
		"ultsecuencia_labncf":str(row[6]),"estado_labncf":estado }
		j = json.dumps(dato, ensure_ascii=False)
		myjson=myjson+j+","

	eliminarultimacoma = len(myjson)
	myjson = myjson[:eliminarultimacoma - 1]	
	print("["+myjson+"]")
	mydb.close()


if(result=="Prueba"):
	consultaprueba()
if(result=="Pruebagendetalle"):
	consultapruebafac()
if(result=="Muestra"):
	consultamuestra()
if(result=="UnidadMedida"):
	consultaumedida()
if(result=="ARS"):
	consultaars()
if(result=="NCF"):
	consultancf()