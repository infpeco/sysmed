import pymysql, json, sys
#recibo dato
result = sys.argv[1]
#CONEXION CON LA BASE DE DATOS
mydb = pymysql.connect("localhost","root","","sysmed")
mycursor = mydb.cursor()
def consultadepartamento():
	mycursor.execute("SELECT iddepartamento_lab,nombre_labdepartamento FROM lab_departamento "+
		"where estado_labdepartamento=1 ORDER BY `nombre_labdepartamento` ASC")
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = ""
	for row in myconsulta:
		dato = {"iddepartamento_lab": json.dumps(row[0]),"nombre_labdepartamento":row[1] }
		j = json.dumps(dato, ensure_ascii=False)
		myjson=myjson+j+","

	eliminarultimacoma = len(myjson)
	myjson = myjson[:eliminarultimacoma - 1]	
	print("["+myjson+"]")
	mydb.close()

def consultaprueba():
	departamento=sys.argv[2]
	mycursor.execute("SELECT idprueba_lab, nombre_labprueba "+
		"FROM lab_prueba WHERE estado_labprueba=1 AND iddepartamento_labdepartamento=%s"+
		" ORDER BY nombre_labprueba ASC", departamento)
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = ""
	for row in myconsulta:
		dato = {"idprueba_lab": json.dumps(row[0]),"nombre_labprueba":row[1] }
		j = json.dumps(dato, ensure_ascii=False)
		myjson=myjson+j+","

	eliminarultimacoma = len(myjson)
	myjson = myjson[:eliminarultimacoma - 1]	
	print("["+myjson+"]")
	mydb.close()

def consultaumedida():
	mycursor.execute("SELECT idumedida_lab,abv_labumedida FROM lab_unidadmedida where estado_labumedida=1 ORDER BY `abv_labumedida` ASC")
	myconsulta = mycursor.fetchall()
	myjson = ""
	for row in myconsulta:
		dato = {"idumedida_lab": json.dumps(row[0]),"abv_labumedida":row[1] }
		j = json.dumps(dato, ensure_ascii=False)
		myjson=myjson+j+","

	eliminarultimacoma = len(myjson)
	myjson = myjson[:eliminarultimacoma - 1]	
	print("["+myjson+"]")
	mydb.close()

if(result=="Departamento"):
	consultadepartamento()
if(result=="Prueba"):
	consultaprueba()
if(result=="UnidadMedida"):
	consultaumedida()
