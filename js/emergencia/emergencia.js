
function RegistrarDatos() {
  console.log("Hora de registro");

  $("#formulario").submit(function (e) {
    const datosPost = {
      nombre: $("#nombre").val(),
      apellido: $("#apellido").val(),
      alergia: $("#alergia").val(),
      motivo: $("#motivo").val(),
      fechaEntrada: $("#fechaEntrada").val(),
      parentesco: $("#parentesco").val(),
      nombreApellido: $("#NomApe").val(),
      direccion: $("#direccionP").val(),
      telefono: $("#telefonoP").val(),
      celular: $("#celularP").val()
    };

    let url = '../../php/emergencia/registro-emer.php';
    console.log(datosPost);

    e.preventDefault();

    $.post(url, datosPost, function (response) {
      $("#formulario").trigger('reset');
      console.log(response);
    });

  });

};

function RegistrarDatosE() {
  console.log("Hora de registro");

  $("#eva").submit(function (e) {
    const datosPost = {
      nombreE: $("#nombreE").val(),
      apellidoE: $("#apellidoE").val(),
      alergiaE: $("#alergiaE").val(),
      motivoE: $("#motivoE").val(),
      enfermedad: $("#enfermedad").val(),
      examenFisico: $("#examenFisico").val(),
      presionAlt: $("#presionAlt").val(),
      freCardiaca: $("#freCardiaca").val(),
      freRespiratoria: $("#freRespiratoria").val(),
      satOxigeno: $("#satOxigeno").val(),
      tempAxilar: $("#tempAxilar").val(),
      peso: $("#peso").val(),
      diagnosticoE: $("#diagnosticoE").val(),
      tratamientoE: $("#tratamientoE").val(),
      medicamento: $("#medicamento").val(),
      pruebas: $("#pruebas").val(),
      estudios: $("#estudios").val(),
      fecha: $("#fecha").val()
    };

    let url = '../../php/emergencia/registro-eva.php';
    console.log(datosPost);

    e.preventDefault();

    $.post(url, datosPost, function (response) {
      $("#eva").trigger('reset');
      console.log(response);
    });

  });

};

function RegistrarDatosR() {
  console.log("Hora de registro");

  $("#ref").submit(function (e) {
    const datosPost = {
      nombreR: $("#nombreR").val(),
      apellidoR: $("#apellidoR").val(),
      alergiaR: $("#alergiaR").val(),
      doctor: $("#doctor").val(),
      alta: $("#alta").val(),
      diasIncapacitado: $("#diasIncapacitado").val(),
      diagnosticoDef: $("#diagnosticoDef").val(),
      consejo: $("#consejo").val(),
      referimiento: $("#referimiento").val(),
      anamnesis: $("#anamnesis").val(),
      diagnosticoR: $("#diagnosticoR").val(),
      evolucion: $("#evolucion").val(),
      examenFisicoR: $("#examenFisicoR").val(),
      tratamientoR: $("#tratamientoR").val(),
      motivoR: $("#motivoR").val(),
      condiciones: $("#condiciones").val(),
      fechaR: $("#fecha").val()
    };

    let url = '../../php/emergencia/registro-ref.php';
    console.log(datosPost);

    e.preventDefault();

    $.post(url, datosPost, function (response) {
      $("#ref").trigger('reset');
      console.log(response);
    });

  });

};

function MostrarT(consulta) {
  console.log("Mostrando Datos");
  $.ajax({
    url: '../../php/emergencia/cargar-datos.php',
    type: 'POST',
    dataType: 'html',
    data: { consulta: consulta },
  })
    .done(function (respuesta) {
      $("#datos").html(respuesta);
    })
    .fail(function () {
      console.log("Error al Cargar");
    })
  newFunction().on('keyup', '#bus', function () {
    var valor = $(this).val();
    if (valor != "") {
      MostrarT(valor);
    } else {
      MostrarT();
    }
  });

  function newFunction() {
    return $(document);
  }
}

function AbrirAdmision(consulta) {

  $("#Admision").html(

    `
    <form id="formulario" class="ftco-animate">

      <h4 style='text-transform: uppercase'><b>Admisión</b></h4><br>
  
      <input type='text' id="cod" class='form-control' style='width: 15% !important;
      display:inline !important' placeholder='Buscar...'>
      
      <button type='button' title= 'Buscar' onclick="MostrarA()" 
      class='btn btn-secondary py-2 px-2' id='busc'> 
      <img src='../../images/emergencia/bus.png' width='25px'></button>
      
      <a href=" " ><button type='button' title= 'Nuevo'class='btn btn-secondary py-2 px-2' id='nue'> 
      <img src='../../images/emergencia/n.png' width='25px'></button></a> 
      
      <button type='button' title= 'Editar' onclick="EditarA()" 
      class='btn btn-secondary py-2 px-2' id='editar'> 
      <img src='../../images/emergencia/ed.png' width='25px'></button><br><br>

      <fieldset style='border: 1px solid rgb(0, 0, 0); padding-left: 15px'>
      <legend >  <h4><b>Información de Ingreso</b></h4> </legend>

      <div id='Contenedor' style='display: none;' >
      <div class='form-group'>
        <label>
          <h5>Apellidos </h5>
        </label>
        <input type='text' id="apellido" class='form-control' 
        style='width: 40% !important;display:inline !important; 'required>

        <label>
          <h5 style='display:inline !important; padding-left: 20px !important'>Fecha de Entrada</h5>
        </label>
        <input type='date' id='fechaEntrada' class='form-control' 
        style='width: 15% !important;
        display:inline !important;'>
      </div>

      <div class='form-group'>
        <label>
          <h5>Nombre </h5>
        </label>
        <input type='text' id="nombre" class='form-control' style='width: 41% !important;
        display:inline !important; requered'>
      </div>

      <div class='form-group'>
          <label>
          <h5>Afección/Alergia </h5>
          </label>
          <input type='text' id="alergia" class='form-control' style='width: 30% !important;
          display:inline !important; requered'>
      </div>
      </div>

      <div class='form-group'>
        <label>
          <h5>Motivo </h5>
        </label>
        <input type='text' id="motivo" class='form-control' 
        style='width: 62% !important;display:inline !important'>

      </div>
      </fieldset> <br>

      <fieldset style='border: 1px solid rgb(0, 0, 0); padding-left: 15px'>
      <legend > <h4><b>Persona de Referencia </b></h4> </legend>

      <div class='form-group'>
        <label>
          <h5>Parentesco</h5>
        </label>
        <select id='parentesco' class='form-control' 
        style='width: 16% !important;display:inline !important'>
          <option value=''>-Seleccionar- </option>
          <option value='Padre'>Padre</option>
          <option value='Madre'>Madre</option>
          <option value='Hermano'>Hermano/a</option>
          <option value='Hijo'>Hijo/a</option>
          <option value='Otros'>Otros</option>
        </select>
        <label>
          <h5 style='display:inline !important; padding-left: 
          120px !important'>Nombre y Apellido </h5>
        </label>
        <input type='text' id="NomApe" class='form-control' 
        style='width: 40% !important;display:inline !important'>
      </div>

      <div class='form-group'>
        <label>
          <h5>Dirección </h5>
        </label>
        <input type='text' id="direccionP" class='form-control' style='width: 40% !important;
        display:inline !important'>
      </div>

      <div class='form-group'>
        <label>
          <h5>Teléfono</h5>
        </label>
        <input type='text' id="telefonoP" class='form-control' style='width: 20% !important;
        display:inline !important'>
        <label>
          <h5 style='display:inline !important; padding-left: 90px !important'>Celular</h5>
        </label>
        <input type='text'  id="celularP" class='form-control' style='width: 20% !important;
        display:inline !important'>
      </div>
      </fieldset>

      <div class='col-sm-9  ftco-animate' style='padding-top: 4% !important; '>
      <button id="guardar" value= "guardar" class="btn btn-secondary py-2 px-4" 
      style="display: inline;" type="submit"><b>Guardar</b></button>
     
</form>`

  )
}

function AbrirEvaluacion() {

  $("#Evaluacion").html(

    `<form id="eva" class="ftco-animate" >
        <h4 style='text-transform: uppercase'><b>Evaluación</b></h4><br>
        <input type='text' id="codigo" class='form-control' style='width: 15% !important;
        display:inline !important' placeholder='Buscar...'>

        <button type='button' title= 'Buscar' onclick="MostrarE()"; 
        class='btn btn-secondary py-2 px-2' id='busc'> 
        <img src='../../images/emergencia/bus.png' width='25px'></button>
        
        <button type='button' title= 'Editar' onclick="EditarE()" 
        class='btn btn-secondary py-2 px-2' id='editar'> 
        <img src='../../images/emergencia/ed.png' width='25px'></button><br><br>
        
        <fieldset style='border: 1px solid rgb(0, 0, 0); padding-left: 15px'>
          <legend > <h4><b>Historial Clínico</b></h4> </legend>

          <div id="ContenedorE" style='display: none;'>
          <div class='form-group'>
            <label>
              <h5>Fecha</h5>
            </label>
            <input type='date' id='fecha' class='form-control' 
            style='width: 15% !important;display:inline !important;'>
          </div>

          <div class='form-group'>
            <label>
              <h5>Apellidos </h5>
            </label>
            <input type='text' id='apellidoE' class='form-control' 
            style='width: 40% !important;display:inline !important;'>
            <label>
              <h5 style='display:inline !important; padding-left: 15px !important'>Afección/Alergia </h5>
            </label>
            <input type='text' id='alergiaE' class='form-control' 
            style='width: 30% !important;display:inline !important;'>
          </div>

          <div class='form-group'>
            <label>
              <h5>Nombre </h5>
            </label>
            <input type='text' id='nombreE' class='form-control' 
            style='width: 41% !important;display:inline !important;'>
            <label>
              <h5 style='display:inline !important; padding-left: 15px !important'>Motivo </h5>
            </label>
            <input type='text' id='motivoE' class='form-control' 
            style='width: 40% !important;display:inline !important;'>
          </div>
          </div>

          <div class='form-group'>
            <label>
              <h5>Enfermedad Actual </h5>
            </label>
            <input type='text' id='enfermedad' class='form-control' 
            style='width: 30% !important;display:inline !important' required>
            <label>
              <h5 style='display:inline !important; padding-left: 50px !important'>Examen Físico </h5>
            </label>
            <input type='text' id='examenFisico' class='form-control' 
            style='width: 32% !important;display:inline !important' required>
          </div>
          
          <div class='form-group'>
            <label>
              <h5><b>Signos Vitales</b> </h5>
            </label>
          </div>

          <div class='form-group'>
            <input type='number' id='presionAlt' class='form-control' 
            style='width: 14% !important;display:inline !important'
              placeholder='Presión Alt.'>
            <input type='number' id='freCardiaca' class='form-control' 
            style='width: 15% !important;display:inline !important'
              placeholder='F. Cardiaca'>
            <input type='number' id='freRespiratoria' class='form-control' 
            style='width: 17% !important;display:inline !important'
              placeholder='F. Respiratoria'>
            <label>
              <h5 style='display:inline !important; padding-left: 45px !important'>Diagnóstico </h5>
            </label>
            <input type='text' id='diagnosticoE' class='form-control' 
            style='width: 34% !important;display:inline !important' required>
          </div>

          <div class='form-group'>
            <input type='number' id='satOxigeno' class='form-control' 
            style='width: 16% !important;display:inline !important'
              placeholder='Sat. Oxigeno'>
            <input type='number' id='temAxilar' class='form-control' 
            style='width: 15% !important;display:inline !important'
              placeholder='Temp. Axilar'>
            <input type='number' id='peso' class='form-control' 
            style='width: 10% !important;display:inline !important'
              placeholder='Peso'>
            <label>
              <h5 style='display:inline !important; padding-left: 105px !important'>Tratamiento </h5>
            </label>
            <input type='text' id='tratamientoE' class='form-control' 
            style='width: 34% !important;display:inline !important' required>
          </div>
           
          </fieldset> <br>

          <fieldset style='border: 1px solid rgb(0, 0, 0); padding-left: 15px'>
          <legend > <h4 style='padding-rigth: 15px'><b>Orden Medica</b></h4> </legend>

            <fieldset style='border: 1px solid Tomato; padding-left: 10px'>
            <legend > <h5><b>Medicamento</b></h5> </legend>
          
          <div class='form-group'>
            <label>
              <h5>Medicamento </h5>
            </label>
            <input type='text' id='medicamento' class='form-control' 
            style='width: 25% !important;display:inline !important; '>
            <button type='submit' title= 'Buscar'  class='btn btn-secondary py-2 px-2' 
            id=''> <img src='../../images/emergencia/bus.png' width='20px'></button>
          </div>

          <div class='form-group'>
            <select name='' id='' class='form-control' 
            style='width: 15% !important;display:inline !important'>
              <option value=''>Frecuencia </option>
              <option value=''>Única</option>
              <option value=''>Cada 2 horas</option>
              <option value=''>Cada 3 horas</option>
              <option value=''>Cada 4 horas</option>
              <option value=''>Cada 6 horas</option>
              <option value=''>Cada 8 horas</option>
              <option value=''>Cada 12 horas</option>
              <option value=''>Cada 24 horas</option>
            </select>

            <select name='' id='' class='form-control' 
            style='width: 13% !important;display:inline !important'>
              <option value=''>Via Adm. </option>
              <option value=''>Oral</option>
              <option value=''>Sublingual</option>
              <option value=''>Rectal</option>
              <option value=''>Intradérmica</option>
              <option value=''>Subcutánea</option>
              <option value=''>Intramuscular</option>
              <option value=''>Endovenosa</option>
              <option value=''>Intracardiaca</option>
              <option value=''>Intraraquidea</option>
              <option value=''>Intraarticular</option>
            </select>

            <input type='number' class='form-control' 
            style='width: 8% !important;display:inline !important'
              placeholder='Dosis'>
            <select name='' id='' class='form-control' 
            style='width: 13% !important;display:inline !important'>
              <option value=''>Unidad</option>
              <option value=''>Ml. (Mililitros)</option>
              <option value=''>Mg. (Miligramos)</option>
              <option value=''>L. (Litros)</option>
              <option value=''>Gr. (Gramos)</option>
            </select>

            <label>
              <h5 style='display:inline !important; 
              padding-left: 15px !important'>Comentario </h5>
            </label>
            <input type='text' class='form-control' 
            style='width: 34% !important;display:inline !important'>
          </div>

          </fieldset> <br>

          <fieldset style='border: 1px solid Tomato; padding-left: 10px'>
          <legend > <h5><b>Laboratorio</b></h5> </legend>
          
          <div class='form-group'>
            <label>
              <h5>Tipo de Prueba </h5>
            </label>
            <input type='text' id='pruebas' class='form-control' 
            style='width: 20% !important;display:inline !important;' >
            <button type='submit' title= 'Buscar'  class='btn btn-secondary py-2 px-2' 
            id=' '> <img src='../../images/emergencia/bus.png' width='20px'></button>
          </div>

          <div class='form-group'>
            <input type='number' class='form-control' 
            style='width: 13% !important;display:inline !important'
              placeholder='Cantidad'>
            <label>
              <h5 style='display:inline !important; 
              padding-left: 50px !important'>Comentario </h5>
            </label>
            <input type='text' class='form-control' s
            tyle='width: 30% !important;display:inline !important'>
          </div>

          </fieldset> <br>

          <fieldset style='border: 1px solid Tomato; padding-left: 10px'>
          <legend > <h5><b>Estudios o Procedimientos</b></h5> </legend>
          
          <div class='form-group'>
            <label>
              <h5>Tipo de Estudios </h5>
            </label>
            <input type='text' id='estudios' class='form-control' 
            style='width: 20% !important;display:inline !important;' >
            <input type='button' value='Cirugias' class='btn btn-secondary py-2 px-2' 
            style='width: 10%!important;'>
            <input type='button' value='Imagenes' class='btn btn-secondary py-2 px-2' 
            style='width: 11%!important;'>
          </div>

          <div class='form-group'>
            <input type='number' class='form-control' 
            style='width: 13% !important;display:inline !important'
              placeholder='Cantidad'>
            <label>
              <h5 style='display:inline !important; padding-left: 
              50px !important'>Comentario </h5>
            </label>
            <input type='text' class='form-control' style='width: 
            30% !important;display:inline !important'>
          </div>

          </fieldset> <br>
          
          <div class='col-sm-9  ftco-animate' style='padding-top: 5% !important;'>
          <button id="guar" value="guar" class="btn btn-secondary py-2 px-4" 
          style="display: inline;" type="submit">Guardar</button>
          </div>

        </form>`

  )
}

function AbrirReferencias() {

  $("#Referencias").html(

    `<form id="ref" class="ftco-animate">
    <h4 style='text-transform: uppercase'><b>Referencias</b></h4><br>
    <input type='text' id="codi" class='form-control' style='width: 15% !important;
    display:inline !important' placeholder='Buscar...'>

    <button type='button' title= 'Buscar' onclick="MostrarR()"; 
    class='btn btn-secondary py-2 px-2' id='busc'> 
    <img src='../../images/emergencia/bus.png' width='25px'></button>
    
    <button type='button' title= 'Editar' onclick="EditarR()" 
    class='btn btn-secondary py-2 px-2' id='editar'> 
    <img src='../../images/emergencia/ed.png' width='25px'></button><br><br>
    
    <div id="ContenedorR" style='display: none;'>
    <div class='form-group'>
        <label>
            <h5>Fecha</h5>
        </label>
        <input type='date' id="fechaR" class='form-control' 
        style='width: 17% !important;display:inline !important;'>
    </div>

    <div class='form-group'>
        <label>
            <h5>Apellidos </h5>
        </label>
        <input type='text' id="apellidoR" class='form-control' 
        style='width: 40% !important;display:inline !important;'>
        <label>
            <h5 style='display:inline !important; padding-left: 15px !important'>Afección/Alergia </h5>
        </label>
        <input type='text' id="alergiaR" class='form-control' 
        style='width: 30% !important;display:inline !important;'>
    </div>

    <div class='form-group'>
        <label>
            <h5>Nombre </h5>
        </label>
        <input type='text' id="nombreR" class='form-control' style='width: 41% !important;
        display:inline !important; '>
    </div>
    </div>

    <div class='form-group'>
        <label>
            <h5>Doctor </h5>
        </label>
        <input type='text' id="doctor" class='form-control' 
        style='width: 42% !important;display:inline !important;' required>
    </div>

    <fieldset style='border: 1px solid rgb(0, 0, 0); padding-left: 15px'>
    <legend > <h4><b>De Alta</b></h4> </legend>

    <div class='form-group'>
        <label>
            <h5>Casa de Alta </h5>
        </label>
        <select name='' id='alta' class='form-control' 
        style='width: 20% !important;display:inline !important'>
            <option value=''>-Seleccionar- </option>
            <option value=''>Alta al Paciente (Alta Voluntaria)</option>
            <option value=''>Alta Medica sin Licencia</option>
            <option value=''>Alta Medica con Licencia</option>
            <option value=''>A otro Centro Afiliado</option>
            <option value=''>A otro Centro no Afiliado</option>
            <option value=''>A Hospital Público</option>
        </select>
        
        <label>
            <h5 style='display:inline !important; padding-left: 
            175px !important'>Dias de Incapacidad </h5>
        </label>
        <input type='number' id = "diasIncapacitado" class='form-control' 
        style='width: 8% !important;display:inline !important'>
    </div>

    <div class='form-group'>
        <label>
            <h5>Diagnóstico Definitivo</h5>
        </label>
        <input type='text' id="diagnosticoDef" class='form-control' 
        style='width: 37% !important;display:inline !important'>
    </div>

    <div class='form-group'>
        <label>
            <h5>Consejos y Referimiento a Especialista </h5>
        </label><br>
        <textarea name='' id='consejo' cols='46' rows='2'></textarea>
    </div>
    
    </fieldset> <br>

    <fieldset style='border: 1px solid rgb(0, 0, 0); padding-left: 15px'>
    <legend > <h4><b>Consulta, Cirugía y Internamiento </b></h4> </legend>
    
    <div class="form-group">
        <label>
            <h5>Referimiento </h5>
        </label>
        <select name="" id="referimiento" class="form-control" 
        style="width: 20% !important;display:inline !important">
            <option value="">-Seleccionar- </option>
            <option value="">Consulta</option>
            <option value="">Cirugía</option>
            <option value="">Internamiento</option>
        </select>
    </div>

    <div class="form-group">
        <label>
            <h5>Anamnesis </h5>
        </label>
        <input type="text" id="anamnesis" class="form-control" 
        style="width: 38% !important;display:inline !important">
        <label>
            <h5 style="display:inline !important; padding-left: 
            15px !important">Examen Físico </h5>
        </label>
        <input type="text" id="examenFisicoR" class="form-control" 
        style="width: 33% !important;display:inline !important">
    </div>

    <div class="form-group">
        <label>
        <h5>Diagnóstico </h5>
        </label>
        <input type="text" id="diagnosticoR" class="form-control" 
        style="width: 37% !important;display:inline !important">
        <label>
            <h5 style="display:inline !important; padding-left: 
            15px !important">Tratamiento </h5>
        </label>
        <input type="text" id="tratamientoR" class="form-control" 
        style="width: 35% !important;display:inline !important">
    </div>

    <div class="form-group">
        <label>
        <h5>Evolución </h5>
        </label>
        <input type="text" id="evolucion" class="form-control" 
        style="width: 40% !important;display:inline !important">
        <label>
        <h5 style="display:inline !important; padding-left: 15px !important">Motivo </h5>
        </label>
        <input type="text" id="motivoR" class="form-control" 
        style="width: 40% !important;display:inline !important">  
    </div>

    <div class="form-group">
        <label>
            <h5>Condiciones </h5>
        </label>
        <input type="text" id="condiciones" class="form-control" 
        style="width: 37% !important;display:inline !important">
    </div>
   
    </fieldset>

    <div class='col-sm-9  ftco-animate' style='padding-top: 7% !important;'>
    <button id="guard" value="guard" class="btn btn-secondary py-2 px-4" 
    style="display: inline;" type="submit">Guardar</button>
    </div>

    </form>`

  )
}

function MostrarTabla() {
  $("#Registro").html(

    ` <form id="ref" class="ftco-animate">
    <h4 style='text-transform: uppercase' ><b>Registros de Pacientes</b></h4>

		<div class="form-group">
        <label for="bus"><h5>Buscar </h5></label>
        <input type="text" id="bus" name="bus" class="form-control" 
        style="width: 22% !important;display:inline !important"> </input>
		</div>
		
    <div id="datos"> </div>

    </form> `

  )
};

