//CARGAR DEPARTAMENTO EN PRUEBA
var ruta="../../js/laboratorio/funcionesdb_mantenimiento.js";
    function cambio_departamentomuestra (){
        $("#departamentom").change( function() {
     	$.getScript(ruta, function(){cargardatosprueba("#departamentom");});
    });}

function busquedaenterprueba(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==13){$("#tablaconsultaprueba tr").remove();
    	$.getScript(ruta, function(){consultaespecificaprueba();});
    }
}
function busquedagenprueba(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
        if(code==8 ){
        if ($("#busquedaprueba").val().length>0) {$.getScript(ruta, function(){consultaespecificaprueba();});}
        else {$.getScript(ruta, function(){consultageneralprueba();});}
    }
}
function busquedaentermuestra(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==13){$("#tablaconsultamuestra tr").remove();
        $.getScript(ruta, function(){consultaespecificamuestra();});
    }
}
function busquedagenmuestra(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==8 ){
        if ($("#busquedamuestra").val().length>0) {$.getScript(ruta, function(){consultaespecificamuestra();});}
        else {$.getScript(ruta, function(){consultageneralmuestra();});}
    }
}

function busquedaenterumedida(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==13){$("#tablaconsultamuestra tr").remove();
        $.getScript(ruta, function(){consultaespecificaumedida();});
    }
}
function busquedagenumedida(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
        if(code==8 ){
        if ($("#busquedaumedida").val().length>0) {$.getScript(ruta, function(){consultaespecificaumedida();});}
        else {$.getScript(ruta, function(){consultageneralumedida();});}
    }
}

function busquedaenterars(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==13){$("#tablaconsultaars tr").remove();
        $.getScript(ruta, function(){consultaespecificaars();});
    }
}
function busquedagenars(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
        if(code==8 ){
        if ($("#busquedaars").val().length>0) {$.getScript(ruta, function(){consultaespecificaars();});}
        else {$.getScript(ruta, function(){consultageneralars();});}
    }
}

function busquedaenterncf(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==13){$("#tablaconsultancf tr").remove();
        $.getScript(ruta, function(){consultaespecificancf();});
    }
}
function busquedagenncf(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
        if(code==8 ){
        if ($("#busquedancf").val().length>0) {$.getScript(ruta, function(){consultaespecificancf();});}
        else {$.getScript(ruta, function(){consultageneralncf();});}
    }
}
 
 
//  function registrarDatosprueba(){
//     console.log("Hora de registro");
//     var est;
//     if($("#estprueba").val()==1)est='A';
//     if($("#estprueba").val()==2)est='D';
//      $("#contenido_prueba").submit(function(e){
//         const datosPost = {
//         	nombre = $("#nomprueba").val(),
//     		departamento =document.getElementById("departamento").value,
//     		estado = est
//         };
//         let url = '../../servidor/laboratorio/registrar_prueba.php';
//         console.log(datosPost);
//         e.preventDefault();
//         $.post(url, datosPost, function(response){
//             $("#contenido_prueba").trigger('reset');
//             console.log(response);
//         });});
    
// }

