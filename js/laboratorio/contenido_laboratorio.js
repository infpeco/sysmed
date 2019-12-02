
//ABRIR SUBMODULOS
function abrirmantenimiento () {
         window.location.href="mantenimiento.html";
    }
    function abrirfacturacion() {
        window.location.href="facturacion.html";
    }
    function abrirresultados () {
        window.location.href="resultado.html";
    }
    function abrirconsulta () {
        window.location.href="consulta.html";
    }

//---------------------------------------------------------------------------------------------------------------------
//INICIALIZAR HTML FACTURACION
if ( $("#datosgeneralesfac").length ) {datosgenerales_facturacion();}
if ( $("#botonessubmodfac").length ) {botones_generalesfac();}
if ( $("#tabbotonesfac").length ) {tabbotonesfac();}
if ( $("#datosprincipalesfac").length ) {datosprincipales_facturacion();}
if ( $("#botonesgeneralesfac").length ) {botonesgenerales_facturacion();}

function datosgenerales_facturacion(){$("#datosgeneralesfac").load("contenido/contenido_laboratorio.html #datosgeneralesfac",
  function(){$.getScript("../../js/laboratorio/funciones_especiales.js", function(){fecha_actual();});
  $.getScript("../../js/laboratorio/funciones_facturacion.js", function(){cambia_tipfactura();});
  $.getScript("../../js/laboratorio/funcionesdb_facturacion.js", function(){cargardatosars("#ars");});
  $.getScript("../../js/laboratorio/funcionesdb_facturacion.js", function(){cargardatosncf("#tiponcf");});
  $.getScript("../../js/laboratorio/funciones_facturacion.js", function(){cambio_ncf();});
});}
function botones_generalesfac(){$("#botonessubmodfac").load("contenido/contenido_laboratorio.html #botonesgenfac");}
function tabbotonesfac(){$("#tabbotonesfac").load("contenido/contenido_laboratorio.html #tabbotonesfac");}
function datosprincipales_facturacion(){$("#datosprincipalesfac").load("contenido/contenido_laboratorio.html #datosprincipalesfac");}
function botonesgenerales_facturacion(){$("#botonesgeneralesfac").load("contenido/contenido_laboratorio.html #botonesgeneralesfac");}
function datoscondicionpago(){$("#totalpagado").load("contenido/contenido_laboratorio.html #condicionpago");}

function abrirsubmodulofacturacion(btn, nombre) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {tabcontent[i].style.display = "none";}
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {tablinks[i].className = tablinks[i].className.replace(" active", "");}
  document.getElementById(nombre).style.display = "block";
  if (btn=="btndatosprincipales"){
  	document.getElementById(btn).style.background="#BDBDBD";
  	document.getElementById("btncondicionespago").style.background="#E6E6E6";
  datosprincipales_facturacion();
 $.getScript("../../js/laboratorio/funciones_facturacion.js", function(){mostrardatossubmodulo("btndatosprincipales");});
 
 }
  if (btn=="btncondicionespago"){document.getElementById(btn).style.background="#BDBDBD";
  document.getElementById("btndatosprincipales").style.background="#E6E6E6";
 datoscondicionpago();
  $.getScript("../../js/laboratorio/funciones_facturacion.js", function(){mostrardatossubmodulo("btncondicionespago");});
  }
}
//---------------------------------------------------------------------------------------------------------------------
  //INICIALIZAR HTML RESULTADO
if ( $("#datosgeneralesres").length ) {document.getElementById("datosgeneralesres").value=datosgeneral_resultadores();}
if ( $("#botonessubmodulosres").length ) {document.getElementById("botonessubmodulosres").value=botones_generalesres();}
if ( $("#tabbotonesres").length ) {document.getElementById("tabbotonesres").value=tabbotonesres();}
if ( $("#datoshematologia").length ) {document.getElementById("datoshematologia").value=contenido_hematologia();}
if ( $("#botonesgeneralesres").length ) {document.getElementById("botonesgeneralesres").value=botonesgenerales_resultado();}

 function datosgeneral_resultadores(){$("#datosgeneralesres").load("contenido/contenido_laboratorio.html #datosgeneralesres",
  function(){$.getScript("../../js/laboratorio/funciones_especiales.js", function(){fecha_actual();});
});}
function botones_generalesres(){$("#botonessubmodulosres").load("contenido/contenido_laboratorio.html #botonesgenmu");}
function tabbotonesres(){$("#tabbotonesres").load("contenido/contenido_laboratorio.html #tabbotonesres");}
function botonesgenerales_resultado(){$("#botonesgeneralesres").load("contenido/contenido_laboratorio.html #botonesgeneralesres");}
function contenido_hematologia(){$("#datoshematologia").load("contenido/contenido_laboratorio.html #contenido_hematologia");}
function contenido_uroanalisis(){$("#datosuroanalisis").load("contenido/contenido_laboratorio.html #contenido_uroanalisis");}
function contenido_pruebasespeciales(){$("#datospruebasespeciales").load("contenido/contenido_laboratorio.html #contenido_pruebasespeciales");}
function contenido_citologiavaginal(){$("#datoscitoligiavaginal").load("contenido/contenido_laboratorio.html #contenido_citologiavaginal");}
function contenido_biopsia(){$("#datosbiopsia").load("contenido/contenido_laboratorio.html #contenido_biopsia");}


 function abrirsubmoduloresultado(btn, nombre) {
  var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {tabcontent[i].style.display = "none";}
tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {tablinks[i].className = tablinks[i].className.replace(" active", "");}
  document.getElementById(nombre).style.display = "block";
  
  if (btn=="btnhematologia"){
    document.getElementById(btn).style.background="#BDBDBD";
    document.getElementById("btnuroanalisis").style.background="#E6E6E6";
    document.getElementById("btnpruebasespeciales").style.background="#E6E6E6";
    document.getElementById("btncitoligiavaginal").style.background="#E6E6E6";
    document.getElementById("btnbiopsia").style.background="#E6E6E6"; contenido_hematologia();
  }
  if (btn=="btnuroanalisis"){
    document.getElementById(btn).style.background="#BDBDBD";
    document.getElementById("btnhematologia").style.background="#E6E6E6";
    document.getElementById("btnpruebasespeciales").style.background="#E6E6E6";
    document.getElementById("btncitoligiavaginal").style.background="#E6E6E6";
    document.getElementById("btnbiopsia").style.background="#E6E6E6"; contenido_uroanalisis();
  }
  if (btn=="btnpruebasespeciales"){
    document.getElementById(btn).style.background="#BDBDBD";
    document.getElementById("btnuroanalisis").style.background="#E6E6E6";
    document.getElementById("btnhematologia").style.background="#E6E6E6";
    document.getElementById("btncitoligiavaginal").style.background="#E6E6E6";
    document.getElementById("btnbiopsia").style.background="#E6E6E6"; contenido_pruebasespeciales();
  }
  if (btn=="btncitoligiavaginal"){
    document.getElementById(btn).style.background="#BDBDBD";
    document.getElementById("btnuroanalisis").style.background="#E6E6E6";
    document.getElementById("btnpruebasespeciales").style.background="#E6E6E6";
    document.getElementById("btnhematologia").style.background="#E6E6E6";
    document.getElementById("btnbiopsia").style.background="#E6E6E6"; contenido_citologiavaginal();
  }if (btn=="btnbiopsia"){
    document.getElementById(btn).style.background="#BDBDBD";
    document.getElementById("btnuroanalisis").style.background="#E6E6E6";
    document.getElementById("btnpruebasespeciales").style.background="#E6E6E6";
    document.getElementById("btncitoligiavaginal").style.background="#E6E6E6";
    document.getElementById("btnhematologia").style.background="#E6E6E6"; contenido_biopsia();
  }
}
//---------------------------------------------------------------------------------------------------------------------
  //INICIALIZAR HTML MANTENIMIENTO
if ( $("#botonessubmodman").length ) {botones_generales();}
if ( $("#tabbotonesman").length ) {tabbotones_mantenimiento();}


function botones_generales(){$("#botonessubmodman").load("contenido/contenido_laboratorio.html #botonesgenman");}
function contenido_muestra(){$("#datosmuestra").load("contenido/contenido_laboratorio.html #contenido_muestra");
$.getScript("../../js/laboratorio/funcionesdb_mantenimiento.js", function(){cargardatosdepartamento("#departamentom");});
$.getScript("../../js/laboratorio/funcionesdb_mantenimiento.js", function(){cargardatosumedida("#umedida");});
$.getScript("../../js/laboratorio/funciones_mantenimiento.js", function(){cambio_departamentomuestra();});
}
function contenido_prueba(){$("#datosprueba").load("contenido/contenido_laboratorio.html #contenido_prueba");
$.getScript("../../js/laboratorio/funcionesdb_mantenimiento.js", function(){cargardatosdepartamento("#departamento");});}
function contenido_umedida(){$("#datosunimedida").load("contenido/contenido_laboratorio.html #contenido_umedida");}
function contenido_ars(){$("#datosars").load("contenido/contenido_laboratorio.html #contenido_ars");}
function contenido_ncf(){$("#datosncf").load("contenido/contenido_laboratorio.html #contenido_ncf");}
function botonesgenerales_mantenimiento(){$("#botonesgeneralesman").load("contenido/contenido_laboratorio.html #botonesgeneralesman");}
function tabbotones_mantenimiento(){$("#tabbotonesman").load("contenido/contenido_laboratorio.html #tabbotonesman");}

function abrirsubmodulomantenimiento(nombre) {
  var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabman");
for (i = 0; i < tabcontent.length; i++) {tabcontent[i].style.display = "none";}
tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {tablinks[i].className = tablinks[i].className.replace(" active", "");}
  document.getElementById(nombre).style.display = "block";

document.getElementById("espacio").style.display = "none";
  
  if (nombre=="datosmuestra"){ contenido_muestra();}
  if (nombre=="datosprueba"){ contenido_prueba();}
  if (nombre=="datosunimedida"){ contenido_umedida();}
  if (nombre=="datosars"){ contenido_ars();}
  if (nombre=="datosncf"){ contenido_ncf();}
  }
//---------------------------------------------------------------------------------------------------------------------
 //INICIALIZAR HTML CONSULTA
// document.getElementById("botonessubmodman").value=botones_generales();


// function botones_generales(){$("#botonessubmodman").load("contenido/contenido_laboratorio.html #botonesgencon");}



