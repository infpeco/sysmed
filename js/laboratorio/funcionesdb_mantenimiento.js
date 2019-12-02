//CARGAR DEPARTAMENTO EN DEPARTAMENTO
var path= '../../php/laboratorio/';
var consultamanphp='consulta_mantenimiento.php';
var consultagenmanphp='consulta_genmantenimiento.php';
var registrarmanphp='registrar_mantenimiento.php';
var modificarmanphp='modificar_mantenimiento.php';
var busquedamanphp='busqueda_mantenimiento.php';

 function cargardatosdepartamento(name){
  var nombre="Departamento";
  $.ajax({
    url:path+consultamanphp,
    type: 'POST',
    data:"departamentonom="+nombre,
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
 		$(name).html("<option value='0' selected>--Seleccionar--</option>");
      data.forEach(element=>{
      	$(name).append("<option value="+element.iddepartamento_lab+">"+element.nombre_labdepartamento+"</option>");
      })
    }
  });
 }
//------------------------------------------------------------------------------------------
//FUNCIONES DE PRUEBA
function registrar_prueba(){
    var nombre=$("#nomprueba").val();
    var departamento=$("#departamento").val();
    var estado=$("#estprueba").val();
    if(nombre=="" ||departamento==0){
      swal({
       title: "Datos incompletos, llenar los datos faltantes.",text: "",icon: "warning"});
    }
    else{
      $.ajax({
      type:"POST",
      url:path+registrarmanphp,
      data:{nomprueba:nombre,iddepartamento:departamento,estprueba:estado},
      success:function(r){
        if(r=="Esta conectado Insertado"){mensaje_insertado();}
        else{mensaje_error(r);}
        $.getScript("../../js/laboratorio/contenido_laboratorio.js", function(){contenido_prueba();});
      }
    });
    }
 }
 function modificar_prueba(){
    var codigo=$("#idprueba").val();
    var nombre=$("#nomprueba").val();
    var departamento=$("#departamento").val();
    var estado=$("#estprueba").val();
    if(nombre=="" ||departamento==0){
      swal({
       title: "Datos incompletos, llenar los datos faltantes.",text: "",icon: "warning"});
    }
    else{
    $.ajax({
      type:"POST",
      url:path+modificarmanphp,
      data:{idprueba:codigo,nomprueba:nombre,estprueba:estado,iddepartamento:departamento},
      success:function(r){
        if(r=="Esta conectado Actualizado"){mensaje_actualizado();}
        else{mensaje_error(r);}
        $.getScript("../../js/laboratorio/contenido_laboratorio.js", function(){contenido_prueba();});
      }
    });}
 }
  function cargardatosprueba(name){
    $.ajax({
      type:"POST",
      url:path+consultamanphp,
      data:"departamentomue=" + $(name).val(),
      success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
      $("#prueba").find('option').remove();
      $("#prueba").html("<option value='0' selected>-Seleccionar-</option>");
      data.forEach(element=>{
      $("#prueba").append("<option value="+element.idprueba_lab+">"+element.nombre_labprueba+"</option>");
      })
    }
    });
 }
 function consultageneralprueba(){
  nombre="Prueba";
  $("#tablaconsultaprueba tr").remove();
  $.ajax({
    url:path+consultagenmanphp,
    type: 'POST',
    data:"prueba= "+nombre,
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
     data.forEach(element=>{
      var estado='Activo';
      if(element.estado_labprueba=='D')estado='Desactivo';
      var botonmodificar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Modificar' id='btnmodificarpru' onclick='modificarprueba(this)'> <img src='../../images/laboratorio/botones/modificar.png' width='15px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idprueba_lab+"</td><td style='color: black;text-align: center'>"+element.nombre_labprueba +"</td>"+
    "<td style='color: black;text-align: center'>"+estado +"</td><td style='color: black;text-align: center'>"+element.nombre_labdepartamento+"</td>"+
    "<td style='text-align: center'>"+botonmodificar+"</td></tr>";
   document.getElementById("tablaconsultaprueba").insertRow(-1).innerHTML =fila;  
    })
    }
  });
 }

 function modificarprueba(fila){
  var d=fila.parentNode.parentNode.rowIndex; d-=1;
  var codigo=document.getElementById("tablaconsultaprueba").rows[d].cells[0].innerText;
  var nombre=document.getElementById("tablaconsultaprueba").rows[d].cells[1].innerText;
  var estado=document.getElementById("tablaconsultaprueba").rows[d].cells[2].innerText;
  var departamento=document.getElementById("tablaconsultaprueba").rows[d].cells[3].innerText;
  $('#modalprueba').modal('hide'); $("#tablaconsultaprueba tr").remove();
  document.getElementById("tdcodpru").style.width = "30%";
  document.getElementById("labcodpru").style.display = "block";
  document.getElementById("idprueba").style.display = "inline";
  $("#idprueba").val(codigo);
  $("#nomprueba").val(nombre);
    $("#departamento").val(departamento);
    $("#departamento option:contains("+departamento+")").attr("selected", true);
    $("#estprueba option:contains("+estado+")").attr("selected", true);
    $( "#idprueba" ).prop( "disabled", true );
    document.getElementById("btnguardarprueba").style.display = 'none';
    document.getElementById("btnmodificarprueba").style.display = 'inline';
 }
 function limpiarconsultageneralprueba(){$('#modalprueba').modal('hide'); 
 $("#busquedaprueba").val(""); $("#tablaconsultaprueba tr").remove();}

function consultaespecificaprueba(){
  var busqueda=$("#busquedaprueba").val();
  $("#tablaconsultaprueba tr").remove();
  nombre="Prueba";
  $.ajax({
    url:path+busquedamanphp,
    type: 'POST',
    data:{busquedaprueba:busqueda, prueba:nombre},
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
      data.forEach(element=>{
        console.log(data);
      var estado='Activo';
      if(element.estado_labprueba=='D')estado='Desactivo';
      var botonmodificar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Modificar' id='btnmodificarpru' onclick='modificarprueba(this)'> <img src='../../images/laboratorio/botones/modificar.png' width='15px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idprueba_lab+"</td><td style='color: black;text-align: center'>"+element.nombre_labprueba +"</td>"+
    "<td style='color: black;text-align: center'>"+estado +"</td><td style='color: black;text-align: center'>"+element.nombre_labdepartamento+"</td>"+
    "<td style='text-align: center'>"+botonmodificar+"</td></tr>";
   document.getElementById("tablaconsultaprueba").insertRow(-1).innerHTML =fila;  
    })
    }
  });
}
//------------------------------------------------------------------------------------------
//FUNCIONES DE  MUESTRA
function registrar_muestra(){
    var nombre=$("#nommuestra").val();        var detalle=$("#detmuestra").val();
    var idprueba=$("#prueba").val();          var medida=$("#umedida").val();
    var minimo=$("#vminimo").val();           var maximo=$("#vmaximo").val();
    var estado=$("#estmuestra").val();
    if(nombre=="" ||idprueba==0 ||departamento==0||medida==0||maximo==""||minimo==""){
      swal({
       title: "Datos incompletos, llenar los datos faltantes.",text: "",icon: "warning"});
    }
    else{
    $.ajax({
      type:"POST",
      url:path+registrarmanphp,
      data:{nommuestra:nombre, detmuestra:detalle,prueba:idprueba,umedida:medida, vminimo:minimo, vmaximo:maximo, estmuestra:estado},
      success:function(r){
        if(r=="Esta conectado Insertado"){mensaje_insertado();}
        else{mensaje_error(r);}
        $.getScript("../../js/laboratorio/contenido_laboratorio.js", function(){contenido_muestra();});
      }
    });}
 }
 function modificar_muestra(){
    var codigo=$("#idmuestra").val();  
    var nombre=$("#nommuestra").val();        var detalle=$("#detmuestra").val();
    var idprueba=$("#prueba").val();          var medida=$("#umedida").val();
    var minimo=$("#vminimo").val();           var maximo=$("#vmaximo").val();
    var estado=$("#estmuestra").val();
    if(nombre=="" ||idprueba==0 ||departamento==0||medida==0||maximo==""||minimo==""){
      swal({
       title: "Datos incompletos, llenar los datos faltantes.",text: "",icon: "warning"});
    }
    else{
    $.ajax({
      type:"POST",
      url:path+modificarmanphp,
      data:{idmuestra:codigo, nommuestra:nombre, detmuestra:detalle,prueba:idprueba,umedida:medida, vminimo:minimo, vmaximo:maximo, estmuestra:estado},
      success:function(r){
        if(r=="Esta conectado Actualizado"){mensaje_actualizado();}
        else{mensaje_error(r);}
        $.getScript("../../js/laboratorio/contenido_laboratorio.js", function(){contenido_muestra();});
      }
    });}
 }

  function consultageneralmuestra(){
  nombre="Muestra";
  $("#tablaconsultamuestra tr").remove();
  $.ajax({
    url:path+consultagenmanphp,
    type: 'POST',
    data:"muestra= "+nombre,
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
     data.forEach(element=>{
      var estado='Activo';
      if(element.estado_labprueba=='D')estado='Desactivo';
      var botonmodificar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Modificar' id='btnmodificarmue' onclick='modificarmuestra(this)'> <img src='../../images/laboratorio/botones/modificar.png' width='15px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idmuestra_lab+"</td><td style='color: black;text-align: center'>"+element.nombre_labmuestra +"</td>"+
    "<td style='color: black;text-align: center'>"+element.detalle_labmuestra +"</td><td style='color: black;text-align: center'>"+element.nombre_labdepartamento+"</td>"+
    "<td style='color: black;text-align: center'>"+element.nombre_labprueba +"</td><td style='color: black;text-align: center'>"+element.vminimo_labmuestra+"</td>"+
    "<td style='color: black;text-align: center'>"+element.vmaximo_labmuestra +"</td><td style='color: black;text-align: center'>"+element.abv_labumedida+"</td>"+
    "<td style='color: black;text-align: center'>"+ estado+"</td>"+
    "<td style='text-align: center'>"+botonmodificar+"</td></tr>";
   document.getElementById("tablaconsultamuestra").insertRow(-1).innerHTML =fila;  })
    }
  });
 }

 function modificarmuestra(fila){
  var d=fila.parentNode.parentNode.rowIndex; d-=1;
  var codigo=document.getElementById("tablaconsultamuestra").rows[d].cells[0].innerText;
  var nombre=document.getElementById("tablaconsultamuestra").rows[d].cells[1].innerText;
  var descripcion=document.getElementById("tablaconsultamuestra").rows[d].cells[2].innerText;
  var departamento=document.getElementById("tablaconsultamuestra").rows[d].cells[3].innerText;
  var prueba=document.getElementById("tablaconsultamuestra").rows[d].cells[4].innerText;
  var minimo=document.getElementById("tablaconsultamuestra").rows[d].cells[5].innerText;
  var maximo=document.getElementById("tablaconsultamuestra").rows[d].cells[6].innerText;
  var umedida=document.getElementById("tablaconsultamuestra").rows[d].cells[7].innerText;
  var estado=document.getElementById("tablaconsultamuestra").rows[d].cells[8].innerText;
  $('#modalmuestra').modal('hide');     $("#tablaconsultamuestra tr").remove();
  document.getElementById("labcodmue").style.display = "block";
  document.getElementById("idmuestra").style.display = "inline";
  $("#idmuestra").val(codigo);          $("#nommuestra").val(nombre);
  $("#detmuestra").val(descripcion);    $("#vminimo").val(minimo);
  $("#vmaximo").val(maximo);
  $("#departamentom option:contains("+departamento+")").attr("selected", true);
  cargardatosprueba("#departamentom");
  $("#estmuestra option:contains("+estado+")").attr("selected", true);
  $("#umedida option:contains("+umedida+")").attr("selected", true);
  $( "#idmuestra" ).prop( "disabled", true );
  document.getElementById("btnguardarmuestra").style.display = 'none';
  document.getElementById("btnmodificarmuestra").style.display = 'inline';
  $("#prueba option:contains("+prueba+")").attr("selected", true);
 }
 function limpiarconsultageneralmuestra(){$('#modalmuestra').modal('hide');
 $("#busquedamuestra").val(""); $("#tablaconsultamuestra tr").remove();}

function consultaespecificamuestra(){
  var busqueda=$("#busquedamuestra").val();
  $("#tablaconsultamuestra tr").remove();
  nombre="Muestra";
  $.ajax({
    url:path+busquedamanphp,
    type: 'POST',
    data:{busquedamuestra:busqueda, muestra:nombre},
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
      data.forEach(element=>{
      var estado='Activo';
      if(element.estado_labprueba=='D')estado='Desactivo';
      var botonmodificar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Modificar' id='btnmodificarmue' onclick='modificarmuestra(this)'> <img src='../../images/laboratorio/botones/modificar.png' width='15px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idmuestra_lab+"</td><td style='color: black;text-align: center'>"+element.nombre_labmuestra +"</td>"+
    "<td style='color: black;text-align: center'>"+element.detalle_labmuestra +"</td><td style='color: black;text-align: center'>"+element.nombre_labdepartamento+"</td>"+
    "<td style='color: black;text-align: center'>"+element.nombre_labprueba +"</td><td style='color: black;text-align: center'>"+element.vminimo_labmuestra+"</td>"+
    "<td style='color: black;text-align: center'>"+element.vmaximo_labmuestra +"</td><td style='color: black;text-align: center'>"+element.abv_labumedida+"</td>"+
    "<td style='color: black;text-align: center'>"+ estado+"</td>"+
    "<td style='text-align: center'>"+botonmodificar+"</td></tr>";
   document.getElementById("tablaconsultamuestra").insertRow(-1).innerHTML =fila;  })
    }
  });
}
//-----------------------------------------------------------------------------------------------------------
 function registrar_umedida(){
    var nombre=$("#nomumedida").val();
    var abreviatura=$("#abvumedida").val();
    var detalle=$("#detumedida").val();
    var estado=$("#estumedida").val();
    if(nombre=="" ||abreviatura==""){
      swal({
       title: "Datos incompletos, llenar los datos faltantes.",text: "",icon: "warning"});
    }
    else{
    $.ajax({
      type:"POST",
      url:path+registrarmanphp,
      data:{nomumedida:nombre,abvumedida:abreviatura, detumedida:detalle,estumedida:estado},
      success:function(r){
        if(r=="Esta conectado Insertado"){mensaje_insertado();}
        else{mensaje_error(r);}
        $.getScript("../../js/laboratorio/contenido_laboratorio.js", function(){contenido_umedida();});
      }
    });}
 }
  function modificar_umedida(){
    var codigo=$("#idumedida").val();
    var nombre=$("#nomumedida").val();
    var abreviatura=$("#abvumedida").val();
    var detalle=$("#detumedida").val();
    var estado=$("#estumedida").val();
    if(nombre=="" ||abreviatura==""){
      swal({
       title: "Datos incompletos, llenar los datos faltantes.",text: "",icon: "warning"});
    }
    else{
    $.ajax({
      type:"POST",
      url:path+modificarmanphp,
      data:{idumedida:codigo,nomumedida:nombre,abvumedida:abreviatura,detumedida:detalle, estumedida:estado},
      success:function(r){
        if(r=="Esta conectado Actualizado"){mensaje_actualizado();}
        else{mensaje_error(r);}
        $.getScript("../../js/laboratorio/contenido_laboratorio.js", function(){contenido_umedida();});
      }
    });}
 }
 function cargardatosumedida(name){
  nombre="UnidadMedida";
  $.ajax({
    url:path+consultamanphp,
    type: 'POST',
    data:"unidadmedida="+nombre,
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
    $(name).html("<option value='0' selected>-Seleccionar-</option>");
      data.forEach(element=>{
        $(name).append("<option value="+element.idumedida_lab+">"+element.abv_labumedida+"</option>");
      })
    }
  });
 }
function consultageneralumedida(){
  nombre="UnidadMedida";
  $("#tablaconsultaumedida tr").remove();
  $.ajax({
    url:path+consultagenmanphp,
    type: 'POST',
    data:"umedida= "+nombre,
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
      data.forEach(element=>{
      var estado='Activo';
      if(element.estado_labumedida=='D')estado='Desactivo';
      var botonmodificar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Modificar' id='btnmodificarpru' onclick='modificarumedida(this)'> <img src='../../images/laboratorio/botones/modificar.png' width='15px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idumedida_lab+"</td><td style='color: black;text-align: center'>"+element.nombre_labumedida +"</td>"+
    "<td style='color: black;text-align: center'>"+element.abv_labumedida +"</td><td style='color: black;text-align: center'>"+element.detalle_labumedida+"</td>"+
    "<td style='color: black;text-align: center'>"+estado+"</td><td style='text-align: center'>"+botonmodificar+"</td></tr>";
   document.getElementById("tablaconsultaumedida").insertRow(-1).innerHTML =fila;  
    })
    }
  });
 }

 function modificarumedida(fila){
  var d=fila.parentNode.parentNode.rowIndex; d-=1;
  var codigo=document.getElementById("tablaconsultaumedida").rows[d].cells[0].innerText;
  var nombre=document.getElementById("tablaconsultaumedida").rows[d].cells[1].innerText;
  var abreviatura=document.getElementById("tablaconsultaumedida").rows[d].cells[2].innerText;
  var descripcion=document.getElementById("tablaconsultaumedida").rows[d].cells[3].innerText;
  var estado=document.getElementById("tablaconsultaumedida").rows[d].cells[4].innerText;
  $('#modalumedida').modal('hide'); $("#tablaconsultaumedida tr").remove();
  document.getElementById("tdcodmed").style.width = "30%";
  document.getElementById("labcodmed").style.display = "block";
  document.getElementById("idumedida").style.display = "inline";
  $("#idumedida").val(codigo);
  $("#nomumedida").val(nombre);
  $("#abvumedida").val(abreviatura);
  $("#detumedida").val(descripcion);
  $("#estumedida option:contains("+estado+")").attr("selected", true);
  $( "#idumedida" ).prop( "disabled", true );
  document.getElementById("btnguardarumedida").style.display = 'none';
  document.getElementById("btnmodificarumedida").style.display = 'inline';
 }
 function limpiarconsultageneralumedida(){$('#modalumedida').modal('hide'); 
 $("#busquedaumedida").val("");$("#tablaconsultaumedida tr").remove();}

function consultaespecificaumedida(){
  var busqueda=$("#busquedaumedida").val();
  $("#tablaconsultaumedida tr").remove();
  nombre="UnidadMedida";
  $.ajax({
    url:path+busquedamanphp,
    type: 'POST',
    data:{busquedaumedida:busqueda, umedida:nombre},
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
      data.forEach(element=>{
      var estado='Activo';
      if(element.estado_labumedida=='D')estado='Desactivo';
      var botonmodificar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Modificar' id='btnmodificarpru' onclick='modificarumedida(this)'> <img src='../../images/laboratorio/botones/modificar.png' width='15px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idumedida_lab+"</td><td style='color: black;text-align: center'>"+element.nombre_labumedida +"</td>"+
    "<td style='color: black;text-align: center'>"+element.abv_labumedida +"</td><td style='color: black;text-align: center'>"+element.detalle_labumedida+"</td>"+
    "<td style='color: black;text-align: center'>"+estado+"</td><td style='text-align: center'>"+botonmodificar+"</td></tr>";
   document.getElementById("tablaconsultaumedida").insertRow(-1).innerHTML =fila;    
    })
    }
  });
}
//------------------------------------------------------------------------------------------
  function registrar_ars(){
    var nombre=$("#nomars").val();
    var estado=$("#estars").val();

    if(nombre=="" ){
      swal({
       title: "Datos incompletos, llenar los datos faltantes.",text: "",icon: "warning"});
    }
    else{
    $.ajax({
      type:"POST",
      url:path+registrarmanphp,
      data:{nomars:nombre,estars:estado},
      success:function(r){
        if(r=="Esta conectado Insertado"){mensaje_insertado();}
        else{mensaje_error(r);}
        $.getScript("../../js/laboratorio/contenido_laboratorio.js", function(){contenido_ars();});
      }
    });}
 }
 function modificar_ars(){
    var codigo=$("#idars").val();
    var nombre=$("#nomars").val();
    var estado=$("#estars").val();
    if(nombre=="" ){
      swal({
       title: "Datos incompletos, llenar los datos faltantes.",text: "",icon: "warning"});
    }
    else{
    $.ajax({
      type:"POST",
      url:path+modificarmanphp,
      data:{idars:codigo, nomars:nombre,estars:estado},
      success:function(r){
        if(r=="Esta conectado Actualizado"){mensaje_actualizado();}
        else{mensaje_error(r);}
        $.getScript("../../js/laboratorio/contenido_laboratorio.js", function(){contenido_ars();});
      }
    });}
 }
 function cargardatosars(name){
  $.ajax({
    url:path+consultamanphp,
    type: 'GET',
    success:function(response){
      let data=JSON.parse(JSON.stringify(response));
    $(name).html("<option value='0' selected>-Seleccionar-</option>");
      data.forEach(element=>{
        $(name).append("<option value="+element.idars_lab+">"+element.nombre_labars+"</option>");
      })
    }
  });
 }
 function consultageneralars(){
  nombre="ARS";
  $("#tablaconsultaars tr").remove();
  $.ajax({
    url:path+consultagenmanphp,
    type: 'POST',
    data:"ars= "+nombre,
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
      data.forEach(element=>{
      var estado='Activo';
      if(element.estado_labars=='D')estado='Desactivo';
      var botonmodificar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Modificar' id='btnmodificarars' onclick='modificarars(this)'> <img src='../../images/laboratorio/botones/modificar.png' width='15px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idars_lab+"</td><td style='color: black;text-align: center'>"+element.nombre_labars +"</td>"+
    "<td style='color: black;text-align: center'>"+estado+"</td><td style='text-align: center'>"+botonmodificar+"</td></tr>";
   document.getElementById("tablaconsultaars").insertRow(-1).innerHTML =fila;  
    })
    }
  });
 }

 function modificarars(fila){
  var d=fila.parentNode.parentNode.rowIndex; d-=1;
  var codigo=document.getElementById("tablaconsultaars").rows[d].cells[0].innerText;
  var nombre=document.getElementById("tablaconsultaars").rows[d].cells[1].innerText;
  var estado=document.getElementById("tablaconsultaars").rows[d].cells[2].innerText;
  $('#modalars').modal('hide'); $("#tablaconsultaars tr").remove();
  document.getElementById("tdcodars").style.width = "30%";
  document.getElementById("labcodars").style.display = "block";
  document.getElementById("idars").style.display = "inline";
  $("#idars").val(codigo);
  $("#nomars").val(nombre);
  $("#estars option:contains("+estado+")").attr("selected", true);
  $( "#idars" ).prop( "disabled", true );
  document.getElementById("btnguardarars").style.display = 'none';
  document.getElementById("btnmodificarars").style.display = 'inline';
 }
 function limpiarconsultageneralars(){$('#modalars').modal('hide');
 $("#busquedaars").val(""); $("#tablaconsultaars tr").remove();}

function consultaespecificaars(){
  var busqueda=$("#busquedaars").val();
  $("#tablaconsultaars tr").remove();
  nombre="ARS";
  $.ajax({
    url:path+busquedamanphp,
    type: 'POST',
    data:{busquedaars:busqueda, ars:nombre},
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
      data.forEach(element=>{
      var estado='Activo';
      if(element.estado_labars=='D')estado='Desactivo';
      var botonmodificar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Modificar' id='btnmodificarars' onclick='modificarars(this)'> <img src='../../images/laboratorio/botones/modificar.png' width='15px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idars_lab+"</td><td style='color: black;text-align: center'>"+element.nombre_labars +"</td>"+
    "<td style='color: black;text-align: center'>"+estado+"</td><td style='text-align: center'>"+botonmodificar+"</td></tr>";
   document.getElementById("tablaconsultaars").insertRow(-1).innerHTML =fila;  
    })
    }
  });
}
//----------------------------------------------------------------------------------------------------
 function registrar_ncf(){
    var nombre=$("#nomncf").val();
    var abreviatura=$("#abvncf").val();
    var fecha=$("#fechancf").val();
    var cantidad=$("#cantidadncf").val();
    var primero=$("#prisecncf").val();
    var ultimo=$("#ultsecncf").val();
    var estado=$("#estncf").val();
    
    if(nombre=="" ||abreviatura==""||fecha==""||cantidad==""||primero==""||ultimo==""){
      swal({
       title: "Datos incompletos, llenar los datos faltantes.",text: "",icon: "warning"});
    }
    else{
    $.ajax({
      type:"POST",
      url:path+registrarmanphp,
      data:{nomncf:nombre, abvncf:abreviatura,fechancf:fecha,cantidadncf:cantidad, prisecncf:primero, ultsecncf:ultimo, estncf:estado},
      success:function(r){
        if(r=="Esta conectado Insertado"){mensaje_insertado();}
        else{mensaje_error(r);}
        $.getScript("../../js/laboratorio/contenido_laboratorio.js", function(){contenido_ncf();});
      }
    });}
 }
 function modificar_ncf(){
    var codigo=$("#idncf").val();
    var nombre=$("#nomncf").val();
    var abreviatura=$("#abvncf").val();
    var fecha=$("#fechancf").val();
    var cantidad=$("#cantidadncf").val();
    var primero=$("#prisecncf").val();
    var ultimo=$("#ultsecncf").val();
    var estado=$("#estncf").val();
    if(nombre=="" ||abreviatura==""||fecha==""||cantidad==""||primero==""||ultimo==""){
      swal({
       title: "Datos incompletos, llenar los datos faltantes.",text: "",icon: "warning"});
    }
    else{
    $.ajax({
      type:"POST",
      url:path+modificarmanphp,
      data:{idncf:codigo, nomncf:nombre, abvncf:abreviatura,fechancf:fecha,cantidadncf:cantidad, prisecncf:primero, ultsecncf:ultimo, estncf:estado},
      success:function(r){
        if(r=="Esta conectado Actualizado"){mensaje_actualizado();}
        else{mensaje_error(r);}
        $.getScript("../../js/laboratorio/contenido_laboratorio.js", function(){contenido_ncf();});
      }
    });}
 }
function cargardatosncf(name){
  $.ajax({
    url:path+consultamanphp,
    type: 'GET',
    success:function(response){
      let data=JSON.parse(JSON.stringify(response));
    $(name).html("<option value='0' selected>-Seleccionar-</option>");
      data.forEach(element=>{
        $(name).append("<option value="+element.idncf_lab+">"+element.nombre_labncf+"</option>");
      })
    }
  });
 }

 function consultageneralncf(){
  nombre="NCF";
  $("#tablaconsultancf tr").remove();
  $.ajax({
    url:path+consultagenmanphp,
    type: 'POST',
    data:"ncf= "+nombre,
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
     data.forEach(element=>{
      var estado='Activo';
      if(element.estado_labncf=='D')estado='Desactivo';
      var botonmodificar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Modificar' id='btnmodificarmue' onclick='modificarncf(this)'> <img src='../../images/laboratorio/botones/modificar.png' width='15px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idncf_lab+"</td><td style='color: black;text-align: center'>"+element.nombre_labncf +"</td>"+
    "<td style='color: black;text-align: center'>"+element.abreviatura_labncf +"</td><td style='color: black;text-align: center'>"+element.fechaven_labncf+"</td>"+
    "<td style='color: black;text-align: center'>"+element.cantidad_labncf +"</td><td style='color: black;text-align: center'>"+element.prisecuencia_labncf+"</td>"+
    "<td style='color: black;text-align: center'>"+element.ultsecuencia_labncf +"</td><td style='color: black;text-align: center'>"+ estado+"</td>"+
    "<td style='text-align: center'>"+botonmodificar+"</td></tr>";
   document.getElementById("tablaconsultancf").insertRow(-1).innerHTML =fila;  })
    }
  });
 }

 function modificarncf(fila){
  var d=fila.parentNode.parentNode.rowIndex; d-=1;
  var codigo=document.getElementById("tablaconsultancf").rows[d].cells[0].innerText;
  var nombre=document.getElementById("tablaconsultancf").rows[d].cells[1].innerText;
  var abreviatura=document.getElementById("tablaconsultancf").rows[d].cells[2].innerText;
  var fecha=document.getElementById("tablaconsultancf").rows[d].cells[3].innerText;
  var cantidad=document.getElementById("tablaconsultancf").rows[d].cells[4].innerText;
  var primero=document.getElementById("tablaconsultancf").rows[d].cells[5].innerText;
  var ultimo=document.getElementById("tablaconsultancf").rows[d].cells[6].innerText;
  var estado=document.getElementById("tablaconsultancf").rows[d].cells[7].innerText;
  $('#modalncf').modal('hide');     $("#tablaconsultancf tr").remove();
  document.getElementById("labcodncf").style.display = "block";
  document.getElementById("idncf").style.display = "inline";
  $("#idncf").val(codigo);          $("#nomncf").val(nombre);
  $("#abvncf").val(abreviatura);    $("#prisecncf").val(primero);
  $("#ultsecncf").val(ultimo);      $("#cantidadncf").val(cantidad);
  $("#fechancf").val(fecha);
  $("#estncf option:contains("+estado+")").attr("selected", true);
  document.getElementById("btnguardarncf").style.display = 'none';
  document.getElementById("btnmodificarncf").style.display = 'inline';
 }
 function limpiarconsultageneralncf(){$('#modalncf').modal('hide'); 
 $("#tablaconsultancf tr").remove(); $("#busquedancf").val("");}

function consultaespecificancf(){
  var busqueda=$("#busquedancf").val();
  $("#tablaconsultancf tr").remove();
  nombre="NCF";
  $.ajax({
    url:path+busquedamanphp,
    type: 'POST',
    data:{busquedancf:busqueda, ncf:nombre},
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
      data.forEach(element=>{
      var estado='Activo';
      if(element.estado_labncf=='D')estado='Desactivo';
      var botonmodificar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Modificar' id='btnmodificarmue' onclick='modificarncf(this)'> <img src='../../images/laboratorio/botones/modificar.png' width='15px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idncf_lab+"</td><td style='color: black;text-align: center'>"+element.nombre_labncf +"</td>"+
    "<td style='color: black;text-align: center'>"+element.abreviatura_labncf +"</td><td style='color: black;text-align: center'>"+element.fechaven_labncf+"</td>"+
    "<td style='color: black;text-align: center'>"+element.cantidad_labncf +"</td><td style='color: black;text-align: center'>"+element.prisecuencia_labncf+"</td>"+
    "<td style='color: black;text-align: center'>"+element.ultsecuencia_labncf +"</td><td style='color: black;text-align: center'>"+ estado+"</td>"+
    "<td style='text-align: center'>"+botonmodificar+"</td></tr>";
   document.getElementById("tablaconsultancf").insertRow(-1).innerHTML =fila;  })
    }
  });
}

function mensaje_insertado(){
 swal({
       title: "Datos insertados Satisfactoriamente.",text: "",icon: "success"});
}

function mensaje_actualizado(){
 swal({
       title: "Datos modificados Satisfactoriamente",text: "",icon: "success"});
}

function mensaje_error(r){
 swal({
       title: "Error",text:r ,icon: "error"});
}