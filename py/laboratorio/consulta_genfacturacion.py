import pymysql, json, sys
#recibo dato
result = sys.argv[1]
#CONEXION CON LA BASE DE DATOS
mydb = pymysql.connect("localhost","root","","sysmed")
mycursor = mydb.cursor()
def consultaprueba():
	mycursor.execute("SELECT idprueba_lab, nombre_labprueba, nombre_labdepartamento "+
		"FROM lab_prueba  INNER JOIN lab_departamento  on iddepartamento_lab=iddepartamento_labdepartamento where estado_labprueba=1 ")
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = "" ;
	
	if myconsulta is None:
		dato = {"idprueba_lab":"","nombre_labprueba":"","nombre_labdepartamento":""}
		j = json.dumps(dato, ensure_ascii=False)
	if myconsulta is not None:	
		for row in myconsulta:
			dato = {"idprueba_lab": json.dumps(row[0]),"nombre_labprueba":row[1],
			"nombre_labdepartamento":row[2] }
			j = json.dumps(dato, ensure_ascii=False)
			myjson=myjson+j+","
		eliminarultimacoma = len(myjson)
		myjson = myjson[:eliminarultimacoma - 1]	
	print("["+myjson+"]")
	mydb.close()

def consultamedico():
	mycursor.execute("SELECT idempleado, Nombre, Apellido, Especialidad FROM empleado")
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = "" ;
	
	if myconsulta is None:
		dato = {"idempleado":"","Nombre":"","Apellido":"","Especialidad":""}
		myjson = json.dumps(dato, ensure_ascii=False)
	if myconsulta is not None:
		for row in myconsulta:
			dato = {"idempleado": json.dumps(row[0]),"Nombre":row[1],
			"Apellido":row[2],"Especialidad":row[3]}
			j = json.dumps(dato, ensure_ascii=False)
			myjson=myjson+j+","
		eliminarultimacoma = len(myjson)
		myjson = myjson[:eliminarultimacoma - 1]	
	print("["+myjson+"]")
	mydb.close()

def consultapaciente():
	mycursor.execute("SELECT idpaciente, Nombre, Apellido, Identificacion FROM paciente")
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = "" ;
	
	if myconsulta is None:
		dato = {"idpaciente":"","Nombre":"","Apellido":"","Identificacion":""}
		myjson = json.dumps(dato, ensure_ascii=False)
	if myconsulta is not None:
		for row in myconsulta:
			dato = {"idpaciente": json.dumps(row[0]),"Nombre":row[1],
			"Apellido":row[2],"Identificacion":row[3]}
			j = json.dumps(dato, ensure_ascii=False)
			myjson=myjson+j+","
		eliminarultimacoma = len(myjson)
		myjson = myjson[:eliminarultimacoma - 1]	
	print("["+myjson+"]")
	mydb.close()

if(result=="Prueba"):
	consultaprueba()
if(result=="Medico"):
	consultamedico()
if(result=="Paciente"):
	consultapaciente()