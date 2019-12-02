

 function BuscarE(Cod)
 {
  console.log(Cod);
  var Datos;
  $.ajax({
    type: "POST",
    url: "../../php/registro/EmpleadoBusqueda.php",
    data: 'Codigo='+Cod,
    dataType: "JSON",
    error: function(){
    alert("Error al hacer la busqueda");
    return false;
    },
    success: function(data)
    {
      if(Object.keys(data).length==0)
      {
        alert("No hay datos que presentar");
        return false;
      }

      

      console.log(data[0]);
      console.log(data[1]);

      document.getElementById("ENombre").setAttribute('identificador',data[0]["id"]);

      document.getElementById("ECorreo").value=data[0]["Correo"];
    
      document.getElementById("ENombre").value=data[0]["Nombre"];
      document.getElementById("EApellido").value=data[0]["Apellido"];
      document.getElementById("EDirrecion").value=data[0]["Direccion"];
      document.getElementById("EIdentificacion").value=data[0]["Identificacion"];


      if(data[0]["TipoIdentificacion"]==1)
          {
            document.getElementById("ECedula").checked=true;
            document.getElementById("EPasaporte").checked=false;
          }
          else
          {
            document.getElementById("ECedula").checked=false;
            document.getElementById("EPasaporte").checked=true;
          }

      document.getElementById("ESexo").value=data[0]["Sexo"];
      document.getElementById("ESangre").value=data[0]["TipoSangre"];
      document.getElementById("ESeguro").value=data[0]["SeguroSocial"];
      document.getElementById("EDepartamento").value=data[0]["Departamento"];
      document.getElementById("EArea").value=data[0]["Area"];
      document.getElementById("ECargo").value=data[0]["Cargo"];
      document.getElementById("EEscolaridad").value=data[0]["Escolaridad"],
      document.getElementById("EExperencia").value=data[0]["Experiencia"];

      
      var parts =data[0]["FechaEntrada"].split('-');
          var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 


      document.getElementById("EFechaEntrada").valueAsDate = mydate;

      parts =data[0]["FechaNacimiento"].split('-');
      mydate = new Date(parts[0], parts[1] - 1, parts[2]);

      document.getElementById("EFechaNacimiento").valueAsDate = mydate;
      $("#EEstado").val(data[0]["Estado"]);
      Numeros=data["Telefonos"];
  
      document.getElementById("ETelefono").innerHTML ="";
      for(i in Numeros)
      {
        document.getElementById("ETelefono").innerHTML+="<div> <div identificador='"+Numeros[i]["id"]+"' style='display: inline;'>"+Numeros[i]["Telefono"]+"</div><i class='fas fa-pencil-alt' style='cursor:pointer; display: inline; margin: 10px;' onclick=\"if(document.getElementById('ENumero').disabled == true) return false; if(this.innerHTML ==' Terminar'){ if(this.previousSibling.childNodes[0].value == '') return false; this.previousSibling.innerHTML=this.previousSibling.childNodes[0].value; this.innerHTML=' Editar'; }else {this.innerHTML=' Terminar';  var Valor=this.previousSibling.innerHTML; this.previousSibling.innerHTML='<input>';this.previousSibling.childNodes[0].type='text'; this.previousSibling.childNodes[0].value=Valor}\"> Editar</i><i  class='fas fa-eraser' style='cursor:pointer; display: inline; margin: 10px;'  onclick=\"if(document.getElementById('ENumero').disabled == true) return false; else this.parentNode.parentNode.removeChild(this.parentNode);\"> Borrar</i> </div>";
      }

      
      document.getElementById("ENumero").value="";

    
      var input = $("#EContenedor input").toArray();

      for(i in input)
      {
        input[i].disabled= true;
      }

      //el primer input de contenido siempr se muestra
      input[0].disabled= false;
      input = $("#EContenedor select").toArray();
      for(i in input)
      {
        input[i].disabled= true;
      }

      MostrarContenidoE();
    }

    });

 }

 function EditarE()
 {
  var input = $("#EContenedor input").toArray();
    for(i in input)
    {
      input[i].disabled= false;
    }
    input = $("#EContenedor select").toArray();
    for(i in input)
    {
      input[i].disabled= false;
    }

    $("#EContenedor").show();
 }

 function RegistrarE() 
{

  if(document.getElementById("ECedula").checked==true)
  {
    Tipo='Cedula';
    reg=/[0-9]{11}/;


    if(!reg.test($("#EIdentificacion").val()))
    {
      alert("Formato de la cédula inválido");
      return false;
    }
    
  }
  else
  {
    Tipo='Pasaporte';
  }

   
    
    var nodeList = document.getElementById("ETelefono").childNodes;

      if(document.getElementById("ETelefono").childNodes.length == 0)
      {
        alert("No hay números telefónicos");
        return false;
      }

      if($("#DTelefono input").toArray().length != 0)
      {
        alert("Hay teléfonos editandose");
        return false;
      }

      var Numeros = new Array();

      var Estado;
      if(document.getElementById("EEstado").style.display=="none")
      {
        Estado="Nuevo";
        Id=null;
        for(i in nodeList)
        {
            if(nodeList[i].innerHTML != undefined)
            Numeros.push(nodeList[i].childNodes[1].innerHTML);
        }
      }
      else
      {

        for(i in nodeList)
        {
           
            if(nodeList[i].innerHTML != undefined)
            {
              var Insertar=[nodeList[i].childNodes[1].getAttribute("identificador"),nodeList[i].childNodes[1].innerHTML];
              Numeros.push(Insertar);
            }
            
        }

        Estado=document.getElementById("EEstado").value;
        Id=document.getElementById("ENombre").getAttribute('identificador');
      }

      


  var datos = {
  'id' : Id,
  'Nombre': document.getElementById("ENombre").value,
  'Apellido': document.getElementById("EApellido").value,
  'Dirrecion': document.getElementById("EDirrecion").value,
  'Identificacion': document.getElementById("EIdentificacion").value,
  'TipoIdentificacion' : Tipo,
  'Sexo': document.getElementById("ESexo").value,
  'Sangre': document.getElementById("ESangre").value,
  'Seguro': document.getElementById("ESeguro").value,
  'Departamento': document.getElementById("EDepartamento").value,
  'Cargo': document.getElementById("ECargo").value,
  'Experiencia': document.getElementById("EExperencia").value,
  'Area': document.getElementById("EArea").value,
  'FechaEntrada': document.getElementById("EFechaEntrada").value,
  'FechaNacimiento': document.getElementById("EFechaNacimiento").value,
  'Numeros': Numeros,
  'Escolaridad': document.getElementById("EEscolaridad").value,
  'Correo': document.getElementById("ECorreo").value,
  'Estado':  Estado

  }

  for(i in datos)
  {
    
    console.log(i+":"+datos[i]);
  }

  $.ajax({
         type: "POST",
         url: "../../php/registro/Empleado.php",
         data: JSON.stringify(datos),
         dataType: "text",
         error: function(){
         alert("error al hacer consulta");
         },
         success: function(data){ 
 
         //$("#response").empty();
         alert(data);                                                             
         }
    }); 
}

function MostrarContenidoE(Proposito="d"){
  //("#hide").on('click', function() {
  //    $("#Contenedor").hide();
  $("#EContenerdorTabla").hide();

  if(Proposito=="Nuevo")
  {
      document.getElementById("Esubmit").value="Registrar";
      document.getElementById("EEstado").style.display="none";
      document.getElementById("EEdicion").style.display="none";
      document.getElementById('EEstado').parentNode.parentNode.style.display="none";
      EditarE();
      BorrarAllE();
  }
  else
  {
    document.getElementById("Esubmit").value="Modificar";
    document.getElementById("EEstado").style.display="block";
    document.getElementById("EEdicion").style.display="block";
    document.getElementById('EEstado').parentNode.parentNode.style.display="block";
  }
  $("#EContenedor").show();
    
      return false;
}

function MostrarTablaE(){
  //("#hide").on('click', function() {
  //    $("#Contenedor").hide();
  if(document.getElementById("ECodi").value==null || document.getElementById("ECodi").value =="")
    {
      alert("código inválido");
      return;
    }
    else
    {

      $.ajax({
        type: "POST",
        url: "../../php/registro/BusquedaBreve.php",
        data: 'Codigo='+$("#ECodi").val()+'&'+'Tipo=Empleado',
        dataType: "JSON",
        error: function(){
        alert("Error al hacer la busqueda");
        },
        success: function(data){ 

      if(Object.keys(data).length!=0)
      {
        $("#EContenedor").hide();
        var tabla=document.getElementById("ETabla");
        tabla.innerHTML="";
        for(i=0;i<data.length;i++){
          tabla.insertRow(0).innerHTML="<th scope='row'>"+data[i]['id']+"</th><td>"+data[i]['Nombre']+"</td><td>"+data[i]['Apellido']+"</td><td>"+data[i]['Identificacion']+"</td><td style='cursor: pointer;' onclick='return BuscarE("+data[i]['id']+")'>Ver</td>";
          }
        $("#EContenerdorTabla").show();
      }else if(Object.keys(data).length==0)
      {
        alert("No hay coincidencias");
      }
      else
      {
        alert(data);}
     
      
    }
  }); 
    }
  
}


function AgregarNumE()
{
  
   if(document.getElementById("ENumero").value.length == 0)
   {
    alert("Error número inválido");
    return;
   }
   else
   {
    document.getElementById("ETelefono").innerHTML+="<div> <div identificador='-1' style=' display: inline;'>"+document.getElementById("ENumero").value+"</div><i class='fas fa-pencil-alt' style='cursor:pointer; display: inline; margin: 10px;' onclick=\" if(this.innerHTML ==' Terminar'){ if(this.previousSibling.childNodes[0].value == '') return false; this.previousSibling.innerHTML=this.previousSibling.childNodes[0].value; this.innerHTML=' Editar'; }else {this.innerHTML=' Terminar';  var Valor=this.previousSibling.innerHTML; this.previousSibling.innerHTML='<input>';this.previousSibling.childNodes[0].type='text'; this.previousSibling.childNodes[0].value=Valor}\"> Editar</i> <i class='fas fa-eraser' style='cursor:pointer; display: inline; margin: 10px;' onclick='this.parentNode.parentNode.removeChild(this.parentNode);'> Borrar</i> </div>";
    document.getElementById("ENumero").value="";
   }

   
}

function BorrarNumE()
{


   document.getElementById("ETelefono").innerHTML="";
   
}

function BorrarAllE()
{
  var input = $("#EContenedor input").toArray();
        for(i in input)
        {
          if(input[i].type != "button" && input[i].type != "submit")
            input[i].value= "";
        }
        input = $("#EContenedor select").toArray();
        for(i in input)
        {
          input[i].value=input[i].options[0].text;
        }
        BorrarNumE();
}