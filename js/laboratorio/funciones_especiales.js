function fecha_actual(){
 var fecha = new Date(); //Fecha actual
  var mes = fecha.getMonth()+1; //obteniendo mes
  var dia = fecha.getDate(); //obteniendo dia
  var ano = fecha.getFullYear(); //obteniendo año
  if(dia<10) dia='0'+dia; //agrega cero si el menor de 10
  if(mes<10) mes='0'+mes; //agrega cero si el menor de 10
$("#fecha").val(ano+"-"+mes+"-"+dia);
}

//VALIDAR NUMEROS
 function validarnumeros(event) {
    if((event.charCode >= 48 && event.charCode <= 57 )||event.charCode==46)return true;
     else return false;        
}
 function validarnumeroiden(event) {
    if((event.charCode >= 48 && event.charCode <= 57 )||event.charCode==46||event.charCode==45)return true;
     else return false;        
}
//VALIDAR LETRAS
function validarletras(event) {
	if(event.charCode < 48 || event.charCode > 57)return true;
     else return false;        
}
document.addEventListener("load", fecha_actual());
