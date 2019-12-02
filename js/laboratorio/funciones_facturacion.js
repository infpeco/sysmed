//CONTENIDO Y FUNCIONES  DE GENERAL FACTURACION
var ruta="../../js/laboratorio/funcionesdb_facturacion.js";
//VARIABLES GLOBALES
var totalfacturacion="";
var tipfactura="Aseguradora";
var tabladetalle = [];
var datosprincipales = [];
var condicionpago = [];
var storage = window.localStorage;

//BUSCAR EL CODIGO EN LA FILA DE LA TABLA
function buscarcodfila() {
	var codigo = document.getElementById("codprueba").value;
	var confirmacion="false";
	var numfila = document.getElementById("tablafacturacion").rows.length; //$("#tablafacturacion").find('tbody > tr').length; 
	if(document.getElementById("montoprueba").value<=0 ||document.getElementById("montoprueba").value==""){
        mensajemontoencero();
    }else{for (var i = 0; i < numfila; i++) {
        var datfila=document.getElementById("tablafacturacion").rows[i].cells[0].innerText;
        if(datfila==codigo){mensajepruebaexistente(i);confirmacion="true";break;}
    }
    if(confirmacion=="false")agregardatostabla();   
    }
     
}
//MENSAJE DE CONFIRMACION DE REEMPLAZAR DATOS EN LA TABLA
function mensajepruebaexistente( fila){
 swal({
       title: "Prueba ya existe. ¿Desea reemplazarla?",text: "",icon: "info",buttons: true})
      .then((willDelete) => {
        if (willDelete) {document.getElementById('tablafacturacion').deleteRow(fila);agregardatostabla();} 
      });
}
//MENSAJE DE CONFIRMACION DE REEMPLAZAR DATOS EN LA TABLA
function mensajemontoencero(){
 swal({
       title: "Debe digitar el precio de la prueba.",text: "",icon: "error"});
}

//INSERTAR UNA FILA DE DATOS EN LA TABLA
function agregardatostabla(){
    var codigo = document.getElementById("codprueba").value;
    var prueba = document.getElementById("nomprueba").value;
    var cantidad = document.getElementById("cantprueba").value;
    var precio = document.getElementById("precioprueba").value;
    var monto = document.getElementById("montoprueba").value;
    var botoneliminar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Eliminar' id='btneliminar' onclick='eliminarfila(this)'> <img src='../../images/laboratorio/botones/eliminar.png' width='15px' ></button>"
    var botonmodificar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Modificar' id='btnmodificar' onclick='modificarfila(this)'> <img src='../../images/laboratorio/botones/modificar.png' width='15px'></button>"
    var espacio="<div style='padding-left: 5px; display:inline'></div>";

    var fila="<tr ><td style='color: black;text-align: center'>"+codigo+"</td><td style='color: black;text-align: center'>"+prueba +"</td>"+
    "<td style='color: black;text-align: center'>"+cantidad +"</td><td style='color: black;text-align: center'>"+precio+"</td><td style='color: black;text-align: center'>"+
    monto+"</td><td style='text-align: center'>"+botoneliminar+espacio+botonmodificar+"</td></tr>";
   document.getElementById("tabladetallefactura").insertRow(-1).innerHTML =fila;	
   //LIMPIAR LAS CASILLAS DEL DETALLE
    document.getElementById("codprueba").value ="";			document.getElementById("nomprueba").value = "";
    document.getElementById("cantprueba").value = "1.00";		document.getElementById("precioprueba").value = "";
    document.getElementById("montoprueba").value = "";		document.getElementById("codprueba").focus();
    calculartotalfacturar();
    if(tipfactura=="Aseguradora")document.getElementById("montoreclamacion").value =totalfacturacion;
    
  }
//ELIMINAR UNA FILA DE LA TABLA
function eliminarfila(fila) {var d=fila.parentNode.parentNode.rowIndex;document.getElementById('tablafacturacion').deleteRow(d);}
//MODIFICAR Y ELIMINAR UNA FILA DE LA TABLA
function modificarfila(fila) {
	 var d = fila.parentNode.parentNode.rowIndex;
    document.getElementById("codprueba").value=document.getElementById("tablafacturacion").rows[d].cells[0].innerText;
    document.getElementById("nomprueba").value=document.getElementById("tablafacturacion").rows[d].cells[1].innerText;
    document.getElementById("cantprueba").value=document.getElementById("tablafacturacion").rows[d].cells[2].innerText;
    document.getElementById("precioprueba").value=document.getElementById("tablafacturacion").rows[d].cells[3].innerText;
    document.getElementById("montoprueba").value=document.getElementById("tablafacturacion").rows[d].cells[4].innerText;
    eliminarfila(fila);
}
//MULTIPLICACION DEL PRECIO Y CANTIDAD
function mulpreciocant(){
	var cantidad = parseFloat((document.getElementById("cantprueba").value).replace(',', ''));
    var precio = parseFloat((document.getElementById("precioprueba").value).replace(',', ''));
    if(cantidad==''||cantidad==null)cantidad=1;
    if(precio=='' ||precio==null)cantidad=0;
    var monto=cantidad*precio;
    if(isNaN(monto))monto=0;
    monto=monto.toLocaleString('en', { style: 'decimal', decimal: '3' });
    document.getElementById("montoprueba").value  =monto ;
}
//CALCULAR TOTAL DE LA FACTURA
function calculartotalfacturar() {
	var total = 0;  
	var numfila = document.getElementById("tablafacturacion").rows.length;
	for (var i = 1; i < numfila; i++) {
		var monto=parseFloat((document.getElementById("tablafacturacion").rows[i].cells[4].innerText).replace(',', ''));
		total+=monto;
	}
    if(isNaN(total))total=0;
	total=total.toLocaleString('en', { style: 'decimal', decimal: '3' });
	totalfacturacion= total ;
};
function total_devolver() {
	var monto = parseFloat((document.getElementById("totalfacturar").value).replace(',', ''));
	var recibido = parseFloat((document.getElementById("totalrecibido").value).replace(',', ''));
    var total;
    total=recibido-monto;
    var cof;
    cof=isNaN(total);
    if(cof==true)total=0;
    total=total.toLocaleString('en', { style: 'decimal', decimal: '3' });
    document.getElementById("totaldevuelto").value  =total ;
}

function capturardatossubmodulo(btn){
	if(btn=="btncondicionespago")capturarvisitadetalle();
    if(btn=="btndatosprincipales")capturarvisitapago();
}

function capturarvisitadetalle(){
    window.localStorage.removeItem("datosprincipales");
    window.localStorage.removeItem("tabladetalle");
    datosprincipales = [];
    tabladetalle = [];
	var codpaciente=document.getElementById("codpaciente").value;
	var nompaciente=document.getElementById("nompaciente").value;
	var codmedico=document.getElementById("codmedico").value;
	var nommedico=document.getElementById("nommedico").value;

    var datosprin = new Object();
    datosprin.codpaciente = codpaciente;
    datosprin.nompaciente = nompaciente;
    datosprin.codmedico = codmedico;
    datosprin.nommedico = nommedico;
    datosprincipales.push(datosprin);

	var numfila = document.getElementById("tablafacturacion").rows.length;
	for (var i = 1; i < numfila; i++) {
		var det = new Object();
		det.codigo = document.getElementById("tablafacturacion").rows[i].cells[0].innerText;
		det.prueba = document.getElementById("tablafacturacion").rows[i].cells[1].innerText;
		det.cantidad = document.getElementById("tablafacturacion").rows[i].cells[2].innerText;
		det.precio = document.getElementById("tablafacturacion").rows[i].cells[3].innerText;
		det.monto = document.getElementById("tablafacturacion").rows[i].cells[4].innerText;
		tabladetalle.push(det);
	}
    storage.setItem('datosprincipales', JSON.stringify(datosprin));
    storage.setItem('tabladetalle', JSON.stringify(tabladetalle));
}
function capturarvisitapago(){
    window.localStorage.removeItem("condicionpago");
    condicionpago=[];
	totalfacturar=$("#totalfacturar").val();
	totalrecibido=$("#totalrecibido").val();
	totaldevuelto=$("#totaldevuelto").val();
    var canefectivo="";          
    var cantcredito="";     var numtcredito="";
    var cantdedito="";      var numtdedito="";
    var cancheque="";       var numcheque="";

    if ($('input:checkbox[id=chkefectivo]:checked').val()=="efectivo") {
        canefectivo=$("#canefectivo").val();}
    if ($('input:checkbox[id=chktcredito]:checked').val()=="efectivo") {
        cantcredito=$("#cantcredito").val();    numtcredito=$("#numtcredito").val();}
    if ($('input:checkbox[id=chktdedito]:checked').val()=="efectivo") {
        cantdedito=$("#cantdedito").val();      numtdedito=$("#numtdedito").val();}
    if ($('input:checkbox[id=chkcheque]:checked').val()=="efectivo") {
        cancheque=$("#cancheque").val();        numcheque=$("#numcheque").val();}
    
    var condicionpag = new Object();
    condicionpag.totalfacturar = totalfacturar;
    condicionpag.totalrecibido = totalrecibido;
    condicionpag.totaldevuelto = totaldevuelto;
    if(canefectivo!=""){condicionpag.efectivo = "true";condicionpag.canefectivo = canefectivo;}
    if(cantcredito!=""){condicionpag.credito = "true";
    condicionpag.cantcredito = cantcredito; condicionpag.numtcredito = numtcredito;}
    if(cantdedito!=""){condicionpag.debito = "true";
    condicionpag.cantdedito = cantdedito; condicionpag.numtdedito = numtdedito;}
    if(cancheque!=""){condicionpag.cheque = "true";
    condicionpag.cancheque = cancheque; condicionpag.numcheque = numcheque;}

    storage.setItem('condicionpago', JSON.stringify(condicionpag));
    
}

function mostrardatossubmodulo(btn){
	if(btn=="btncondicionespago"){mostrarvisitapago();}
    if(btn=="btndatosprincipales")mostrarvisitadetalle();
}
function mostrarvisitapago(){
    condicionpago = JSON.parse(storage.getItem('condicionpago'));
    console.log(condicionpago.totalfacturar);
	$("#totalfacturar").val(condicionpago.totalfacturar);
    $("#totalrecibido").val(condicionpago.totalrecibido);
    $("#totaldevuelto").val(condicionpago.totaldevuelto);
	
}
function mostrarvisitadetalle(){
    datosprincipales = JSON.parse(storage.getItem('datosprincipales'));
    tabladetalle = JSON.parse(storage.getItem('tabladetalle'));
	$("#codpaciente").val(datosprincipales.codpaciente);
	document.getElementById("nompaciente").value  =datosprincipales.nompaciente;
	document.getElementById("codmedico").value  =datosprincipales.codmedico;
	document.getElementById("nommedico").value  =datosprincipales.nommedico;
	for(i in tabladetalle) {agregardetalle(tabladetalle[i]);}
 
}
function agregardetalle( est){
    
    var botoneliminar="<button type='submit' class='btn btn-secondary py-1 px-3' title='Eliminar' id='btneliminar' onclick='eliminarfila(this)'> <img src='../../images/laboratorio/botones/eliminar.png' width='15px' ></button>"
    var botonmodificar="<button type='submit' class='btn btn-secondary py-1 px-3' title='Modificar' id='btnmodificar' onclick='modificarfila(this)'> <img src='../../images/laboratorio/botones/modificar.png' width='15px'></button>"
    var espacio="<div style='padding-left: 5px; display:inline'></div>";

    var fila="<tr ><td style='color: black;text-align: center'>"+est.codigo+"</td><td style='color: black;text-align: center'>"+est.prueba +"</td>"+
    "<td style='color: black;text-align: center'>"+est.cantidad +"</td><td style='color: black;text-align: center'>"+est.precio+"</td><td style='color: black;text-align: center'>"+
    est.monto+"</td><td style='text-align: center'>"+botoneliminar+espacio+botonmodificar+"</td></tr>";
   document.getElementById("tabladetallefactura").insertRow(-1).innerHTML =fila;	
  }
 function cambia_tipfactura(){
     $("#tipofactura").change( function() {
        if ($(this).val() == "1") {
    var filaasegurado1="<tr style='text-align:left'><!--ARS-->"+
    "<td> <label><h5 >ARS</h5></label>"+
    " <select name='' id='ars' class='form-control'style='width: 75% ;display:inline '>"+
    " <option value=''>--Seleccionar-- </option>"+
    "</select></td><!--tipo NCF-->"+
    "<td><label style='padding-right:5px'><h5>NCF</h5></label>"+
    "<select name='' id='tiponcf' class='form-control'style='width:75%;display:inline '>"+
    "<option value=''>--Seleccionar-- </option>"+
    "</select></td><!--Numero NCF-->"+
    "<td><label style='padding-right:5px'><h5>Num NCF</h5></label>"+
    "<input type='text' class='desabilitado' disabled id='numeroncf' style='width:56%;display:inline;' ></td>"+
    "<!--Fecha NCF-->"+
    "<td style='text-align:left; width:24%'><label style='padding-right:5px;'><h5 >FV</h5></label>"+
    "<input type='date' class='form-control' id='fechancf' style='width:78% ;display:inline;'disabled> </td>"+
    " </tr>";
    var filaasegurado2="<tr style='text-align:left'>"+
    " <!--Núm. Póliza-->"+
    "<td> <label><h5 ># Póliza</h5></label>"+
    " <input type='text' class='form-control' id='numpoliza' style='width:62%;display:inline;' ></td>"+
    "<!--Núm. Reclamación-->"+
    "<td><label style='padding-right:5px'><h5># Reclamación</h5></label>"+
    "<input type='text' class='form-control' id='numreclamacion' style='width:42%;display:inline;' ></td>"+
    "<!--Monto  Reclamación-->"+
    "<td><label style='padding-right:5px'><h5>Monto Recl.</h5></label>"+
    "<input type='text' disabled class='desabilitado' id='montoreclamacion' style='width:49%;display:inline;' ></td>"+
    "<!--Monto Cobertura-->"+
    "<td style='text-align:left; width:24%'><label style='padding-right:5px;'><h5 >Cobertura</h5></label>"+
    "<input type='text' class='form-control' id='montocobertura' style='width:53% ;display:inline;'> </td></tr>";
        document.getElementById('tablageneral').deleteRow(1);document.getElementById('tablageneral').deleteRow(1);
        document.getElementById("tablageneral").insertRow(-1).innerHTML =filaasegurado1;
        document.getElementById("tablageneral").insertRow(-1).innerHTML =filaasegurado2;
        $.getScript(ruta, function(){cargardatosars("#ars");});
        $.getScript(ruta, function(){cargardatosncf("#tiponcf");});cambio_ncf ();
        tipfactura="Aseguradora";
        } else {
            var filaprivado="<tr><!--tipo NCF-->"+
    "<td colspan='2' style='text-align:left'><label style='padding-right:5px'><h5>NCF</h5></label>"+
    "<select name='' id='tiponcf' class='form-control'style='width:80%;display:inline '>"+
    "<option value=''>--Seleccionar-- </option>"+
    "</select></td><!--Numero NCF-->"+
    "<td colspan='1' style='text-align:left'><label style='padding-right:5px'><h5>Núm. NCF</h5></label>"+
    "<input type='text' class='desabilitado' disabled id='numeroncf' style='width:55%;display:inline;' ></td>"+
    "<!--Fecha NCF-->"+
    "<td colspan='1' style='text-align:left'><label style='padding-right:10px;'><h5 >FV</h5></label>"+
    "<input type='date' class='form-control' id='fechancf' style='width:70% ;display:inline;'disabled></tr>";
        document.getElementById('tablageneral').deleteRow(1);
        document.getElementById('tablageneral').deleteRow(1);
        document.getElementById("tablageneral").insertRow(-1).innerHTML =filaprivado+"";
        document.getElementById("tablageneral").insertRow(-1).innerHTML ="<tr><td colspan='4'><br></td></tr>";tipfactura="Privada";

        $.getScript(ruta, function(){cargardatosncf("#tiponcf");});cambio_ncf ();
       
        }
    });
 }

  function cambio_ncf (){
        $("#tiponcf").change( function() {
        $.getScript(ruta, function(){cargardatenumncf("#tiponcf","#fechancf","#numeroncf");});

    });}
function busquedaenterprueba(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==13){$("#tablaconsultapruebafac tr").remove();
        $.getScript(ruta, function(){consultaespecificaprueba();});
    }
}
function busquedagenprueba(e) {
    if(code==8 ){
        if ($("#busquedapruebafac").val().length>0) {$.getScript(ruta, function(){consultaespecificaprueba();});}
        else {$.getScript(ruta, function(){consultageneralprueba();});}
    }
}

function busquedapruebadetalle(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if($("#codprueba").val()!="" && $("#codprueba").val()!=null){
        $.getScript(ruta, function(){consultapruebadetalle();});
    }

    if(code==8){
       $("#nomprueba").val("");       $("#cantprueba").val("1.00");
       $("#precioprueba").val("");       $("#montoprueba").val("");
    }  
}

function busquedaenterpaciente(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==13){$("#tablaconsultapacientefac tr").remove();
        $.getScript(ruta, function(){consultaespecificapaciente();});
    }
}
function busquedagenpaciente(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==8 ){
        if ($("#busquedapacientefac").val().length>0) {$.getScript(ruta, function(){consultaespecificapaciente();});}
        else {$.getScript(ruta, function(){consultageneralpaciente();});}
    }
}

function busquedapacientedetalle(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==13){
        $.getScript(ruta, function(){consultapacientedetalle();});
    }
}

function limpiarpacientedetalle(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==8){
       $("#nompaciente").val("");       $("#nompaciente").val("");
    }  
}
function busquedaentermedico(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==13){$("#tablaconsultamedicofac tr").remove();
        $.getScript(ruta, function(){consultaespecificamedico();});
    }
}
function busquedagenmedico(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==8 ){
        if ($("#busquedamedicofac").val().length>0) {$.getScript(ruta, function(){consultaespecificamedico();});}
        else {$.getScript(ruta, function(){consultageneralmedico();});}
    }
}

function busquedamedicodetalle(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==13){
        $.getScript(ruta, function(){consultamedicodetalle();});
    }
}
function limpiarmedicodetalle(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==8){
       $("#codmedico").val("");       $("#nommedico").val("");
    }  
}


