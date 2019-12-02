//FORMULARIO 1
function mostrarPestana_1(){
    $("#pest-1").html(

        "<form action='#' class='ftco-animate' style='POSITION: absolute' onsubmit='event.preventDefault(); return RegistrarD();'>"+
        "<h2 style='text-transform: uppercase'><b>Médicos</b></h2>"+


        "<div class='form-group'>"+
          "<input type='button' value='Nuevo' class='btn btn-secondary ' onclick=\"MostrarContenidoD('Nuevo');\">"+
            "<label>Codigo</label>"+
            "<input id='DCodi' type='text' class='form-control'>"+
            "<input type='button' value='Buscar' class='btn btn-secondary ' onclick='MostrarTablaD();'>"+
       " </div>"+
        "<div id='DContenedor' style='display: none;'>"+
        "<input id='DEdicion' type='button' value='Editar' class='btn btn-secondary ' onclick='EditarD();'>"+

       "<div class='form-row'>"+
       "<div class='form-group col-6'>"+
           "<label>Nombre</label>"+
           "<input id='DNombre' type='text' class='form-control'  required>"+
       "</div>"+

       "<div class='form-group col-6'>"+
           "<label >Apellido</label>"+
           "<input id='DApellido' type='text' class='form-control' required>"+
       "</div>"+

   "</div>"+

   "<div class='form-group'>"+
   "<!--Direcion-->"+
   "<label>Dirección</label>"+
   "<input id='DDirrecion' type='text' class='form-control' required>"+
   
   
  

 "</div>"+

 "<div class='form-group'>"+
 "<label>Identificación</label>"+
   "<!--Identificacion-->"+
   "<input id='DIdentificacion' type='text' class='form-control'  required>"+
   

 "</div>"+

 "<div class=' form-group'>"+
 "<div class='form-check '>"+
 "<input id='DCedula' class='form-check-input' style='margin-left:0px !important;' type='radio' name='gridRadios' value='cedula' checked>"+
 "<label class='form-check-label' for='gridRadios1'>"+
     "Cédula"+
 "</label>"+
 "</div>"+
 "<div class='form-check'>"+
 "<input id='DPasaporte' class='form-check-input' style='margin-left:0px !important;' type='radio' name='gridRadios'  value='passaporte'>"+
 "<label class='form-check-label' for='gridRadios2'>"+
     "Pasaporte"+
 "</label>"+
 "</div>"+
"</div>"+

 



   "<div class='form-row'>"+      
       "<div class='form-group col-6'>"+   
       "<!--Sexo-->"+
       "<label>Sexo</label>"+
       "<div class='select-wrap'>"+
       "<select id='DSexo' class='form-control' >"+
           "<option value='Masculino'>Masculino</option><option value='Femenino'>Femenino</option><option value='Otros'>Otros</option>"+
       "</select>"+
       "</div>"+
   "</div>"+
   
   "<div class='form-group col-6'>"+
       "<label>Tipo de Sangre</label>"+
       "<div class='select-wrap'>"+
       "<select name='' id='DSangre' class='form-control'>"+
       "<option value='O+'>O+</option><option value='A+'>A+</option><option value='A-'>A-</option>"+
           "<option value='B+'>B+</option><option value='B-'>B-</option><option value='AB+'>AB+</option>"+
           "<option value='AB-'>AB-</option><option value='O-'>O-</option>"+
       "</select>"+
       "</div>"+
   "</div>"+

 "</div>"+


 "<!--No. seguro social-->"+
 "<div class='form-group'>"+
   "<label>No. Seguro Social</label>"+
   "<input id='DSeguro' type='text' class='form-control' required>"+
 "</div>"+
 "<!--Tipo sangre-->"+

 "<div class='form-row'>"+   
 "<div class='form-group col-6'>"+
       "<!--Departamento-->"+
       "<label>Departamento</label>"+
       "<div class='select-wrap'style='display:inline !important' >"+
       "<select name='' id='DDepartamento' class='form-control'>"+
           "<option value='Ambulancia'>Ambulancia</option> <option value='Cirugía'>Cirugía</option>"+
           "<option value='Cardiología'>Cardiología</option>"+
           "<option value='Consultorio'>Consultorio</option><option value='Cuidados Intensivos'>Cuidados Intensivos </option>"+
           "<option value='Emergencia'>Emergencia</option><option value='Enfermería'>Enfermería</option>"+
           "<option value='Farmacia'>Farmacia</option><option value='Imagenes'>Imágenes</option>"+
           "<option value='Laboratorio'>Laboratorio</option> <option value='Maternidad'>Maternidad</option>"+
           "<option value='Pediatría'>Pediatría</option><option value='Nutrición'>Nutrición</option>"+
       "</select>"+
       "</div>"+
     "</div>"+

   "<div class='form-group col-6'>"+
   "<!--Especialidad-->"+
   "<label>Especialidad</label>"+
   "<div class='select-wrap'>"+
     "<select name='' id='DEspecialidad' class='form-control'>"+
       "<option value='Alergía e Inmunología'>Alergía e Inmunología</option><option value='Anestesiología'>Anestesiología </option>"+
       "<option value='Anestesiología'>Anestesiología-Terapia del Dolor</option><option value='Angiología'>Angiología</option><option value='Cardiología'>Cardiología</option><option value=''>Cirugía Bariátrica</option>"+
       "<option value='Cirugía Cardíaca'>Cirugía Cardíaca</option><option value='Cirugía Cardiovascular'>Cirugía Cardiovascular</option>"+
       "<option value='Cirugía Cérvico-Buco Maxilofacial'>Cirugía Cérvico-Buco Maxilofacial</option>"+
       "<option value='Cirugía Columna Vertebral'>Cirugía Columna Vertebral</option>"+
       "<option value='Cirugía Dermatológica'>Cirugía Dermatológica</option><option value='Cirugía General'>Cirugía General</option>"+
       "<option value='Cirugía Maxilofacial'>Cirugía Maxilofacial</option><option value='Cirugía Oftalmológica'>Cirugía Oftalmológica</option>"+
       "<option value='Cirugía Oncóloga'>Cirugía Oncóloga</option><option value='Cirugía Ortopédica'>Cirugía Ortopédica</option>"+
       "<option value='Cirugía Pediátrica'>Cirugía Pediátrica</option><option value='Cirugía Plástica'>Cirugía Plástica</option>"+
       "<option value='Cirugía Torácica'>Cirugía Torácica</option><option value='Cirugía Vascular'>Cirugía Vascular</option>"+
       "<option value='Cirujano Urólogo'>Cirujano Urólogo</option><option value='Coloproctología'>Coloproctología</option>"+
      "<option value='Dermatología'>Dermatología</option><option value='Diagnóstico por Imágenes'>Diagnóstico por Imágenes</option>"+
       "<option value='Endocrinología'>Endocrinología</option><option value='Fisioterapia'>Fisioterapia</option>"+
       "<option value='>Gastroenterología'>Gastroenterología</option><option value='Geriatría'>Geriatría</option>"+
       "<option value='Ginecología y Obstetricia'>Ginecología y Obstetricia</option><option value='Hematologí'>Hematología</option>"+
       "<option value='Infectología'>Infectología</option><option value='Intensivista'>Intensivista</option>"+
       "<option value='Intervencionismo Mamario'>Intervencionismo Mamario</option><option value='Laboratorista'>Laboratorista</option>"+
       "<option value='Laparoscópica'>Laparoscópica</option><option value='Medicina Interna'>Medicina Interna</option>"+
       "<option value='Nefrología'>Nefrología</option><option value='Neumología'>Neumología</option>"+
       "<option value='Neurocirugía'>Neurocirugía</option><option value='Neurología'>Neurología</option>"+
       "<option value='Nutrición Clínica y Bariátrica'>Nutrición Clínica y Bariátrica</option><option value='Nutriología'>Nutriología</option>"+
       "<option value='Odontología Pediátrica'> Odontología Pediátrica</option>"+
       "<option value='Odontología-Estomatología'>Odontología-Estomatología</option>"+
       "<option value='Oftalmología'>Oftalmología</option><option value='Oncología'>Oncología</option>"+
       "<option value='Ortodoncia'>Ortodoncia</option><option value='Ortopedia'>Ortopedia</option>"+
       "<option value='Otorrinolaringología'>Otorrinolaringología</option><option value='Patología'>Patología</option>"+
       "<option value='Pediatría'>Pediatría</option><option value='Pediatría-Neonatología'>Pediatría-Neonatología</option>"+
       "<option value='Psicología'>Psicología</option><option value='Psicoterapeuta'>Psicoterapeuta</option>"+
       "<option value='Psiquiatría'>Psiquiatría</option><option value='Radiología'>Radiología</option>"+
       "<option value='Reumatología'>Reumatología</option><option value='Traumatología'>Traumatología</option>"+
       "<option value='Unidad de Imágenes'>Unidad de Imágenes</option><option value='Urología'>Urología</option>"+
     "</select>"+
   "</div>"+
 "</div>"+
"</div>"+

     "<div class='form-row'>"+

       "<div class='form-group col-6'>"+
           "<!--Fecha Entrada-->"+
           "<label>Fecha Entrada</label>"+
           "<input id='DFechaEntrada' type='date' class='form-control' required>"+
          

       "</div>"+

       "<div class='form-group col-6'>"+
       "<!--Fecha Nacimiento-->"+
               "<label>Fecha Nacimiento</label>"+
               "<input id='DFechaNacimiento' type='date' class='form-control' required>"+

           "</div>"+
       "</div>"+
       "<div class='form-group'>"+
       "<!--Telefono-->"+
       "<label>Número Telefónico</label>"+
       "<input id='DNumero' type='text' class='form-control'>"+
       "<input type='button' value='Agregar' class='btn btn-secondary ' onclick='AgregarNumD();' >"+
       "<input type='button' value='Borrar' class='btn btn-secondary ' onclick='BorrarNumD();' >"+
       "<!--celular-->"+
     
     "</div>"+
 
     "<label>Números: </label>"+
     "<div id='DTelefono'>"+
     "</div>"+


"<div class='form-group'>"+
 "<!--Correo Electrónico-->"+
 "<label>Correo Electrónico</label>"+
 "<input id='DCorreo' type='email' class='form-control' required>"+
"</div>"+

  "<div class='form-group'>"+
            "<label>Estado</label>"+
            "<div class='select-wrap'>"+
            "<select name='' id='DEstado' class='form-control'>"+
            "<option value='Habilitado'>Habilitado</option><option value='deshabilitado'>deshabilitado</option><option value='Error'>Error - Borrar</option>"+
            "</select>"+
            "</div>"+
        "</div>"+
  "<div>"+
      "<input id='Dsubmit' class='btn btn-primary' type='submit' value='Modificar'>"+
   "</div>"+

   " </div>"+

   "<div id='DContenerdorTabla' style='display: none;'>"+
   "<table class='table'>"+
   "<thead class='thead-dark'>"+
     "<tr>"+
       "<th scope='col'>Código</th>"+
       "<th scope='col'>Nombre</th>"+
       "<th scope='col'>Apellido</th>"+
       "<th scope='col'>Identificación</th>"+
       "<th scope='col'>Ver</th>"+
     "</tr>"+
   "</thead>"+
   "<tbody id='DTabla'>"+
     "<tr>"+
       "<th scope='row'>1</th>"+
       "<td>Mark</td>"+
       "<td>Otto</td>"+
     "</tr>"+
     "<tr>"+
       "<th scope='row'>2</th>"+
       "<td>Jacob</td>"+
       "<td>Thornton</td>"+
     "</tr>"+
     "<tr>"+
      " <th scope='row'>3</th>"+
       "<td>Larry</td>"+
       "<td>the Bird</td>"+
     "</tr>"+
   "</tbody>"+
 "</table>"+
   " </div>"

    )
};


function mostrarPestana_2(){
  $("#pest-2").html(

      "<form action='#' class='ftco-animate' style='POSITION: absolute' onsubmit='event.preventDefault(); return RegistrarE();'>"+
      "<h2 style='text-transform: uppercase'><b>Empleados</b></h2>"+


      "<div class='form-group'>"+
      "<input type='button' value='Nuevo' class='btn btn-secondary ' onclick=\"MostrarContenidoE('Nuevo');\">"+
          "<label>Codigo</label>"+
          "<input id='ECodi' type='text' class='form-control'>"+
          "<input type='button' value='Buscar' class='btn btn-secondary ' onclick='MostrarTablaE();'>"+
     " </div>"+

     "<div id='EContenedor' style='display: none;'>"+
     "<input id='EEdicion' type='button' value='Editar' class='btn btn-secondary ' onclick='EditarE();'>"+
     "<div class='form-row'>"+
     "<div class='form-group col-6'>"+
         "<label>Nombre</label>"+
         "<input id='ENombre' type='text' class='form-control'  required>"+
     "</div>"+

     "<div class='form-group col-6'>"+
         "<label >Apellido</label>"+
         "<input id='EApellido' type='text' class='form-control' required>"+
     "</div>"+

 "</div>"+

 "<div class='form-group'>"+
 "<!--Direcion-->"+
 "<label>Dirección</label>"+
 "<input id='EDirrecion' type='text' class='form-control' required>"+
 
 


"</div>"+

"<div class='form-group'>"+
"<label>Identificación</label>"+
 "<!--Identificacion-->"+
 "<input id='EIdentificacion' type='text' class='form-control'  required>"+
 

"</div>"+

"<div class=' form-group'>"+
"<div class='form-check '>"+
"<input id='ECedula' class='form-check-input' style='margin-left:0px !important;' type='radio' name='gridRadios' value='cedula' checked>"+
"<label class='form-check-label' for='gridRadios1'>"+
   "Cédula"+
"</label>"+
"</div>"+
"<div class='form-check'>"+
"<input id='EPasaporte' class='form-check-input' style='margin-left:0px !important;' type='radio' name='gridRadios'  value='passaporte'>"+
"<label class='form-check-label' for='gridRadios2'>"+
   "Pasaporte"+
"</label>"+
"</div>"+
"</div>"+





 "<div class='form-row'>"+      
     "<div class='form-group col-6'>"+   
     "<!--Sexo-->"+
     "<label>Sexo</label>"+
     "<div class='select-wrap'>"+
     "<select id='ESexo' class='form-control' >"+
         "<option value='Masculino'>Masculino</option><option value='Femenino'>Femenino</option><option value='Otros'>Otros</option>"+
     "</select>"+
     "</div>"+
 "</div>"+
 
 "<div class='form-group col-6'>"+
     "<label>Tipo de Sangre</label>"+
     "<div class='select-wrap'>"+
     "<select name='' id='ESangre' class='form-control'>"+
     "<option value='O+'>O+</option><option value='A+'>A+</option><option value='A-'>A-</option>"+
         "<option value='B+'>B+</option><option value='B-'>B-</option><option value='AB+'>AB+</option>"+
         "<option value='AB-'>AB-</option><option value='O-'>O-</option>"+
     "</select>"+
     "</div>"+
 "</div>"+

"</div>"+


"<!--No. seguro social-->"+
"<div class='form-group'>"+
 "<label>No. Seguro Social</label>"+
 "<input id='ESeguro' type='text' class='form-control' required>"+
"</div>"+
"<!--Tipo sangre-->"+

"<div class='form-row'>"+   
"<div class='form-group col-6'>"+
     "<!--Departamento-->"+
     "<label>Departamento</label>"+
     "<div class='select-wrap'style='display:inline !important' >"+
     "<select name='' id='EDepartamento' class='form-control'>"+
         "<option value='Ambulancia'>Ambulancia</option> <option value='Cirugía'>Cirugía</option>"+
         "<option value='Cardiología'>Cardiología</option>"+
         "<option value='Consultorio'>Consultorio</option><option value='Cuidados Intensivos'>Cuidados Intensivos </option>"+
         "<option value='Emergencia'>Emergencia</option><option value='Enfermería'>Enfermería</option>"+
         "<option value='Farmacia'>Farmacia</option><option value='Imágenes'>Imágenes</option>"+
         "<option value='Laboratorio'>Laboratorio</option> <option value='Maternidad'>Maternidad</option>"+
         "<option value='Pediatría'>Pediatría</option><option value='Nutrición'>Nutrición</option>"+
     "</select>"+
     "</div>"+
   "</div>"+

 "<div class='form-group col-6'>"+
 "<!--Area-->"+
 "<label>Area</label>"+
 "<div class='select-wrap'>"+
   "<select name='' id='EArea' class='form-control'>"+
   "<option value='Administración'>Administración</option>"+
   "<option value='Auxiliar Administrativo'>Auxiliar Administrativo</option>"+
   "<option value='Corsergería'>Corsergería</option>"+
   "<option value='Dirección General'>Dirección General</option>"+
   "<option value='Finanzas y Contabilidad'>Finanzas y Contabilidad</option>"+
   "<option value='Informática'>Informática</option>"+
   "<option value='Mantenimiento'>Mantenimiento</option>"+
   "<option value='Publicidad'>Publicidad</option>"+
   "<option value='Recursos Humanos'>Recursos Humanos</option>"+
   "</select>"+
 "</div>"+
"</div>"+
"</div>"+


"<div class='form-row'>"+
"<div class='form-group col-6'>"+
  "<!--Cargo-->"+
  "<label>Cargo</label>"+
  "<input id='ECargo' type='text' class='form-control' required>"+
"</div>"+

"<div class='form-group col-6'>"+
"<!--Cargo-->"+
  "<label>Experiencia</label>"+
  "<input id='EExperencia' type='number' class='form-control' placerholder='En años' required>"+
"</div>"+
"</div>"+
   "<div class='form-row'>"+

     "<div class='form-group col-6'>"+
         "<!--Fecha Entrada-->"+
         "<label>Fecha Entrada</label>"+
         "<input id='EFechaEntrada' type='date' class='form-control' required>"+
        

     "</div>"+

     "<div class='form-group col-6'>"+
     "<!--Fecha Nacimiento-->"+
             "<label>Fecha Nacimiento</label>"+
             "<input id='EFechaNacimiento' type='date' class='form-control' required>"+

         "</div>"+
     "</div>"+
     "<div class='form-group'>"+
     "<!--Telefono-->"+
     "<label>Número Telefónico</label>"+
     "<input id='ENumero' type='text' class='form-control'>"+
     "<input type='button' value='Agregar' class='btn btn-secondary ' onclick='AgregarNumE();' >"+
     "<input type='button' value='Borrar' class='btn btn-secondary ' onclick='BorrarNumE();' >"+
     "<!--celular-->"+
   
   "</div>"+

   "<label>Números: </label>"+
   "<div id='ETelefono'>"+
   "</div>"+



   "<div class='form-group'>"+
  "<!--Escolaridad-->"+
  "<label>Escolaridad</label>"+
  "<div class='select-wrap'>"+
        "<select name='' id='EEscolaridad' class='form-control'>"+
            "<option value='Técnico'>Técnico</option>"+
            "<option value='Bachiller'>Bachiller</option>"+
            "<option value='Profesional'>Profesional</option>"+
        "</select>"+
      "</div>"+
"</div>"+

"<div class='form-group'>"+
"<!--Correo Electrónico-->"+
"<label>Correo Electrónico</label>"+
"<input id='ECorreo' type='email' class='form-control' required>"+
"</div>"+

"<div class='form-group'>"+
          "<label>Estado</label>"+
          "<div class='select-wrap'>"+
          "<select name='' id='EEstado' class='form-control'>"+
          "<option value='Habilitado'>Habilitado</option><option value='deshabilitado'>deshabilitado</option><option value='Error'>Error - Borrar</option>"+
          "</select>"+
          "</div>"+
      "</div>"+
"<div>"+
    "<input id='Esubmit' class='btn btn-primary' type='submit' value='Modificar'>"+
 "</div>"+
 " </div>"+

 "<div id='EContenerdorTabla' style='display: none;'>"+
 "<table class='table'>"+
 "<thead class='thead-dark'>"+
   "<tr>"+
     "<th scope='col'>Código</th>"+
     "<th scope='col'>Nombre</th>"+
     "<th scope='col'>Apellido</th>"+
     "<th scope='col'>Ver</th>"+
   "</tr>"+
 "</thead>"+
 "<tbody id='ETabla'>"+
   "<tr>"+
     "<th scope='row'>1</th>"+
     "<td>Mark</td>"+
     "<td>Otto</td>"+
   "</tr>"+
   "<tr>"+
     "<th scope='row'>2</th>"+
     "<td>Jacob</td>"+
     "<td>Thornton</td>"+
   "</tr>"+
   "<tr>"+
    " <th scope='row'>3</th>"+
     "<td>Larry</td>"+
     "<td>the Bird</td>"+
   "</tr>"+
 "</tbody>"+
"</table>"+
 " </div>"

  )
};



function mostrarPestana_3(){
  $("#pest-3").html(

  "<form action='#' class='ftco-animate' style='POSITION: absolute' onsubmit='event.preventDefault(); return RegistrarP();'>"+
  "<h2 style='text-transform: uppercase'><b>Paciente</b></h2>"+


  "<div class='form-group'>"+
  "<input type='button' value='Nuevo' class='btn btn-secondary ' onclick=\"MostrarContenidoP('Nuevo');\">"+
      "<label>Codigo</label>"+
      "<input id='PCodi' type='text' class='form-control'>"+
      "<input type='button' value='Buscar' class='btn btn-secondary ' onclick='MostrarTablaP();'>"+
 " </div>"+

 "<div id='PContenedor' style='display: none;'>"+
 "<input id='PEdicion' type='button' value='Editar' class='btn btn-secondary ' onclick='EditarP();'>"+

 "<div class='form-row'>"+
 "<div class='form-group col-6'>"+
     "<label>Nombre</label>"+
     "<input id='PNombre' type='text' class='form-control'  required>"+
 "</div>"+

 "<div class='form-group col-6'>"+
     "<label >Apellido</label>"+
     "<input id='PApellido' type='text' class='form-control' required>"+
 "</div>"+

"</div>"+

"<div class='form-group'>"+
"<!--Direcion-->"+
"<label>Dirección</label>"+
"<input id='PDirrecion' type='text' class='form-control' required>"+




"</div>"+

"<div class='form-group'>"+
"<label>Identificación</label>"+
"<!--Identificacion-->"+
"<input id='PIdentificacion' type='text' class='form-control'  required>"+


"</div>"+

"<div class=' form-group'>"+
"<div class='form-check '>"+
"<input id='PCedula' class='form-check-input' style='margin-left:0px !important;' type='radio' name='gridRadios' value='cedula' checked>"+
"<label class='form-check-label' for='gridRadios1'>"+
"Cédula"+
"</label>"+
"</div>"+
"<div class='form-check'>"+
"<input id='PPasaporte' class='form-check-input' style='margin-left:0px !important;' type='radio' name='gridRadios'  value='passaporte'>"+
"<label class='form-check-label' for='gridRadios2'>"+
"Pasaporte"+
"</label>"+
"</div>"+
"</div>"+





"<div class='form-row'>"+      
 "<div class='form-group col-6'>"+   
 "<!--Sexo-->"+
 "<label>Sexo</label>"+
 "<div class='select-wrap'>"+
 "<select id='PSexo' class='form-control' >"+
     "<option value='Masculino'>Masculino</option><option value='Femenino'>Femenino</option><option value='Otros'>Otros</option>"+
 "</select>"+
 "</div>"+
"</div>"+

"<div class='form-group col-6'>"+
 "<label>Tipo de Sangre</label>"+
 "<div class='select-wrap'>"+
 "<select name='' id='PSangre' class='form-control'>"+
 "<option value='O+'>O+</option><option value='A+'>A+</option><option value='A-'>A-</option>"+
     "<option value='B+'>B+</option><option value='B-'>B-</option><option value='AB+'>AB+</option>"+
     "<option value='AB-'>AB-</option><option value='O-'>O-</option>"+
 "</select>"+
 "</div>"+
"</div>"+

"</div>"+


"<!--No. seguro social-->"+
"<div class='form-group'>"+
"<label>No. Seguro Social</label>"+
"<input id='PSeguro' type='text' class='form-control' required>"+
"</div>"+
"<!--Tipo sangre-->"+




"<div class='form-row'>"+

 "<div class='form-group col-6'>"+
     "<!--Fecha Entrada-->"+
     "<label>Fecha Entrada</label>"+
     "<input id='PFechaEntrada' type='date' class='form-control' required>"+
    

 "</div>"+

 "<div class='form-group col-6'>"+
 "<!--Fecha Nacimiento-->"+
         "<label>Fecha Nacimiento</label>"+
         "<input id='PFechaNacimiento' type='date' class='form-control' required>"+

     "</div>"+
 "</div>"+
 "<div class='form-group'>"+
 "<!--Telefono-->"+
 "<label>Número Telefónico</label>"+
 "<input id='PNumero' type='text' class='form-control'>"+
 "<input type='button' value='Agregar' class='btn btn-secondary ' onclick='AgregarNumP();' >"+
 "<input type='button' value='Borrar' class='btn btn-secondary ' onclick='BorrarNumP();' >"+
 "<!--celular-->"+

"</div>"+

"<div class='form-group'>"+
"<label>Números: </label>"+
"<div id='PTelefono'>"+
"</div>"+

"<div class='form-row'>"+

      "<div class='form-group col-6'>"+
          "<!--Fecha Entrada-->"+
          "<label>Nivel Triage</label>"+
          "<input id='PTriage' type='text' class='form-control'' required>"+
         

      "</div>"+

      "<div class='form-group col-6'>"+
      "<!--Fecha Nacimiento-->"+
              "<label>Familiar/Tutor</label>"+
              "<input id='PFamiliar' type='text' class='form-control' required>"+

        "</div>"+
"</div>"+

"<div class='form-group'>"+
"<!--Alergias-->"+
"<label>Alergia/Afección</label>"+
  "  <textarea class='form-control rounded-0' id='PAlergia' rows='4'></textarea>"+
"</div>"+

"<div class='form-group'>"+
"<!--Antecedentes Familiares-->"+
"<label>Antecedentes Familiares</label>"+
  "<textarea class='form-control rounded-0' id='PAntes' rows='4' '></textarea>"+
"</div>"+




"<div class='form-group'>"+
      "<label>Estado</label>"+
      "<div class='select-wrap'>"+
      "<select name='' id='PEstado' class='form-control'>"+
      "<option value='Alta'>Alta</option><option value='Baja'>Baja</option><option value='Error'>Error - Borrar</option>"+
      "</select>"+
      "</div>"+
  "</div>"+
"<div>"+
"<input id='Psubmit' class='btn btn-primary' type='submit' value='Modificar'>"+
"</div>"+

" </div>"+
" </div>"+

"<div id='PContenerdorTabla' style='display: none;'>"+
"<table class='table'>"+
"<thead class='thead-dark'>"+
"<tr>"+
 "<th scope='col'>Código</th>"+
 "<th scope='col'>Nombre</th>"+
 "<th scope='col'>Apellido</th>"+
 "<th scope='col'>Ver</th>"+
"</tr>"+
"</thead>"+
"<tbody id='PTabla'>"+
"<tr>"+
 "<th scope='row'>1</th>"+
 "<td>Mark</td>"+
 "<td>Otto</td>"+
"</tr>"+
"<tr>"+
 "<th scope='row'>2</th>"+
 "<td>Jacob</td>"+
 "<td>Thornton</td>"+
"</tr>"+
"<tr>"+
" <th scope='row'>3</th>"+
 "<td>Larry</td>"+
 "<td>the Bird</td>"+
"</tr>"+
"</tbody>"+
"</table>"+
" </div>"

)
};

function mostrarPestana_4(){
  $("#pest-4").html(

      "<form action='#' class='ftco-animate' style='POSITION: absolute' onsubmit='event.preventDefault(); return RegistrarEE();'>"+
      "<h2 style='text-transform: uppercase'><b>Enfermera</b></h2>"+


      "<div class='form-group'>"+
      "<input type='button' value='Nuevo' class='btn btn-secondary ' onclick=\"MostrarContenidoEE('Nuevo');\">"+
          "<label>Codigo</label>"+
          "<input id='EECodi' type='text' class='form-control'>"+
          "<input type='button' value='Buscar' class='btn btn-secondary ' onclick='MostrarTablaEE();'>"+
     " </div>"+
     "<div id='EEContenedor' style='display: none;'>"+
     "<input id='EEEdicion' type='button' value='Editar' class='btn btn-secondary ' onclick='EditarEE();'>"+
     "<div class='form-row'>"+
     "<div class='form-group col-6'>"+
         "<label>Nombre</label>"+
         "<input id='EENombre' type='text' class='form-control'  required>"+
     "</div>"+

     "<div class='form-group col-6'>"+
         "<label >Apellido</label>"+
         "<input id='EEApellido' type='text' class='form-control' required>"+
     "</div>"+

 "</div>"+

 "<div class='form-group'>"+
 "<!--Direcion-->"+
 "<label>Dirección</label>"+
 "<input id='EEDirrecion' type='text' class='form-control' required>"+
 
 


"</div>"+

"<div class='form-group'>"+
"<label>Identificación</label>"+
 "<!--Identificacion-->"+
 "<input id='EEIdentificacion' type='text' class='form-control'  required>"+
 

"</div>"+

"<div class=' form-group'>"+
"<div class='form-check '>"+
"<input id='EECedula' class='form-check-input' style='margin-left:0px !important;' type='radio' name='gridRadios' value='cedula' checked>"+
"<label class='form-check-label' for='gridRadios1'>"+
   "Cédula"+
"</label>"+
"</div>"+
"<div class='form-check'>"+
"<input id='EEPasaporte' class='form-check-input' style='margin-left:0px !important;' type='radio' name='gridRadios'  value='passaporte'>"+
"<label class='form-check-label' for='gridRadios2'>"+
   "Pasaporte"+
"</label>"+
"</div>"+
"</div>"+





 "<div class='form-row'>"+      
     "<div class='form-group col-6'>"+   
     "<!--Sexo-->"+
     "<label>Sexo</label>"+
     "<div class='select-wrap'>"+
     "<select id='EESexo' class='form-control' >"+
         "<option value='Masculino'>Masculino</option><option value='Femenino'>Femenino</option><option value='Otros'>Otros</option>"+
     "</select>"+
     "</div>"+
 "</div>"+
 
 "<div class='form-group col-6'>"+
     "<label>Tipo de Sangre</label>"+
     "<div class='select-wrap'>"+
     "<select name='' id='EESangre' class='form-control'>"+
     "<option value='O+'>O+</option><option value='A+'>A+</option><option value='A-'>A-</option>"+
         "<option value='B+'>B+</option><option value='B-'>B-</option><option value='AB+'>AB+</option>"+
         "<option value='AB-'>AB-</option><option value='O-'>O-</option>"+
     "</select>"+
     "</div>"+
 "</div>"+

"</div>"+


"<!--No. seguro social-->"+
"<div class='form-group'>"+
 "<label>No. Seguro Social</label>"+
 "<input id='EESeguro' type='text' class='form-control' required>"+
"</div>"+
"<!--Tipo sangre-->"+



"<div class='form-row'>"+
"<div class='form-group col-6'>"+
"<!--Especialidad-->"+
"<label>Especialidad</label>"+
"<div class='select-wrap'style='display:inline !important' >"+
"<select name='' id='EEEspecialidad' class='form-control'>"+
    "<option value='Obstétrico-Ginecológica (matrona)'>Obstétrico-Ginecológica (matrona)</option>"+
    "<option value='Salud Mental'>Salud Mental</option>"+
    "<option value='Oncológica'>Oncológica</option>"+
    "<option value='Infantil'>Infantil</option>"+
    "<option value='Geriátrica'>Geriátrica</option>"+
    "<option value='Pediátrica'>Pediátrica</option>"+
    "<option value='Cuidados Intensivos'>Cuidados Intensivos</option>"+
    "<option value='Área quirúrgica y Anestesia'>Área quirúrgica y Anestesia</option>"+
    "<option value='Cardiología'>Cardiología</option>"+
    "<option value='Familiar y Comunitaria'>Familiar y Comunitaria</option>"+
    "<option value='Cuidados Médico-Quirúrgicos'>Cuidados Médico-Quirúrgicos</option>"+

"</select>"+
"</div>"+
"</div>"+

"<div class='form-group col-6'>"+
"<!--Cargo-->"+
  "<label>Experiencia</label>"+
  "<input id='EEExperencia' type='number' class='form-control' placerholder='En años' required>"+
"</div>"+
"</div>"+
   "<div class='form-row'>"+

     "<div class='form-group col-6'>"+
         "<!--Fecha Entrada-->"+
         "<label>Fecha Entrada</label>"+
         "<input id='EEFechaEntrada' type='date' class='form-control' required>"+
        

     "</div>"+

     "<div class='form-group col-6'>"+
     "<!--Fecha Nacimiento-->"+
             "<label>Fecha Nacimiento</label>"+
             "<input id='EEFechaNacimiento' type='date' class='form-control' required>"+

         "</div>"+
     "</div>"+
     "<div class='form-group'>"+
     "<!--Telefono-->"+
     "<label>Número Telefónico</label>"+
     "<input id='EENumero' type='text' class='form-control'>"+
     "<input type='button' value='Agregar' class='btn btn-secondary ' onclick='AgregarNumEE();' >"+
     "<input type='button' value='Borrar' class='btn btn-secondary ' onclick='BorrarNumEE();' >"+
     "<!--celular-->"+
   
   "</div>"+

   "<label>Números: </label>"+
   "<div id='EETelefono'>"+
   "</div>"+



   "<div class='form-group'>"+
  "<!--Escolaridad-->"+
  "<label>Escolaridad</label>"+
  "<div class='select-wrap'>"+
        "<select name='' id='EEEscolaridad' class='form-control'>"+
            "<option value='Técnico'>Técnico</option>"+
            "<option value='Bachiller'>Bachiller</option>"+
            "<option value='Profesional'>Profesional</option>"+
        "</select>"+
      "</div>"+
"</div>"+

"<div class='form-group'>"+
"<!--Correo Electrónico-->"+
"<label>Correo Electrónico</label>"+
"<input id='EECorreo' type='email' class='form-control' required>"+
"</div>"+

"<div class='form-group'>"+
          "<label>Estado</label>"+
          "<div class='select-wrap'>"+
          "<select name='' id='EEEstado' class='form-control'>"+
          "<option value='Habilitado'>Habilitado</option><option value='deshabilitado'>deshabilitado</option><option value='Error'>Error - Borrar</option>"+
          "</select>"+
          "</div>"+
      "</div>"+
"<div>"+
    "<input id='EEsubmit' class='btn btn-primary' type='submit' value='Modificar'>"+
 "</div>"+


 " </div>"+

 "<div id='EEContenerdorTabla' style='display: none;'>"+
 "<table class='table'>"+
 "<thead class='thead-dark'>"+
   "<tr>"+
     "<th scope='col'>Código</th>"+
     "<th scope='col'>Nombre</th>"+
     "<th scope='col'>Apellido</th>"+
     "<th scope='col'>Ver</th>"+
   "</tr>"+
 "</thead>"+
 "<tbody id='EETabla'>"+
   "<tr>"+
     "<th scope='row'>1</th>"+
     "<td>Mark</td>"+
     "<td>Otto</td>"+
   "</tr>"+
   "<tr>"+
     "<th scope='row'>2</th>"+
     "<td>Jacob</td>"+
     "<td>Thornton</td>"+
   "</tr>"+
   "<tr>"+
    " <th scope='row'>3</th>"+
     "<td>Larry</td>"+
     "<td>the Bird</td>"+
   "</tr>"+
 "</tbody>"+
"</table>"+
 " </div>"
  )
};
