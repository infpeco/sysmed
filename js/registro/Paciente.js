
 function BuscarP(Cod)
 {


      console.log(Cod);
      var Datos;
      $.ajax({
        type: "POST",
        url: "../../php/registro/PacienteBusqueda.php",
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

      document.getElementById("PNombre").setAttribute('identificador',data[0]["id"]);

      $("#PNombre").val(data[0]["Nombre"]);
      $("#PApellido").val(data[0]["Apellido"]);
      $("#PDirrecion").val(data[0]["Direccion"]);
      $("#PIdentificacion").val(data[0]["Identificacion"]);
      
      if(data[0]["TipoIdentificacion"]==1)
          {
            document.getElementById("PCedula").checked=true;
            document.getElementById("PPasaporte").checked=false;
          }
          else
          {
            document.getElementById("PCedula").checked=false;
            document.getElementById("PPasaporte").checked=true;
          }

      $("#PSexo").val(data[0]["Sexo"]);
      $("#PSangre").val(data[0]["TipoSangre"]);
      $("#PSeguro").val(data[0]["SeguroSocial"]);

      var parts =data[0]["FechaEntrada"].split('-');
      var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 

      document.getElementById("PFechaEntrada").valueAsDate = mydate ;

      parts =data[0]["FechaNacimiento"].split('-');
      mydate = new Date(parts[0], parts[1] - 1, parts[2]);
      document.getElementById("PFechaNacimiento").valueAsDate = mydate;


      $("#PTriage").val(data[0]["Triage"]);
      $("#PFamiliar").val(data[0]["Familiar/Tutor"]);
      $("#PAlergia").val(data[0]["Alergia/Afeccion"]);
      $("#PAntes").val(data[0]["AntecedenteFamiliares"]);

      $("#PEstado").val(data[0]["Estado"]);

      Numeros=data["Telefonos"];
  
      document.getElementById("PTelefono").innerHTML ="";
      for(i in Numeros)
      {
        document.getElementById("PTelefono").innerHTML+="<div> <div identificador='"+Numeros[i]["id"]+"' style='display: inline;'>"+Numeros[i]["Telefono"]+"</div><i class='fas fa-pencil-alt' style='cursor:pointer; display: inline; margin: 10px;' onclick=\"if(document.getElementById('PNumero').disabled == true) return false; if(this.innerHTML ==' Terminar'){ if(this.previousSibling.childNodes[0].value == '') return false; this.previousSibling.innerHTML=this.previousSibling.childNodes[0].value; this.innerHTML=' Editar'; }else {this.innerHTML=' Terminar';  var Valor=this.previousSibling.innerHTML; this.previousSibling.innerHTML='<input>';this.previousSibling.childNodes[0].type='text'; this.previousSibling.childNodes[0].value=Valor}\"> Editar</i><i  class='fas fa-eraser' style='cursor:pointer; display: inline; margin: 10px;'  onclick=\"if(document.getElementById('PNumero').disabled == true) return false; else this.parentNode.parentNode.removeChild(this.parentNode);\"> Borrar</i> </div>";
      }

      
      $("#PNumero").val("");

      var input = $("#PContenedor input").toArray();

      for(i in input)
      {
        input[i].disabled= true;
      }

      //el primer input de contenido siempr se muestra
      input[0].disabled= false;
      input = $("#PContenedor select").toArray();
      for(i in input)
      {
        input[i].disabled= true;
      }


      input = $("#PContenedor textarea").toArray();
      for(i in input)
      {
        input[i].disabled= true;
      }

      MostrarContenidoP();
    }

  });
    

 }

 function EditarP()
 {
  var input = $("#PContenedor input").toArray();
    for(i in input)
    {
      input[i].disabled= false;
    }
    input = $("#PContenedor select").toArray();
    for(i in input)
    {
      input[i].disabled= false;
    }

    input = $("#PContenedor textarea").toArray();
    for(i in input)
    {
      input[i].disabled= false;
    }

    $("#PContenedor").show();
 }

 function RegistrarP()
{

  if(document.getElementById("PCedula").checked==true)
  {
    Tipo='Cedula';
    reg=/[0-9]{11}/;


    if(!reg.test($("#PIdentificacion").val()))
    {
      alert("Formato de la cédula inválido");
      return false;
    }
    
  }
  else
  {
    Tipo='Pasaporte';
  }
    


   
    
    var nodeList = document.getElementById("PTelefono").childNodes;

      if(document.getElementById("PTelefono").childNodes.length == 0)
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
      if(document.getElementById("PEstado").style.display=="none")
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

        Estado=document.getElementById("PEstado").value;
        Id=document.getElementById("PNombre").getAttribute('identificador');
      }

     


  var datos = {
  'id' : Id,
  'Nombre': document.getElementById("PNombre").value,
  'Apellido': document.getElementById("PApellido").value,
  'Dirrecion': document.getElementById("PDirrecion").value,
  'Triage': document.getElementById("PTriage").value,
  'Identificacion': document.getElementById("PIdentificacion").value,
  'Alergia': document.getElementById("PAlergia").value,
  'Antencedentes': document.getElementById("PAntes").value,
  'Familiar': document.getElementById("PFamiliar").value,
  'TipoIdentificacion' : Tipo,
  'Sexo': document.getElementById("PSexo").value,
  'Sangre': document.getElementById("PSangre").value,
  'Seguro': document.getElementById("PSeguro").value,
  'FechaEntrada': document.getElementById("PFechaEntrada").value,
  'FechaNacimiento': document.getElementById("PFechaNacimiento").value,
  'Numeros': Numeros,
  'Estado': Estado

  }

  for(i in datos)
  {
    
    console.log(i+":"+datos[i]);
  }

  $.ajax({
         type: "POST",
         url: "../../php/registro/Paciente.php",
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

function MostrarContenidoP(Proposito="d"){
  //("#hide").on('click', function() {
  //    $("#Contenedor").hide();
  $("#PContenerdorTabla").hide();

  if(Proposito=="Nuevo")
  {
      document.getElementById("Psubmit").value="Registrar";
      document.getElementById("PEstado").style.display="none";
      document.getElementById("PEdicion").style.display="none";
      document.getElementById('PEstado').parentNode.parentNode.style.display="none";
      EditarP();
      BorrarAllP();
  }
  else
  {
    document.getElementById("Psubmit").value="Modificar";
    document.getElementById("PEstado").style.display="block";
    document.getElementById("PEdicion").style.display="block";
    document.getElementById('PEstado').parentNode.parentNode.style.display="block";
  }
  $("#PContenedor").show();
    
      return false;
}

function MostrarTablaP(){
  //("#hide").on('click', function() {
  //    $("#Contenedor").hide();
  if(document.getElementById("PCodi").value==null || document.getElementById("PCodi").value =="")
    {
      alert("código inválido");
      return;
    }
    else
    {

      $.ajax({
        type: "POST",
        url: "../../php/registro/BusquedaBreve.php",
        data: 'Codigo='+$("#PCodi").val()+'&'+'Tipo=Paciente',
        dataType: "JSON",
        error: function(){
        alert("Error al hacer la busqueda");
        },
        success: function(data){ 
    
      if(Object.keys(data).length!=0)
      {
        $("#PContenedor").hide();
        var tabla=document.getElementById("PTabla");
        tabla.innerHTML="";for(i=0;i<data.length;i++){
          tabla.insertRow(0).innerHTML="<th scope='row'>"+data[i]['id']+"</th><td>"+data[i]['Nombre']+"</td><td>"+data[i]['Apellido']+"</td><td>"+data[i]['Identificacion']+"</td><td style='cursor: pointer;' onclick=' return BuscarP("+data[i]['id']+")'>Ver</td>";
          }
        $("#PContenerdorTabla").show();
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

function AgregarNumP()
{
  
   if(document.getElementById("PNumero").value.length == 0)
   {
    alert("Error número inválido");
   }
   else
   {
    document.getElementById("PTelefono").innerHTML+="<div> <div identificador='-1' style=' display: inline;'>"+document.getElementById("PNumero").value+"</div><i class='fas fa-pencil-alt' style='cursor:pointer; display: inline; margin: 10px;' onclick=\" if(this.innerHTML ==' Terminar'){ if(this.previousSibling.childNodes[0].value == '') return false; this.previousSibling.innerHTML=this.previousSibling.childNodes[0].value; this.innerHTML=' Editar'; }else {this.innerHTML=' Terminar';  var Valor=this.previousSibling.innerHTML; this.previousSibling.innerHTML='<input>';this.previousSibling.childNodes[0].type='text'; this.previousSibling.childNodes[0].value=Valor}\"> Editar</i><i class='fas fa-eraser' style='cursor:pointer; display: inline; margin: 10px;' onclick='this.parentNode.parentNode.removeChild(this.parentNode);'> Borrar</i> </div>";;
    document.getElementById("PNumero").value="";
   }

   
}

function BorrarNumP()
{


   document.getElementById("PTelefono").innerHTML="";
   
}


function BorrarAllP()
{
  var input = $("#PContenedor input").toArray();
        for(i in input)
        {
          if(input[i].type != "button" && input[i].type != "submit")
            input[i].value= "";
        }
        input = $("#PContenedor select").toArray();
        for(i in input)
        {
          input[i].value=input[i].options[0].text;
        }

        input = $("#PContenedor textarea").toArray();
        for(i in input)
        {
          input[i].value= "";
        }
        BorrarNumP();
}