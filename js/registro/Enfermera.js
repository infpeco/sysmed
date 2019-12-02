
 function BuscarEE(Cod)
 {
    console.log(Cod);
    var Datos;
    $.ajax({
      type: "POST",
      url: "../../php/registro/EnfermeraBusqueda.php",
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


        document.getElementById("EENombre").setAttribute('identificador',data[0]["id"]);

      document.getElementById("EECorreo").value=data[0]["Correo"];
    

      
      document.getElementById("EENombre").value=data[0]["Nombre"];
      document.getElementById("EEApellido").value=data[0]["Apellido"];
      document.getElementById("EEDirrecion").value=data[0]["Direccion"];
      document.getElementById("EEIdentificacion").value=data[0]["Identificacion"];

      
      if(data[0]["TipoIdentificacion"]==1)
      {
        document.getElementById("EECedula").checked=true;
        document.getElementById("EEPasaporte").checked=false;
      }
      else
      {
        document.getElementById("EECedula").checked=false;
        document.getElementById("EEPasaporte").checked=true;
      }

      document.getElementById("EESexo").value=data[0]["Sexo"];
      document.getElementById("EESangre").value=data[0]["TipoSangre"];
      document.getElementById("EESeguro").value=data[0]["SeguroSocial"];
      document.getElementById("EEEspecialidad").value=data[0]["Especialidad"];

      document.getElementById("EEEscolaridad").value=data[0]["Escolaridad"];
      document.getElementById("EEExperencia").value=data[0]["Experiencia"];
      

      var parts =data[0]["FechaEntrada"].split('-');
          var mydate = new Date(parts[0], parts[1] - 1, parts[2]);

      document.getElementById("EEFechaEntrada").valueAsDate = mydate;


      parts =data[0]["FechaNacimiento"].split('-');
          mydate = new Date(parts[0], parts[1] - 1, parts[2]);

      document.getElementById("EEFechaNacimiento").valueAsDate = mydate;
      $("EEEstado").val(data[0]["Estado"]);


      Numeros=data["Telefonos"];

  
      document.getElementById("EETelefono").innerHTML ="";
      for(i in Numeros)
      {
        document.getElementById("EETelefono").innerHTML+="<div> <div identificador='"+Numeros[i]["id"]+"' style='display: inline;'>"+Numeros[i]["Telefono"]+"</div><i class='fas fa-pencil-alt' style='cursor:pointer; display: inline; margin: 10px;' onclick=\"if(document.getElementById('EENumero').disabled == true) return false; if(this.innerHTML ==' Terminar'){ if(this.previousSibling.childNodes[0].value == '') return false; this.previousSibling.innerHTML=this.previousSibling.childNodes[0].value; this.innerHTML=' Editar'; }else {this.innerHTML=' Terminar';  var Valor=this.previousSibling.innerHTML; this.previousSibling.innerHTML='<input>';this.previousSibling.childNodes[0].type='text'; this.previousSibling.childNodes[0].value=Valor}\"> Editar</i><i  class='fas fa-eraser' style='cursor:pointer; display: inline; margin: 10px;'  onclick=\"if(document.getElementById('EENumero').disabled == true) return false; else this.parentNode.parentNode.removeChild(this.parentNode);\"> Borrar</i> </div>";
      }

      
      document.getElementById("EENumero").value="";


    
      var input = $("#EEContenedor input").toArray();

      for(i in input)
      {
        input[i].disabled= true;
      }

      //el primer input de contenido siempr se muestra
      input[0].disabled= false;
      input = $("#EEContenedor select").toArray();
      for(i in input)
      {
        input[i].disabled= true;
      }
      MostrarContenidoEE();

      }});

 
    
    

 }

 function EditarEE()
 {
  var input = $("#EEContenedor input").toArray();
    for(i in input)
    {
      input[i].disabled= false;
    }
    input = $("#EEContenedor select").toArray();
    for(i in input)
    {
      input[i].disabled= false;
    }

    $("#EEContenedor").show();
 }


 function RegistrarEE() 
{

  if(document.getElementById("EECedula").checked==true)
  {
    Tipo='Cedula';
    reg=/[0-9]{11}/;


    if(!reg.test($("#EEIdentificacion").val()))
    {
      alert("Formato de la cédula inválido");
      return false;
    }
    
    }
    else
    {
      Tipo='Pasaporte';
    }


   
    
    var nodeList = document.getElementById("EETelefono").childNodes;

      if(document.getElementById("EETelefono").childNodes.length == 0)
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
      if(document.getElementById("EEEstado").style.display=="none")
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

        Estado=document.getElementById("EEEstado").value;
        Id=document.getElementById("EENombre").getAttribute('identificador');
      }


      


  var datos = {
  'id' : Id,
  'Nombre': document.getElementById("EENombre").value,
  'Apellido': document.getElementById("EEApellido").value,
  'Dirrecion': document.getElementById("EEDirrecion").value,
  'Identificacion': document.getElementById("EEIdentificacion").value,
  'TipoIdentificacion' : Tipo,
  'Sexo': document.getElementById("EESexo").value,
  'Sangre': document.getElementById("EESangre").value,
  'Seguro': document.getElementById("EESeguro").value,
  'Especialidad': document.getElementById("EEEspecialidad").value,
  'Experiencia': document.getElementById("EEExperencia").value,
  'FechaEntrada': document.getElementById("EEFechaEntrada").value,
  'FechaNacimiento': document.getElementById("EEFechaNacimiento").value,
  'Numeros': Numeros,
  'Escolaridad': document.getElementById("EEEscolaridad").value,
  'Correo': document.getElementById("EECorreo").value,
  'Estado': Estado

  }

  for(i in datos)
  {
    
    console.log(i+":"+datos[i]);
  }

  $.ajax({
    type: "POST",
    url: "../../php/registro/Enfermera.php",
    data: JSON.stringify(datos),
    dataType: "text",
    error: function(){
    alert("Error al hacer consulta");
    },
    success: function(data){ 

    //$("#response").empty();
    alert(data);

    }
});  
}


function MostrarContenidoEE(Proposito="d"){
  //("#hide").on('click', function() {
  //    $("#Contenedor").hide();
  $("#EEContenerdorTabla").hide();

  if(Proposito=="Nuevo")
  {
      document.getElementById("EEsubmit").value="Registrar";
      document.getElementById("EEEstado").style.display="none";
      document.getElementById("EEEdicion").style.display="none";
      document.getElementById('EEEstado').parentNode.parentNode.style.display="none";
      EditarE();
      BorrarAllEE();
  }
  else
  {
    document.getElementById("EEsubmit").value="Modificar";
    document.getElementById("EEEstado").style.display="block";
    document.getElementById("EEEdicion").style.display="block";
    document.getElementById('EEEstado').parentNode.parentNode.style.display="block";
  }
  $("#EEContenedor").show();
    
      return false;
}

function MostrarTablaEE(){
  //("#hide").on('click', function() {
  //    $("#Contenedor").hide();
  if(document.getElementById("EECodi").value==null || document.getElementById("EECodi").value =="")
    {
      alert("código inválido");
      return;
    }
    else
    {

      $.ajax({
        type: "POST",
        url: "../../php/registro/BusquedaBreve.php",
        data: 'Codigo='+$("#EECodi").val()+'&'+'Tipo=Enfermera',
        dataType: "JSON",
        error: function(){
        alert("Error al hacer la busqueda");
        },
        success: function(data){ 
        
          if(Object.keys(data).length!=0)
          {
            $("#EEContenedor").hide();
            var tabla=document.getElementById("EETabla");
            tabla.innerHTML="";
              
            for(i=0;i<data.length;i++)
            {
              tabla.insertRow(0).innerHTML="<th scope='row'>"+data[i]['id']+"</th><td>"+data[i]['Nombre']+"</td><td>"+data[i]['Apellido']+"</td><td>"+data[i]['Identificacion']+"</td><td style='cursor: pointer;' onclick='return BuscarEE("+data[i]['id']+")'>Ver</td>";
            }
            $("#EEContenerdorTabla").show();
          }
          else if(Object.keys(data).length==0)
          {
            alert("No hay coincidencias");
          }
          else
          {
            alert(data);
          }
          
        }

        }); 
    }
  
}


function AgregarNumEE()
{
  
   if(document.getElementById("EENumero").value.length == 0)
   {
    alert("Error número inválido");
    return;
   }
   else
   {
    document.getElementById("EETelefono").innerHTML+="<div> <div identificador='-1' style=' display: inline;'>"+document.getElementById("EENumero").value+"</div><i class='fas fa-pencil-alt' style='cursor:pointer; display: inline; margin: 10px;' onclick=\" if(this.innerHTML ==' Terminar'){ if(this.previousSibling.childNodes[0].value == '') return false; this.previousSibling.innerHTML=this.previousSibling.childNodes[0].value; this.innerHTML=' Editar'; }else {this.innerHTML=' Terminar';  var Valor=this.previousSibling.innerHTML; this.previousSibling.innerHTML='<input>';this.previousSibling.childNodes[0].type='text'; this.previousSibling.childNodes[0].value=Valor}\"> Editar</i><i class='fas fa-eraser' style='cursor:pointer; display: inline; margin: 10px;' onclick='this.parentNode.parentNode.removeChild(this.parentNode);'> Borrar</i> </div>";;
    document.getElementById("EENumero").value="";
   }

   
}

function BorrarNumEE()
{


   document.getElementById("EETelefono").innerHTML="";
   
}


function BorrarAllEE()
{
  var input = $("#EEContenedor input").toArray();
        for(i in input)
        {
          if(input[i].type != "button" && input[i].type != "submit")
            input[i].value= "";
        }
        input = $("#EEContenedor select").toArray();
        for(i in input)
        {
          input[i].value=input[i].options[0].text;
        }
        BorrarNumEE();
}