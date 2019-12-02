
 function BuscarD(Cod)
 {
      console.log(Cod);
      var Datos;
      $.ajax({
        type: "POST",
        url: "../../php/registro/MedicoBusqueda.php",
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

          document.getElementById("DNombre").setAttribute('identificador',data[0]["id"]);

          document.getElementById("DCorreo").value=data[0]["Correo"];
        
          document.getElementById("DNombre").value=data[0]["Nombre"];
          document.getElementById("DApellido").value=data[0]["Apellido"];
          document.getElementById("DDirrecion").value=data[0]["Direccion"];
          document.getElementById("DIdentificacion").value=data[0]["Identificacion"];
          
          if(data[0]["TipoIdentificacion"]==1)
          {
            document.getElementById("DCedula").checked=true;
            document.getElementById("DPasaporte").checked=false;
          }
          else
          {
            document.getElementById("DCedula").checked=false;
            document.getElementById("DPasaporte").checked=true;
          }
          
          document.getElementById("DSexo").value=data[0]["Sexo"];
          document.getElementById("DSangre").value=data[0]["TipoSangre"];
          document.getElementById("DSeguro").value=data[0]["SeguroSocial"];
          document.getElementById("DDepartamento").value=data[0]["Departamento"];
          document.getElementById("DEspecialidad").value=data[0]["Especialidad"];

          var parts =data[0]["FechaEntrada"].split('-');
          var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 


          document.getElementById("DFechaEntrada").valueAsDate = mydate;

          parts =data[0]["FechaNacimiento"].split('-');
          mydate = new Date(parts[0], parts[1] - 1, parts[2]);

          document.getElementById("DFechaNacimiento").valueAsDate = mydate;
          $("#DEstado").val(data[0]["Estado"]);


          Numeros=data["Telefonos"];
      
          document.getElementById("DTelefono").innerHTML ="";
          for(i in Numeros)
          {
            

            document.getElementById("DTelefono").innerHTML+="<div> <div identificador='"+Numeros[i]["id"]+"' style='display: inline;'>"+Numeros[i]["Telefono"]+"</div><i class='fas fa-pencil-alt' style='cursor:pointer; display: inline; margin: 10px;' onclick=\"if(document.getElementById('DNumero').disabled == true) return false; if(this.innerHTML ==' Terminar'){ if(this.previousSibling.childNodes[0].value == '') return false; this.previousSibling.innerHTML=this.previousSibling.childNodes[0].value; this.innerHTML=' Editar'; }else {this.innerHTML=' Terminar';  var Valor=this.previousSibling.innerHTML; this.previousSibling.innerHTML='<input>';this.previousSibling.childNodes[0].type='text'; this.previousSibling.childNodes[0].value=Valor}\"> Editar</i><i  class='fas fa-eraser' style='cursor:pointer; display: inline; margin: 10px;'  onclick=\"if(document.getElementById('DNumero').disabled == true) return false; else this.parentNode.parentNode.removeChild(this.parentNode);\"> Borrar</i> </div>";
            
          }

          
          document.getElementById("DNumero").value="";

          var input = $("#DContenedor input").toArray();

          for(i in input)
          {
            input[i].disabled= true;
          }

          //el primer input de contenido siempr se muestra
          input[0].disabled= false;
          input = $("#DContenedor select").toArray();
          for(i in input)
          {
            input[i].disabled= true;
          }

          MostrarContenidoD();
            
        }
        });


    

 }

 function EditarD()
 {
  var input = $("#DContenedor input").toArray();
    for(i in input)
    {
      input[i].disabled= false;
    }
    input = $("#DContenedor select").toArray();
    for(i in input)
    {
      input[i].disabled= false;
    }

    $("#DContenedor").show();
 }


 function RegistrarD()
{

  if(document.getElementById("DCedula").checked==true)
  {
    Tipo='Cedula';
    reg=/[0-9]{11}/;


    if(!reg.test($("#DIdentificacion").val()))
    {
      alert("Formato de la cédula inválido");
      return false;
    }
    
  }
  else
  {
    Tipo='Pasaporte';
  }


   
    
    var nodeList = document.getElementById("DTelefono").childNodes;

      if(document.getElementById("DTelefono").childNodes.length == 0)
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
      if(document.getElementById("DEstado").style.display=="none")
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

        Estado=document.getElementById("DEstado").value;
        Id=document.getElementById("DNombre").getAttribute('identificador');
      }
  

      


  var datos = {
  'id' : Id,
  'Nombre': document.getElementById("DNombre").value,
  'Apellido': document.getElementById("DApellido").value,
  'Dirrecion': document.getElementById("DDirrecion").value,
  'Identificacion': document.getElementById("DIdentificacion").value,
  'TipoIdentificacion' : Tipo,
  'Sexo': document.getElementById("DSexo").value,
  'Sangre': document.getElementById("DSangre").value,
  'Seguro': document.getElementById("DSeguro").value,
  'Departamento': document.getElementById("DDepartamento").value,
  'Especialidad': document.getElementById("DEspecialidad").value,
  'FechaEntrada': document.getElementById("DFechaEntrada").value,
  'FechaNacimiento': document.getElementById("DFechaNacimiento").value,
  'Numeros': Numeros,
  'Correo': document.getElementById("DCorreo").value,
  'Estado': Estado

  }

  console.log(datos);
  for(i in datos)
  {
    
    console.log(i+":"+datos[i]);
  }

  $.ajax({
         type: "POST",
         url: "../../php/registro/medico.php",
         data: JSON.stringify(datos),
         dataType: "text",
         error: function(){
         alert("Error al hacer consulta");
         },
         success: function(data){ 
 
         //$("#response").empty();
         BorrarAllD();
         alert(data);                                                             
         }
    }); 
}

function MostrarContenidoD(Proposito="d"){
  //("#hide").on('click', function() {
  //    $("#DContenedor").hide();
  $("#DContenerdorTabla").hide();
  
  if(Proposito=="Nuevo")
  {
      document.getElementById("Dsubmit").value="Registrar";
      document.getElementById("DEstado").style.display="none";
      document.getElementById("DEdicion").style.display="none";
      document.getElementById('DEstado').parentNode.parentNode.style.display="none";
      EditarD();
      BorrarAllD();

      
  }
  else
  {
    document.getElementById("Dsubmit").value="Modificar";
    document.getElementById("DEstado").style.display="block";
    document.getElementById("DEdicion").style.display="block";
    document.getElementById('DEstado').parentNode.parentNode.style.display="block";
  }
  $("#DContenedor").show();
    
      return false;
}
 
function MostrarTablaD(){
  //("#hide").on('click', function() {
  //    $("#DContenedor").hide();



  if(document.getElementById("DCodi").value==null || document.getElementById("DCodi").value =="")
    {
      alert("código inválido");
      return;
    }
    else
    {

      $.ajax({
        type: "POST",
        url: "../../php/registro/BusquedaBreve.php",
        data: 'Codigo='+$("#DCodi").val()+'&'+'Tipo=Medico',
        dataType: "JSON",
        error: function(){
        alert("Error al hacer la busqueda");
        },
        success: function(data){ 
    
        //$("#response").empty();
        if(Object.keys(data).length!=0)
        {
        $("#DContenedor").hide();
          var tabla=document.getElementById("DTabla");
          tabla.innerHTML="";
          
          for(i=0;i<data.length;i++){
            tabla.insertRow(0).innerHTML="<th scope='row'>"+data[i]['id']+"</th><td>"+data[i]['Nombre']+"</td><td>"+data[i]['Apellido']+"</td><td>"+data[i]['Identificacion']+"</td><td style='cursor: pointer;' onclick='return BuscarD("+data[i]['id']+")'>Ver</td>";
            }
          
          $("#DContenerdorTabla").show();
        }
        else if(Object.keys(data).length==0)
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




function AgregarNumD()
{
  
   if(document.getElementById("DNumero").value.length == 0)
   {
    alert("Error número inválido");
    return;
   }
   else
   {
    document.getElementById("DTelefono").innerHTML+="<div> <div identificador='-1' style='display: inline;'>"+document.getElementById("DNumero").value+"</div><i class='fas fa-pencil-alt' style='cursor:pointer; display: inline; margin: 10px;' onclick=\" if(this.innerHTML ==' Terminar'){ if(this.previousSibling.childNodes[0].value == '') return false; this.previousSibling.innerHTML=this.previousSibling.childNodes[0].value; this.innerHTML=' Editar'; }else {this.innerHTML=' Terminar';  var Valor=this.previousSibling.innerHTML; this.previousSibling.innerHTML='<input>';this.previousSibling.childNodes[0].type='text'; this.previousSibling.childNodes[0].value=Valor}\"> Editar</i> <i class='fas fa-eraser' style='cursor:pointer; display: inline; margin: 10px;' onclick='this.parentNode.parentNode.removeChild(this.parentNode);'> Borrar</i> </div>";
    document.getElementById("DNumero").value="";
   }

   
}

function BorrarNumD()
{


   document.getElementById("DTelefono").innerHTML="";
   
}

function BorrarAllD()
{
  var input = $("#DContenedor input").toArray();
        for(i in input)
        {
          if(input[i].type != "button" && input[i].type != "submit")
            input[i].value= "";
        }
        input = $("#DContenedor select").toArray();
        for(i in input)
        {
          input[i].value=input[i].options[0].text;
        }
        BorrarNumD();
}

