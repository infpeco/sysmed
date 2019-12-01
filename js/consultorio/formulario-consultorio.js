//FORMULARIOS 

function mostrarPestana_1(){
    $("#pest-1").html(

       `<form action='#' class='ftco-animate' style='POSITION: absolute'>
    

        <div class='form-group'>
            <label style='padding-left: 19px !important'>Codigo</label>
            <input type='text' class='form-control' style='width: 20%; display: inline;'>
            <input type='button' value='Buscar' class='btn'>
            <label style='display:inline !important; padding-left: 60px !important'>Referencia</label>
           <input type='text' class='form-control' style='width: 30%; display: inline;' 
        </div>

        <div class='form-group'>
            <label style='padding-left: 19px !important'>Nombre</label>
            <input type='text' class='form-control' style='width: 30%; display: inline;'>
        <label style='display:inline !important; padding-left: 60px !important'>Apellido</label>
        <input type='text' class='form-control' style='width: 30%; display: inline;' >
        </div>
       
        <div class='form-group'>
            <label style='padding-left: 19px !important'>Telefono</label>
            <input type='text' class='form-control' style='width: 20%; display: inline;'>
            <label style='display:inline !important; padding-left: 60px !important'>fecha</label>
            <input type='date' class='form-control' style='width: 30%; display: inline;' >
        </div>

        <div class='form-group'>
                <label>Dortor/a</label>
                <input type='text' class='form-control' style='width: 20%; display: inline;'>
                <input type='button' value='Buscar' class='btn'>
                <label style='display:inline !important; padding-left: 60px !important'>Especialidad</label>
                <input type='text' class='form-control' style='width: 30%; display: inline;' >
            </div>
            <div>
        
            </div>

            <div class='form-group'>
            <label>Tipo de paciente</label>
            <div class="select-wrap"style="display:inline !important" >
                <select name="" id="" class="form-control"style="width: 23% !important;display:inline !important">
                  <option value="">--Seleccionar-- </option><option value="">Interno</option>
                  <option value="">Externo</option>
                </select>
              </div>
            </div>
           
     </div>
       <div>
       <label>Comentario</label>
       <input type='text' class='form-control' style='width: 30%; display: inline;' >
       <label style='display:inline !important; padding-left: 60px !important'>Diagnostico</label>
       <input type='text' class='form-control' style='width: 30%; display: inline;' >
</div>
      
        
       
    </div>
          <div class='form-group'>
    <label>Receta Medica</label>
     <textarea name="" id="" cols="30" rows="4" class="form-control" style="width: 50% "></textarea>
     <input class='btn ' type='submit' value='Registrar'>  <input class='btn ' type='submit' value='Imprimir'> 

    </div>
    
    <div>
       
    
</div>

<div>
   
</div>
    </form>`

    )
    

       
};

function mostrarPestana_2(){
    $("#pest-2").html(

        `<!--REGISTRO PACIENTE-->
      
          <form action="#" class=" ftco-animate " style="POSITION: absolute" >
            
            <div class="">
              
               <div class="form-group">
              <!--Codigo-->
              <label>Código </label>
              <input type="text" class="form-control" style="width: 30% !important;display:inline !important" >
              <!--Boton buscar-->
              <input type="submit" value="Buscar" class="btn " style="width: 12%!important; ">
              <!--Fecha-->
              <label style="padding-left: 5% !important; padding-right: 3%"> Fecha</label>
              <input type="date" class="form-control" style="width: 30% !important;display:inline !important;">
            </div>
              <div class="form-group">
                <!--Paciente-->
                <label>Paciente</label>
                <input type="text" class="form-control" style="width: 10% !important;display:inline !important" >
                <input type="text" class="form-control" style="width: 20% !important;display:inline !important" >
                <!--Boton buscar-->
              <input type="submit" value="Buscar" class="btn " style="width: 12%!important; ">
               <!--Motivo-->
                <label>Motivo</label>
                <input type="text" class="form-control" style="width: 30% !important;display:inline !important" >
                
              </div>
              <div class="form-group">
                <!--Doctor-->
                <label>Doctor/a</label>
                <input type="text" class="form-control" style="width: 12% !important;display:inline !important" >
                <input type="text" class="form-control" style="width: 25% !important;display:inline !important" >
                <!--Boton buscar-->
              <input type="submit" value="Buscar" class="btn " style="width: 12%!important; ">
                <!--Especialidad-->
                <label>Especialidad</label>
                <input type="text" class="form-control" style="width: 29% !important;display:inline !important" >
                
              </div>
              <div class="form-group">
                <!--Fecha Cita-->
                <label >Fecha Cita</label>
                <input type="date" class="form-control" style="width: 22% !important;display:inline !important" >
                <!--Hora Cita-->
                <label >Hora Cita</label>
                <input type="time" class="form-control" style="width: 10% !important;display:inline !important" >
                <div class="select-wrap"style="display:inline !important;" >
                  <select name="" id="" class="form-control"style="width: 10% !important;display:inline !important">
                    <option value="">---- </option><option value="">Am</option><option value="">Pm</option>
                  </select>
                </div>
                <!--Estado Cita-->
                <label>Estado Cita</label>
                <div class="select-wrap"style="display:inline !important;" >
                  <select name="" id="" class="form-control"style="width: 18% !important;display:inline !important">
                    <option value="">---- </option><option value="">Activa</option><option value="">Desactiva</option>
                    <option value="">Prospuesta</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <!--Referencia-->
                <label >Referencia</label>
                <input type="text" class="form-control" style="width: 22% !important;display:inline !important" >
               </div>
               <div class="form-group">
               <!--Comentario-->
               <label >Comentario </label>
               <textarea name="" id="" cols="30" rows="4" class="form-control" style="width: 50% "></textarea>
               </div>
                
                
                <div>
                <input type="submit" value="Registrar" class="btn " style="width: 12%!important; ">
                </div>
              </from>`

    )

 };
function mostrarPestana_3(){
    $("#pest-3").html(

       ` <!--REGISTRO PACIENTE-->
     
          <form action="#" class=" ftco-animate " style="POSITION: absolute" >
            
            <div class="">
              <div class="form-group">
                <!--Paciente-->
                <label> Paciente</label>
                <input type="text" class="form-control" style="width: 6% !important;display:inline !important" >
                <input type="text" class="form-control" style="width: 22% !important;display:inline !important" >
                <!--ID FACTURA-->
                <label  style="padding-left: 1%!important">ID Cita</label>
                <input type="text" class="form-control" style="width: 12% !important;display:inline !important;" >
                <!--Fecha-->
                <label>Fecha</label>
                <input type="date" class="form-control" style="width: 20% !important;display:inline !important;">
                <input type="submit" value="Buscar" class="btn" style="width: 15%!important; display: inline;text-align: center !important">
              </div><br>
  
  
              <div class="form-group bg-light p-3 " style="width: 99%">
                <!--Tabla-->
                <table class="table table-bordered " style="width: 100% !important; background-color:white; ">
                  <thead class="thead-dark" style="background-color: gray !important; ">
                    <tr>
                      <th scope="col" style="text-align:center!important; width:2%; padding:1%!important">ID Cita</th> 
                      <th scope="col" style="text-align:center!important; width:10%;padding:1%!important">Paciente</th>
                      <th scope="col" style="text-align:center!important; width:10%;padding:1%!important">Doctor/a</th>
                      <th scope="col" style="text-align:center!important; width:5%;padding:1%!important">Fecha</th>
                      <th scope="col" style="text-align:center!important; width:5%;padding:1%!important">Hora</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row"></td><td scope="row"></td><td scope="row"></td><td scope="row"></td>
                      <td scope="row"></td>
                    </tr>
                    <tr>
                      <td scope="row"></td><td scope="row"></td><td scope="row"></td><td scope="row"></td>
                      <td scope="row"></td>
                    </tr>
                    <tr>
                      <td scope="row"></td><td scope="row"></td><td scope="row"></td><td scope="row"></td>
                      <td scope="row"></td>
                    </tr>
                    <td scope="row"></td><td scope="row"></td><td scope="row"></td><td scope="row"></td>
                    <td scope="row"></td>
                  </tr>
                  <td scope="row"></td><td scope="row"></td><td scope="row"></td><td scope="row"></td>
                  <td scope="row"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <br>    
        </div>
      </form>`

    )
  };
    function mostrarPestana_4(){
        $("#pest-4").html(

          `  <!--REGISTRO PACIENTE-->
           
              <form action="#" class=" ftco-animate " style="POSITION: absolute" >
              
                <div class="">
                  
                  <div class="form-group">
                    <!--Codigo-->
                    <label>Código </label>
                    <input type="text" class="form-control" style="width: 17% !important;display:inline !important" >
                     <!--Boton buscar-->
                  <input type="submit" value="Buscar" class="btn " style="width: 12%!important; ">
                    <!--Numero-->
                    <label >Número </label>
                    <input type="text" class="form-control" style="width: 18% !important;display:inline !important;" >
                    
                    <!--Fecha-->
                    <label>Fecha</label>
                    <input type="date" class="form-control" style="width: 22% !important;display:inline !important;">
                  </div>
                  <div class="form-group">
                    <!--Codigo-->
                    <label>ID Consulta </label>
                    <input type="text" class="form-control" style="width: 17% !important;display:inline !important" >
                      <!--Boton buscar-->
                  <input type="submit" value="Buscar" class="btn " style="width: 12%!important; ">
                    <!--Paciente-->
                    <label>Paciente</label>
                    <input type="text" class="form-control" style="width: 12% !important;display:inline !important" >
                    <input type="text" class="form-control" style="width: 33% !important;display:inline !important" >
                  </div>
                  <div class="form-group">
                    <!--ARS-->
                    <label >ARS</label>
                    <div class="select-wrap"style="display:inline !important;" >
                      <select name="" id="" class="form-control"style="width: 24% !important;display:inline !important">
                        <option value="">--Seleccionar-- </option><option value="">Universal</option>
                        <option value="">SeNaSa</option><option value="">Palic Salud</option>
                        <option value="">Primera de Humano</option><option value="">Monumental</option><option value="">Humano</option>
                      </select>
                    </div>
                    <!--Comentario-->
                    <label >Comentario</label>
                    <input type="text" class="form-control" style="width: 28% !important;display:inline !important" >
                    <!--Monto Cobertura-->
                    <label >Monto</label>
                    <input type="text" class="form-control" style="width: 16% !important;display:inline !important" >
                     
                  </div>
                  
      
                     <div class="form-group ftco-animate" style="display: inline;"><label ><h5><b>Cobertura del seguro</b></h5></label></div>
                     <div class="form-group bg-light p-3 ftco-animate">
              <div class="form-group">
                <!--Núm. Póliza-->
              <label>Número de Póliza</label>
              <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
              <!--Núm. Reclamación-->
              <label >Número Reclamación</label>
              <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
              </div>
              <div class="form-group">
                <!--Monto Reclamación-->
              <label>Monto Reclamación</label>
              <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
              <!--Núm. Cobertura-->
              <label >Monto de Cobertura</label>
              <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
              </div>
            </div>
      
            <div class="form-group ftco-animate"><label style="display: inline;"><h5><b>Condiciones de Pago</b></h5></label></div>
                <div class="form-group bg-light p-3 ftco-animate">
              <div class="form-group">
                <!--Total a Facturar-->
              <label>Total a Facturar</label>
              <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
              </div>
              <div class="form-group">
                <!--Condición Pago-->
              <label>Condición Pago</label>
               <div class="select-wrap"style="display:inline !important" >
                      <select name="" id="" class="form-control"style="width: 25% !important;display:inline !important">
                        <option value="">--Seleccionar-- </option><option value="">Efectivo</option>
                        <option value="">Cheque</option><option value="">Tarjeta</option>
                      </select>
                    </div>
              <!--Núm Referencia-->
              <label>Núm Referencia</label>
              <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
              </div>
              <div class="form-group">
                <!--Total Recibido-->
              <label>Total Recibido</label>
              <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
              <!--Total Devuelto-->
              <label>Total Devuelto</label>
              <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
              </div>
            </div>
      
            </div>
          </form>
        </div>`
        

    )
};