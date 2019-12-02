//CONTENIDO Y FUNCIONES  DE GENERAL FACTURACION

var tabla, casilla,prueba;
 
//BUSCAR EL CODIGO EN LA FILA DE LA TABLA
function buscarcodfila(elem ) {
     var valor=elem.id; var muestra="";
     if (valor=="btnagregarhem"){casilla="codigomuehem"; tabla="tablahematologia";prueba="hem";muestra="resultadomuehem";}
     if (valor=="btnagregaruro"){casilla="codigomueuro"; tabla="tablauroanalisis";prueba="orina";muestra="resultadomueuro";}
     if (valor=="btnagregarpruesp"){casilla="codigomuepruesp"; tabla="tablapruebasespeciales";prueba="pruespeciales";muestra="resultadomuepruesp";}
    var codigo = document.getElementById(casilla).value;
    var confirmacion="false";
    var numfila = document.getElementById(tabla).rows.length; //$("#tablafacturacion").find('tbody > tr').length; 
    if(document.getElementById(muestra).value<=0 ||document.getElementById(muestra).value==""){
        mensajeresultadoencero(); console.log("ko");
    }else{for (var i = 0; i < numfila; i++) {
        var datfila=document.getElementById(tabla).rows[i].cells[0].innerText;
        if(datfila==codigo){mensajeconfirmacion(i,tabla);confirmacion="true";break;}
    }
    if(confirmacion=="false")agregardatostabla(); }
}
//MENSAJE DE CONFIRMACION DE REEMPLAZAR DATOS EN LA TABLA
function mensajeconfirmacion(fila){
 swal({
       title: "Muestra ya existe. ¿Desea reemplazarla?",text: "",icon: "info",buttons: true})
      .then((willDelete) => {
        if (willDelete) {document.getElementById(tabla).deleteRow(fila);agregardatostabla();} 
      });
}
function mensajeresultadoencero(){
 swal({
       title: "Debe digitar el resultado de la muestra.",text: "",icon: "error"});
}
//INSERTAR UNA FILA DE DATOS EN LA TABLA
function agregardatostabla(){
    var codmuestra,nommuestra,resmuestra,unimuestra,minmuestra,maxmuestra;
if(prueba=="hem"){codmuestra="codigomuehem"; nommuestra="nombremuehem"; resmuestra="resultadomuehem";unimuestra="unidadmuehem"; minmuestra="vminimomuehem"; maxmuestra="vmaximomuehem";}
if(prueba=="orina"){codmuestra="codigomueuro"; nommuestra="nombremueuro"; resmuestra="resultadomueuro";unimuestra="unidadmueuro"; minmuestra="vminimomueuro"; maxmuestra="vmaximomueuro";}
if(prueba=="pruespeciales"){codmuestra="codigomuepruesp"; nommuestra="nombremuepruesp"; resmuestra="resultadomuepruesp";unimuestra="unidadmuepruesp"; minmuestra="vminimomuepruesp"; maxmuestra="vmaximomuepruesp";}

    var codigo = document.getElementById(codmuestra).value;
    var valor = document.getElementById(nommuestra).value;
    var resultado = document.getElementById(resmuestra).value;
    var unidad = document.getElementById(unimuestra).value;
    var minimo = document.getElementById(minmuestra).value;
    var maximo = document.getElementById(maxmuestra).value;
    var botoneliminar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Eliminar' id='btneliminar' onclick='eliminarfila(this)'> <img src='../../images/laboratorio/botones/eliminar.png' width='15px' ></button>"
    var botonmodificar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Modificar' id='btnmodificar' onclick='modificarfila(this)'> <img src='../../images/laboratorio/botones/modificar.png' width='15px'></button>"
    var espacio="<div style='padding-left: 5px; display:inline'></div>";

    var fila="<tr ><td style='color: black;text-align: center'>"+codigo+"</td><td style='color: black;text-align: center'>"+valor +"</td>"+
    "<td style='color: black;text-align: center'>"+resultado +"</td><td style='color: black;text-align: center'>"+unidad+"</td><td style='color: black;text-align: center'>"+
    minimo+"</td>"+"<td style='color: black;text-align: center'>"+maximo+"</td>"+"<td style='text-align: center'>"+botoneliminar+espacio+botonmodificar+"</td></tr>";
   document.getElementById(tabla).insertRow(-1).innerHTML =fila;    
   //LIMPIAR LAS CASILLAS DEL DETALLE
    document.getElementById(codmuestra).value ="";          document.getElementById(nommuestra).value = "";
    document.getElementById(resmuestra).value = "";     document.getElementById(unimuestra).value = "";
    document.getElementById(minmuestra).value = "";     document.getElementById(maxmuestra).value = "";    
    document.getElementById(codmuestra).focus();
    
    
  }
//ELIMINAR UNA FILA DE LA TABLA
function eliminarfila(fila) {
    var d = fila.parentNode.parentNode.rowIndex;
      document.getElementById(tabla).deleteRow(d);
}
//MODIFICAR Y ELIMINAR UNA FILA DE LA TABLA
function modificarfila(fila) {
     var d = fila.parentNode.parentNode.rowIndex;
     var codmuestra,nommuestra,resmuestra,unimuestra,minmuestra,maxmuestra;
if(prueba=="hem"){codmuestra="codigomuehem"; nommuestra="nombremuehem"; resmuestra="resultadomuehem";unimuestra="unidadmuehem"; minmuestra="vminimomuehem"; maxmuestra="vmaximomuehem";}
if(prueba=="orina"){codmuestra="codigomueuro"; nommuestra="nombremueuro"; resmuestra="resultadomueuro";unimuestra="unidadmueuro"; minmuestra="vminimomueuro"; maxmuestra="vmaximomueuro";}
if(prueba=="pruespeciales"){codmuestra="codigomuepruesp"; nommuestra="nombremuepruesp"; resmuestra="resultadomuepruesp";unimuestra="unidadmuepruesp"; minmuestra="vminimomuepruesp"; maxmuestra="vmaximomuepruesp";}

    document.getElementById(codmuestra).value=document.getElementById(tabla).rows[d].cells[0].innerText;
    document.getElementById(nommuestra).value=document.getElementById(tabla).rows[d].cells[1].innerText;
    document.getElementById(resmuestra).value=document.getElementById(tabla).rows[d].cells[2].innerText;
    document.getElementById(unimuestra).value=document.getElementById(tabla).rows[d].cells[3].innerText;
    document.getElementById(minmuestra).value=document.getElementById(tabla).rows[d].cells[4].innerText;
    document.getElementById(maxmuestra).value=document.getElementById(tabla).rows[d].cells[5].innerText;
    eliminarfila(fila);
}