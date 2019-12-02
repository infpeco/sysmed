import pymysql, json, sys
#recibo dato
result = sys.argv[1]
#CONEXION CON LA BASE DE DATOS
mydb = pymysql.connect("localhost","root","","sysmed")
mycursor = mydb.cursor()
def busquedaprueba():
	busqueda= sys.argv[2]
	if busqueda=="Activo" or busqueda=="activo":
		busqueda=b'\x01';
	if busqueda=="Desactivo" or busqueda=="desactivo":
		busqueda=b'\x00';
  
	
	mycursor.execute("SELECT idprueba_lab, nombre_labprueba,estado_labprueba, nombre_labdepartamento "+
		"FROM lab_prueba  INNER JOIN lab_departamento  on iddepartamento_lab=iddepartamento_labdepartamento WHERE "+
		"idprueba_lab like %s or nombre_labprueba like %s "+
		"or estado_labprueba like %s or nombre_labdepartamento like %s", ("%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%"))
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = "" ;
	
	if myconsulta is None:
		dato = {"idprueba_lab": "","nombre_labprueba":"","estado_labprueba":"","nombre_labdepartamento":"" }
		j = json.dumps(dato, ensure_ascii=False)
	if myconsulta is  not None:
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


def busquedamuestra():
	busqueda= sys.argv[2]
	if busqueda=="Activo" or busqueda=="activo":
		busqueda=b'\x01';
	if busqueda=="Desactivo" or busqueda=="desactivo":
		busqueda=b'\x00';
  
	mycursor.execute("SELECT `idmuestra_lab`, `nombre_labmuestra`, `detalle_labmuestra`,"+ 
		"nombre_labdepartamento,`nombre_labprueba`, abv_labumedida, `vminimo_labmuestra`,"+
		"`vmaximo_labmuestra`, `estado_labmuestra` FROM `lab_muestra`"+
		"INNER JOIN lab_prueba on idprueba_labprueba=idprueba_lab "+
		"INNER JOIN lab_departamento on iddepartamento_labdepartamento=iddepartamento_lab "+ 
		"INNER JOIN lab_unidadmedida ON idumedida_labnidadmedida=idumedida_lab "+
		" WHERE idmuestra_lab like %s or nombre_labmuestra like %s or detalle_labmuestra like %s "+
		"or nombre_labdepartamento like %s or nombre_labprueba like %s or abv_labumedida like %s"+
		"or vminimo_labmuestra like %s or vmaximo_labmuestra like %s or estado_labmuestra like %s", ("%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%" ))
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = "" ;
	
	if myconsulta is None:
		dato = {"idmuestra_lab": "","nombre_labmuestra":"",
			"detalle_labmuestra":"","nombre_labdepartamento":"","nombre_labprueba":"","abv_labumedida":"",
			"vminimo_labmuestra":"","vmaximo_labmuestra":"","estado_labprueba":"" }
		j = json.dumps(dato, ensure_ascii=False)
		myjson=myjson+j+","
	if myconsulta is  not None:
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

def busquedaumedida():
	busqueda= sys.argv[2]
	if busqueda=="Activo" or busqueda=="activo":
		busqueda=b'\x01';
	if busqueda=="Desactivo" or busqueda=="desactivo":
		busqueda=b'\x00';
	
	mycursor.execute("SELECT * FROM lab_unidadmedida WHERE idumedida_lab like %s or nombre_labumedida like %s "+
		"or abv_labumedida like %s or detalle_labumedida like %s or estado_labumedida like %s", ("%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%"))
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

def busquedaars():
	busqueda= sys.argv[2]
	if busqueda=="Activo" or busqueda=="activo":
		busqueda=b'\x01';
	if busqueda=="Desactivo" or busqueda=="desactivo":
		busqueda=b'\x00';
  
	
	mycursor.execute("SELECT * FROM lab_ars WHERE idars_lab like %s or nombre_labars like %s "+
		"or estado_labars like %s", ("%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%"))
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

def busquedancf():
	busqueda= sys.argv[2]
	if busqueda=="Activo" or busqueda=="activo":
		busqueda=b'\x01';
	if busqueda=="Desactivo" or busqueda=="desactivo":
		busqueda=b'\x00';
  
	mycursor.execute("SELECT * FROM `lab_ncf`"+
		" WHERE idncf_lab like %s or nombre_labncf like %s or abreviatura_labncf like %s "+
		"or fechaven_labncf like %s or cantidad_labncf like %s or prisecuencia_labncf like %s"+
		"or ultsecuencia_labncf like %s or estado_labncf like %s", ("%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%" ))
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
	busquedaprueba()
if(result=="Muestra"):
	busquedamuestra()
if(result=="UnidadMedida"):
	busquedaumedida()
if(result=="ARS"):
	busquedaars()
if(result=="NCF"):
	busquedancf()