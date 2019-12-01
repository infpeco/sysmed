function abrirNutricionR() {
  fetchTasks();

    $("#Registro").html(
  
        `<form id="formulari" class="ftco-animate">
            <h4 style="text-transform: uppercase" ><b> Dietas</b></h4><br>
             <div>


             <table id="customers">
            <thead>
            <tr>Hipoproteica</tr>
            <tr>
            <th id='tandas' >Tandas</th>
            <th id='lunes' >Lunes</th>
            <th id='martes' >Martes</th>
            <th id='miercoles' >Miercoles</th>
            <th id='jueves' >Jueves</th>
            <th id='viernes' >Viernes</th>
            <th id='sabado' >Sabado</th>
            <th id='domingo' >Domingo</th>
            </tr>
            </thead>

            <tbody id="tasksDiet"></tbody>
          </table>
                         
                        </form>`
  
    );
    $.ajax({
      url: '../../php/nutricion/muestra2.php',
      type: 'GET',
      success: function(response) {
        let tasks = JSON.parse(response);
        let template = '';
        tasks.forEach(task => {
          template += `
              <tr>
                  <td>${task.tandas}</td>
                  <td>${task.lune}</td>
                  <td>${task.marte}</td>
                  <td>${task.miercole}</td>
                  <td>${task.jueve}</td>
                  <td>${task.vierne}</td>
                  <td>${task.sabado}</td>
                  <td>${task.domingo}</td>
              </tr>
          `
        });
        $('#tasksDiet').html(template);
      }
    });

  };
 

  
  
  function abrirNutricion() {
  
      $("#Asignacion").html(
  
          `<form id="formulari" class="ftco-animate">
              <h4 style="text-transform: uppercase" ><b> Asignación</b></h4><br>
               <div id='tasks'>
                        <!--Codigo-->
                        <label><h5>Código </h5></label>
                        <input type='text' id='codigo' class='form-control' style='width: 15% !important; display:inline'>

                        <!--Boton buscar-->
                      <button id='boton' value='Buscar' class='btn btn-secondary py-2 px-4' style="display: inline" >Buscar</button>


                      <!--Fecha Entrada-->
                      <label style='padding-left: 12% !important'></label><h5 style='display:inline !important'>Fecha de Nacimiento</h5></label>
                      <input id='fecha' type='text' class='form-control' style='width: 16% !important; display:inline'>
          
                      </div>
    
                      <div class='form-group'>
                          <!--Nombre-->
                          <label><h5 style='display:inline !important'>Nombre </h5></label>
                          <input id='nombres' type='text' class='form-control' style='width: 25% !important; display:inline' required >
                         
                            <!-- Telefono -->  
                            <label style='padding-left: 10% !important'></label><h5 style='display:inline !important'>Telefono</h5></label>
                            <input id='telefono' type='text' class='form-control' style='width: 13% !important; display:inline'>
                        </div>
    
                        <divclass='form-group'>
                            
                            <label><h5>Apellido </h5></label>
                            <input id='apellidos' type='text' class='form-control' style='width: 25% !important; display:inline' >
                            
                            <!-- Sexo -->
                            <label style='padding-left: 11% !important'></label><h5 style='display:inline !important'>Sexo</h5></label>
                           <input id='sexo' type='text' class='form-control' style='width: 10% !important; display:inline'>
                          </div>
                          
                          <div class='form-group'>
                           <label><h5>Patología </h5></label>
                          <input id='patologia' type='text' class='form-control' style='width: 25% !important; display:inline' >
                          
                          <!-- Direccion -->
                          <label style='padding-left: 10% !important'></label><h5 style='display:inline !important'>Dirección</h5></label>
                           <input id='direccion' type='text' class='form-control' style='width: 25% !important; display:inline'>
                           </div>

                            <div class='form-group'>
                           <label><h5>Tipo de Dieta </h5></label>
                           <select id='dieta' class='form-control' style='width: 17% !important; display:inline'>
                           <option value="Seleccione">Seleccione</option>
                           <option value="protgastrica">Proteccion Gastrica</option>
                           <option value="hiposodica Estricta">Hiposodica Estricta</option>
                           <option value="hipoproteica">Hipoproteica</option>
                         </select>

                           <!-- Identificacion -->
                         <label style='padding-left: 10% !important'></label><h5 style='display:inline !important'>Identificacion</h5></label>
                         <input id='identificacion' type='text' class='form-control' style='width: 13% !important; display:inline'>
                         
      
                            </div>

                            <div class='form-group'>
                            <label><h5>Piso </h5></label>
                           <input id='piso' type='Number' class='form-control' style='width: 8% !important; display:inline' >
                           
                           <!-- Habitacion -->
                           <label style='padding-left: 10% !important'></label><h5 style='display:inline !important'>No. Habitación</h5></label>
                           <input id='habitacion' type='text' class='form-control' style='width: 10% !important; display:inline'>
                             
                           <!-- Sangre -->
                            <label style='padding-left: 10% !important'><h5>Tipo de Sangre </h5></label>
                            <input id='sangre' type='text' class='form-control' style='width: 10% !important; display:inline' >
                           </div>

                             <div class='form-group'>
                           <label><h5>Nutricionista </h5></label>
                          <input id='nutricionista' type='text' class='form-control' style='width: 35% !important; display:inline' >  
                          
                          <!-- Seguro -->
                          <label style='padding-left: 10% !important'></label><h5 style='display:inline !important'>Seguro Social</h5></label>
                           <input id='seguro' type='text' class='form-control' style='width: 10% !important; display:inline'>
                          </div>
                            
                          <div class='col-sm-9 ftco-animate' style="padding-top: 5% !important;">
                          <button type='submit' value='Guardar' class='btn btn-secondary py-2 px-4' style="display: inline" >Guardar</button>
                           </div>
  
               </div>
                          </form>`

      );

      $('#codigo').keyup(function(e){
        if($('#codigo').val()){
        let codigo = $('#codigo').val();
        if($('#codigo').val()){
          let codigo = $('#codigo').val();
          $.ajax({
             url:'../../php/nutricion/task-search.php',
             type: 'POST',
             data: { codigo },
               success: function(response){
                let tasks = JSON.parse(response);
                console.log(tasks);
                /*let template = '';

                  tasks.forEach(task =>{
                    template += `<li>
                        ${task.nombre}
                    </li>`
                  });*/
   
              }
          });
        }
      }
  
      });

      $('#boton').click(function(e){
        e.preventDefault();
        if($('#codigo').val()){
        let codigo = $('#codigo').val();
        if($('#codigo').val()){
          let codigo = $('#codigo').val();
          $.ajax({
             url:'../../php/nutricion/task-search.php',
             type: 'POST',
             data: { codigo },
               success: function(response){
                let tasks = JSON.parse(response);
                if(1 != 0)
                {
                  console.log(tasks);
                  /*let template = '';

                    tasks.forEach(task =>{
                      template += `<li>
                          ${task.nombre}
                      </li>`
                    });*/
                    $('#apellidos').val(tasks[0]["apellidos"]);
                    $('#nombres').val(tasks[0]["nombre"]);
                    $('#patologia').val(tasks[0]["patologia"]);
                    $('#piso').val(tasks[0]["piso"]);
                    $('#habitacion').val(tasks[0]["habitacion"]);
                    $('#sangre').val(tasks[0]["sangre"]);
                    $('#fecha').val(tasks[0]["fecha"]);
                    $('#sexo').val(tasks[0]["sexo"]);
                    $('#direccion').val(tasks[0]["direccion"]);
                    $('#identificacion').val(tasks[0]["identificacion"]);
                    $('#nutricionista').val(tasks[0]["nutricionista"]);
                    $('#telefono').val(tasks[0]["telefono"]);
                    $('#seguro').val(tasks[0]["seguro"]);
                }
                else
                {
                  alert("No hay coincidencias");
                }
   
              }
          });
        }
      }
  
      });

      $('#formulari').submit(function(e){
        e.preventDefault();
         const postData = {
          nombre: $('#nombres').val(),
          apellido: $('#apellidos').val(),
          identificacion: $('#identificacion').val(),
          sexo: $('#sexo').val(),
          direccion: $('#direccion').val(),
          tipo_dieta: $('#dieta').val(),
          tipo_sangre: $('#sangre').val(),
          fecha_nacimiento: $('#fecha').val(),
          patologia: $('#patologia').val(),
          no_habitacion: $('#habitacion').val(),
          Nutricionista: $('#nutricionista').val(),
          seguro_social: $('#seguro').val(),
          telefono: $('#telefono').val(),
          piso: $('#piso').val(),
        };
        console.log(postData);
        $.post('../../php/nutricion/agregar.php', postData, function(response) {
          console.log(response);
          $('#formulari').trigger('reset');
        });
      });

  };
  
  
  function abrirNutricionD() {
    fetchTasks();
  
    $("#Distribucion").html(
  
        `<form id="formula" class="ftco-animate">
            <h4 style="text-transform: uppercase" ><b> Distribución</b></h4><br>
             <div  class='form-group'>

           <div id='tarea'>
           <label><h5>Código </h5></label>
           <input id='codidis' type='text' class='form-control' style='width: 15% !important; display:inline ' >

           <!--Boton buscar-->
           <button id='button' value='Buscar' class='btn btn-secondary py-2 px-4' style="display: inline" >Buscar</button>
         </div>
                    <div class='form-group'>
                        <!--Enfermera-->
                        <label ><h5 style='display:inline !important'>Enfermera </h5></label>
                        <input id='enfermera' type='text' class='form-control' style='width: 25% !important; display:inline' required >

                        <!-- fecha -->
                        <label style='padding-left: 5% !important'><h5>Fecha </h5></label>
                         <input id='fechaenfer' type='text' class='form-control' style='width: 15% !important; display:inline' >
                      </div>
  
                      <div class='form-group'>
                          
                          <label><h5>Apellidos</h5></label>
                          <input id='apellienfer' type='text' class='form-control' style='width: 25% !important; display:inline' >
                        </div>

                           <div class='col-sm-9 ftco-animate' style="padding-top: 5% !important;">
                            
                           <button type='submit' value='Guardar' class='btn btn-secondary py-2 px-4' style="display: inline" >Guardar</button>
      
                            </div>
  
                        </div>

                        <!-- Nueva tabla registros -->

            <table id="customers">
            <thead>
            <tr>
              <th id='nombre'>Nombre</th>
              <th id='apellidos'>Apellidos</th>
              <th id='piso'>Piso</th>
              <th id='no_habitacion'>Habitacion</th>
              <th id='tipo_dieta'>Dieta</th>
              <th id='nutricionista'>Nutricionista</th>
            </tr>
            </thead>
            <tbody id="tasksDis"></tbody>
          </table>
                        </form>`
  
    );

fetchTasks();

/*  Buscar */
$('#codidis').keyup(function(e){
  if($('#codidis').val()){
  let codigo = $('#codidis').val();
  if($('#codidis').val()){
    let codigo = $('#codidis').val();
    $.ajax({
       url:'../../php/nutricion/buscar2.php',
       type: 'POST',
       data: { codigo },
         success: function(response){
          let tasks = JSON.parse(response);
          console.log(tasks);
          /*let template = '';

            tasks.forEach(task =>{
              template += `<li>
                  ${task.nombre}
              </li>`
            });*/

        }
    });
  }
}

});

$('#button').click(function(e){
  e.preventDefault();
  if($('#codidis').val()){
  let codigo = $('#codidis').val();
  if($('#codidis').val()){
    let codigo = $('#codidis').val();
    $.ajax({
       url:'../../servidor/buscar2.php',
       type: 'POST',
       data: { codigo },
         success: function(response){
          let tasks = JSON.parse(response);
          if(1 != 0)
          {
           console.log(tasks);
            /*let template = '';

              tasks.forEach(task =>{
                template += `<li>
                    ${task.nombre}
                </li>`
              });*/
              $('#apellienfer').val(tasks[0]["apellidos"]);
              $('#enfermera').val(tasks[0]["enfermera"]);
              
          }
          else
          {
            alert("No hay coincidencias");
          } 

        }
    });
  }
}

});




/* agregar */
$('#formula').submit(function(e){
  e.preventDefault();
   const postData = {
    enfermera: $('#enfermera').val(),
    apellidos: $('#apellienfer').val(),
    fecha: $('#fechaenfer').val(),
  };

  $.post('../../php/nutricion/agregar.php', postData, function(response) {
    console.log(response);
    $('#formulari').trigger('reset');
  });
});
    

  };





  /* muestra en la tabla */
  function fetchTasks() {
    $.ajax({
      url: '../../php/nutricion/muestra.php',
      type: 'GET',
      success: function(response) {
        let tasks = JSON.parse(response);
        let template = '';
        tasks.forEach(task => {
          template += `
              <tr>
                  <td>${task.nombre}</td>
                  <td>${task.apellidos}</td>
                  <td>${task.piso}</td>
                  <td>${task.habitacion}</td>
                  <td>${task.dieta}</td>
                  <td>${task.nutricionista}</td>
              </tr>
          `
        });
        $('#tasksDis').html(template);
      }
    });
  }

  

