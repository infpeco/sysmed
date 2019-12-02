var path= '../../php/laboratorio/';
var consultafacphp='consulta_facturacion.php';
var consultagenfacphp='consulta_genfacturacion.php';
var registrarfacphp='registrar_facturacion.php';
var modificarfacphp='modificar_facturacion.php';
var busquedafacphp='busqueda_facturacion.php';    

function cargardatosncf(name){
  var nombre="NCF";
  $.ajax({
    url:path+consultafacphp,
    type: 'POST',
    data:"ncf="+nombre,
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
    $(name).html("<option value='0' selected>-Seleccionar-</option>");
      data.forEach(element=>{
        $(name).append("<option value="+element.idncf_lab+">"+element.nombre_labncf+"</option>");
      })
    }
  });
 }
   function cargardatenumncf(tipo,date,num){
    //document.getElementById("prueba").style.display = "none
        $.ajax({
      type:"POST",
      url:path+consultafacphp,
      data:"tiponcf="+$(tipo).val(),
      success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
        data.forEach(element=>{
          $(date).val(element.fechaven_labncf); var ultimonum=element.ultsecuencia_labncf+1;
      $(num).val(ultimonum);
      })
    }
    });
 }

  function cargardatosars(name){
  var nombre="ARS";
  $.ajax({
    url:path+consultafacphp,
    type:"POST",
    data:"ars=" + nombre,
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
    $(name).html("<option value='0' selected>-Seleccionar-</option>");
      data.forEach(element=>{
        $(name).append("<option value="+element.idars_lab+">"+element.nombre_labars+"</option>");
      })
    }
  });
 }

  function consultageneralprueba(){
  nombre="Prueba";
  $("#tablaconsultaprueba tr").remove();
  $.ajax({
    url:path+consultagenfacphp,
    type: 'POST',
    data:"Pruebagendetalle= "+nombre,
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
     data.forEach(element=>{
      var botonagregar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Agregar' id='btnseleccionarpru' onclick='agregarprueba(this)'> <img src='../../images/laboratorio/botones/agregar.png' width='20px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idprueba_lab+"</td><td style='color: black;text-align: center'>"+element.nombre_labprueba +"</td>"+
    "<td style='color: black;text-align: center'>"+element.nombre_labdepartamento+"</td>"+
    "<td style='text-align: center'>"+botonagregar+"</td></tr>";
   document.getElementById("tablaconsultaprueba").insertRow(-1).innerHTML =fila;  
    })
    }
  });
 }
function consultaespecificaprueba(){
  var busqueda=$("#busquedapruebafac").val();
  $("#tablaconsultaprueba tr").remove();
  $.ajax({
    url:path+busquedafacphp,
    type: 'POST',
    data:{busquedaprueba:busqueda},
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
      data.forEach(element=>{
        console.log(data);
      var botonagregar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Agregar' id='btnseleccionarpru' onclick='agregarprueba(this)'> <img src='../../images/laboratorio/botones/agregar.png' width='20px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idprueba_lab+"</td><td style='color: black;text-align: center'>"+element.nombre_labprueba +"</td>"+
    "<td style='color: black;text-align: center'>"+element.nombre_labdepartamento+"</td>"+
    "<td style='text-align: center'>"+botonagregar+"</td></tr>";
   document.getElementById("tablaconsultaprueba").insertRow(-1).innerHTML =fila;  
    })
    }
  });
}

function agregarprueba(fila){
  var d=fila.parentNode.parentNode.rowIndex; d-=1;
  var codigo=document.getElementById("tablaconsultaprueba").rows[d].cells[0].innerText;
  var nombre=document.getElementById("tablaconsultaprueba").rows[d].cells[1].innerText;
  $('#modalpruebafac').modal('hide'); limpiarconsultageneralprueba();
  $("#codprueba").val(codigo);
  $("#nomprueba").val(nombre);
 }

 function consultapruebadetalle(){
  var busqueda=$("#codprueba").val();
  nombre="Pruebadetalle";
  $.ajax({
    url:path+busquedafacphp,
    type: 'POST',
    data:{busquedapruebadet:busqueda, prueba:nombre},
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
        console.log(response);
      data.forEach(element=>{$("#nomprueba").val(element.nombre_labprueba);})
    }
  });
}
 function limpiarconsultageneralprueba(){$('#modalpruebafac').modal('hide'); $("#tablaconsultaprueba tr").remove();}

function consultageneralmedico(){
  nombre="Medico";
  $("#tablaconsultamedico tr").remove();
  $.ajax({
    url:path+consultagenfacphp,
    type: 'POST',
    data:"Medicogendetalle= "+nombre,
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
     data.forEach(element=>{
      console.log(element.Apellido);
     var botonagregar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Agregar' id='btnseleccionarpru' onclick='agregarmedico(this)'> <img src='../../images/laboratorio/botones/agregar.png' width='20px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idempleado+"</td><td style='color: black;text-align: center'>"+element.Nombre +"</td>"+
    "<td style='color: black;text-align: center'>"+element.Apellido+"</td> <td style='color: black;text-align: center'>"+element.Especialidad+"</td>"+
    "<td style='text-align: center'>"+botonagregar+"</td></tr>";
   document.getElementById("tablaconsultamedico").insertRow(-1).innerHTML =fila;  
    })
    }
  });
 }
function consultaespecificamedico(){
  var busqueda=$("#busquedamedicofac").val();
  $("#tablaconsultamedico tr").remove();
  $.ajax({
    url:path+busquedafacphp,
    type: 'POST',
    data:{busquedamedico:busqueda},
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
      data.forEach(element=>{
        console.log(data);
      var botonagregar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Agregar' id='btnseleccionarpru' onclick='agregarprueba(this)'> <img src='../../images/laboratorio/botones/agregar.png' width='20px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idempleado+"</td><td style='color: black;text-align: center'>"+element.Nombre +"</td>"+
    "<td style='color: black;text-align: center'>"+element.Apellido+"</td> <td style='color: black;text-align: center'>"+element.Especialidad+"</td>"+
    "<td style='text-align: center'>"+botonagregar+"</td></tr>";
   document.getElementById("tablaconsultamedico").insertRow(-1).innerHTML =fila;  
   })
    }
  });
}

function agregarmedico(fila){
  var d=fila.parentNode.parentNode.rowIndex; d-=1;
  var codigo=document.getElementById("tablaconsultamedico").rows[d].cells[0].innerText;
  var nombre=document.getElementById("tablaconsultamedico").rows[d].cells[1].innerText;
  var apellido=document.getElementById("tablaconsultamedico").rows[d].cells[2].innerText;
  $('#modalmedico').modal('hide'); limpiarconsultageneralmedico();
  $("#codmedico").val(codigo);
  $("#nommedico").val(nombre+" "+apellido);

 }

 function consultamedicodetalle(){
  var busqueda=$("#codmedico").val();
  nombre="Medicodetalle";
  $.ajax({
    url:path+busquedafacphp,
    type: 'POST',
    data:{busquedamedicodet:busqueda, medico:nombre},
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
        console.log(response);
      data.forEach(element=>{$("#nommedico").val(element.Nombre);
        if(element.idempleado!="")$("#codmedico").val(element.idempleado);})
    }
  });
}
 function limpiarconsultageneralmedico(){$('#modalmedicofac').modal('hide'); $("#tablaconsultamedico tr").remove();}

function consultageneralpaciente(){
  nombre="Paciente";
  $("#tablaconsultapaciente tr").remove();
  $.ajax({
    url:path+consultagenfacphp,
    type: 'POST',
    data:"Pacientegendetalle= "+nombre,
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
     data.forEach(element=>{
      console.log(element.Apellido);
     var botonagregar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Agregar' id='btnseleccionarpru' onclick='agregarpaciente(this)'> <img src='../../images/laboratorio/botones/agregar.png' width='20px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idpaciente+"</td><td style='color: black;text-align: center'>"+element.Nombre +"</td>"+
    "<td style='color: black;text-align: center'>"+element.Apellido+"</td> <td style='color: black;text-align: center'>"+element.Identificacion+"</td>"+
    "<td style='text-align: center'>"+botonagregar+"</td></tr>";
   document.getElementById("tablaconsultapaciente").insertRow(-1).innerHTML =fila;  
    })
    }
  });
 }
function consultaespecificapaciente(){
  var busqueda=$("#busquedapacientefac").val();
  $("#tablaconsultapaciente tr").remove();
  $.ajax({
    url:path+busquedafacphp,
    type: 'POST',
    data:{busquedapaciente:busqueda},
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
      data.forEach(element=>{
        console.log(data);
      var botonagregar="<button type='submit'   class='btn btn-secondary py-1 px-3' title='Agregar' id='btnseleccionarpru' onclick='agregarpaciente(this)'> <img src='../../images/laboratorio/botones/agregar.png' width='20px' ></button>";
      var fila="<tr ><td style='color: black;text-align: center'>"+element.idpaciente+"</td><td style='color: black;text-align: center'>"+element.Nombre +"</td>"+
    "<td style='color: black;text-align: center'>"+element.Apellido+"</td> <td style='color: black;text-align: center'>"+element.Identificacion+"</td>"+
    "<td style='text-align: center'>"+botonagregar+"</td></tr>";
   document.getElementById("tablaconsultapaciente").insertRow(-1).innerHTML =fila;  
   })
    }
  });
}

function agregarpaciente(fila){
  var d=fila.parentNode.parentNode.rowIndex; d-=1;
  var codigo=document.getElementById("tablaconsultapaciente").rows[d].cells[0].innerText;
  var nombre=document.getElementById("tablaconsultapaciente").rows[d].cells[1].innerText;
  var apellido=document.getElementById("tablaconsultapaciente").rows[d].cells[2].innerText;
  $('#modalpaciente').modal('hide'); limpiarconsultageneralpaciente();
  $("#codpaciente").val(codigo);
  $("#nompaciente").val(nombre+" "+apellido);

 }

 function consultapacientedetalle(){
  var busqueda=$("#codpaciente").val();
  nombre="Pacientedetalle";
  $.ajax({
    url:path+busquedafacphp,
    type: 'POST',
    data:{busquedapacientedet:busqueda, paciente:nombre},
    success:function(response){
      if(typeof(response) == "string"){data = JSON.parse(response)}
        console.log(response);
      data.forEach(element=>{$("#nompaciente").val(element.Nombre);
        if(element.idpaciente!="")$("#codpaciente").val(element.idpaciente);})
    }
  });
}
 function limpiarconsultageneralpaciente(){$('#modalpacientefac').modal('hide'); $("#tablaconsultapaciente tr").remove();}
