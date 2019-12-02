import pymysql, json, sys
#recibo dato
result = sys.argv[1]
#CONEXION CON LA BASE DE DATOS
mydb = pymysql.connect("localhost","root","","sysmed")
mycursor = mydb.cursor()

def busquedaprueba():	
	busqueda= sys.argv[2]
	mycursor.execute("SELECT idprueba_lab, nombre_labprueba, nombre_labdepartamento "+
		"FROM lab_prueba  INNER JOIN lab_departamento  on iddepartamento_lab=iddepartamento_labdepartamento WHERE "+
		"idprueba_lab like %s or nombre_labprueba like %s "+
		"or nombre_labdepartamento like %s AND estado_labprueba=1 ", ("%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%"))
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = "" ;
	
	if myconsulta is None:
		dato = {"idprueba_lab":"","nombre_labprueba":"","nombre_labdepartamento":"" }
		myjson = json.dumps(dato, ensure_ascii=False)
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

def busquedapruebadet():
	busqueda= sys.argv[2]
	
	mycursor.execute("SELECT nombre_labprueba FROM lab_prueba WHERE idprueba_lab=%s ",busqueda)
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchone()
	myjson = "";
	
	if myconsulta is None:
		dato = {"nombre_labprueba":"" }
		myjson = json.dumps(dato, ensure_ascii=False)
	if myconsulta is not None:
		for row in myconsulta:
			dato = {"nombre_labprueba":row }
			myjson = json.dumps(dato, ensure_ascii=False)

	print("["+myjson+"]")
	mydb.close()

def busquedamedico():	
	busqueda= sys.argv[2]
	mycursor.execute("SELECT idempleado, Nombre, Apellido, Especialidad FROM empleado WHERE idempleado like %s or Nombre like %s "
		+"or Apellido like %s or Especialidad like %s  ", 
		("%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%"))
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

def busquedamedicodet():	
	busqueda= sys.argv[2]
	mycursor.execute("SELECT idempleado, CONCAT(Nombre, ' ', Apellido) As Nombre FROM empleado WHERE idempleado like %s or Identificacion like %s", ("%"+busqueda,"%"+busqueda))
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = "" ;
	
	if myconsulta is None:
		dato = {"idempleado":"","Nombre":"" }
		myjson = json.dumps(dato, ensure_ascii=False)
	if myconsulta is not None:
		for row in myconsulta:
			dato = {"idempleado":row[0], "Nombre":row[1] }
			myjson = json.dumps(dato, ensure_ascii=False)

	print("["+myjson+"]")
	mydb.close()

def busquedapaciente():	
	busqueda= sys.argv[2]
	mycursor.execute("SELECT idpaciente, Nombre, Apellido, Identificacion FROM paciente WHERE idpaciente like %s or Nombre like %s "
		+"or Apellido like %s or Identificacion like %s  ", 
		("%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%","%"+busqueda+"%"))
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

def busquedapacientedet():	
	busqueda= sys.argv[2]
	mycursor.execute(" SELECT idpaciente,CONCAT(Nombre, ' ', Apellido) As Nombre FROM paciente WHERE idpaciente like %s or Identificacion like %s", ("%"+busqueda,"%"+busqueda))
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = "" ;
	
	if myconsulta is None:
		dato = {"idpaciente":"","Nombre":"" }
		myjson = json.dumps(dato, ensure_ascii=False)
	if myconsulta is not None:
		for row in myconsulta:
			dato = {"idpaciente":json.dumps(row[0]),"Nombre":row[1] }
			myjson = json.dumps(dato, ensure_ascii=False)

	print("["+myjson+"]")
	mydb.close()

if(result=="Prueba"):
	busquedaprueba()
if(result=="Medico"):
	busquedamedico()
if(result=="Paciente"):
	busquedapaciente()
if(result=="Pruebadetalle"):
	busquedapruebadet()
if(result=="Medicodetalle"):
	busquedamedicodet()
if(result=="Pacientedetalle"):
	busquedapacientedet()