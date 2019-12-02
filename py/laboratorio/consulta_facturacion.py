import pymysql, json, sys
#recibo dato
result = sys.argv[1]
#CONEXION CON LA BASE DE DATOS
mydb = pymysql.connect("localhost","root","","sysmed")
mycursor = mydb.cursor()
def consultancf():
	mycursor.execute("SELECT `idncf_lab`, `nombre_labncf` FROM `lab_ncf` WHERE `estado_labncf`=1 ORDER BY `nombre_labncf` ASC")
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = ""
	for row in myconsulta:
		dato = {"idncf_lab": json.dumps(row[0]),"nombre_labncf":row[1] }
		j = json.dumps(dato, ensure_ascii=False)
		myjson=myjson+j+","

	eliminarultimacoma = len(myjson)
	myjson = myjson[:eliminarultimacoma - 1]	
	print("["+myjson+"]")
	mydb.close()

def consultaars():
	mycursor.execute("SELECT `idars_lab`, `nombre_labars` FROM `lab_ars` WHERE `estado_labars`=1 ORDER BY `nombre_labars` ASC")
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = ""
	for row in myconsulta:
		dato = {"idars_lab": json.dumps(row[0]),"nombre_labars":row[1] }
		j = json.dumps(dato, ensure_ascii=False)
		myjson=myjson+j+","

	eliminarultimacoma = len(myjson)
	myjson = myjson[:eliminarultimacoma - 1]	
	print("["+myjson+"]")
	mydb.close()

def consultadatenumncf():
	tiponcf=sys.argv[2]
	mycursor.execute("SELECT fechaven_labncf, ultsecuencia_labncf "+
		"FROM lab_ncf WHERE estado_labncf=1 AND idncf_lab=%s", tiponcf)
	#fetchall(): devuelve todos los datos de una consulta
	myconsulta = mycursor.fetchall()
	myjson = ""
	for row in myconsulta:
		dato = {"fechaven_labncf": str(row[0]),"ultsecuencia_labncf":row[1] }
		j = json.dumps(dato, ensure_ascii=False)
		myjson=myjson+j+","

	eliminarultimacoma = len(myjson)
	myjson = myjson[:eliminarultimacoma - 1]	
	print("["+myjson+"]")
	mydb.close()


if(result=="NCF"):
	consultancf()
if(result=="ARS"):
	consultaars()
if(result=="datenumncf"):
	consultadatenumncf()
