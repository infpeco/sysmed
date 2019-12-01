//FORMULARIO 1
// editado por ros 
function mostrarPestana_1(){
    $("#pest-1").html(

        "<form action='#' class='ftco-animate' style='POSITION: absolute'>"+
        "<h3 style='text-transform: uppercase'><b>REGISTRO DE CONSULTA</b></h3>"+

        "<div class='form-group'>"+
            "<label>Codigo</label>"+
            "<input type='text' class='form-control' style='width: 30%; display: inline;'>"+
            "<input type='button' value='Buscar' class='btn btn-secondary'>"+
            "<label style='display:inline !important; padding-left: 60px !important'>Referencia</label>"+
            "<input type='text' class='form-control' style='width: 30%; display: inline;' >"+
       " </div>"+


        "<div class='form-group'>"+
            "<label>Nombre</label>"+
            "<input type='text' class='form-control' style='width: 30%; display: inline;'>"+
            "<label style='display:inline !important; padding-left: 60px !important'>Apellido</label>"+
            "<input type='text' class='form-control' style='width: 30%; display: inline;' >"+
        "</div>"+
       
        "<div class='form-group'>"+
            "<label>telefono</label>"+
            "<input type='text' class='form-control' style='width: 20%; display: inline;'>"+
            "<label style='display:inline !important; padding-left: 60px !important'>fecha</label>"+
            "<input type='date' class='form-control' style='width: 30%; display: inline;' >"+
        "</div>"+

        "<div class='form-group'>"+
                "<label>Dortor/a</label>"+
                "<input type='text' class='form-control' style='width: 30%; display: inline;'>"+
                "<label style='display:inline !important; padding-left: 60px !important'>Especialidad</label>"+
                "<input type='text' class='form-control' style='width: 30%; display: inline;' >"+
            "</div>"+
            "<div>"+
        
            "</div>"+

            "<div class='form-group'>"+
            "<label>Tipo de paciente</label>"+
            "<input type='select'  class='form-control'  style='width: 30%; display: inline;'>"+
            "<label style='display:inline !important; padding-left: 60px !important'>Comentario</label>"+
            "<input type='text' class='form-control' style='width: 30%; display: inline;' >"+
        "</div>"+
        "<div>"+
            
        "</div>"+
        "<div class='form-group'>"+
        "<label>Motivo</label>"+
        "<input type='text' class='form-control' style='width: 30%; display: inline;'>"+
        "<label style='display:inline !important; padding-left: 60px !important'>Diagnostico</label>"+
        "<input type='text' class='form-control' style='width: 30%; display: inline;' >"+
    "</div>"+
           //    "<input class='btn btn-primary' type='submit' value='Enviar'>"+
    

    "<div class='form-group'>"+
    "<label>Receta Medica</label>"+
    "<input type='text' class='form-control' style='width: 30%; display: inline;'>"+
    "</div>"+
    
    "<div>"+
        "<input class='btn btn-primary' type='submit' value='Enviar'> '<input class='btn btn-primary' type='submit' value='Atras'>"+
"</div>"+

"<div>"+
   
"</div>"+
    "</form>"

    )
};

function mostrarPestana_2(){
    $("#pest-2").html(

        `<form action="#" class=" ftco-animate " style="POSITION: absolute" >
          <h2 style="text-transform: uppercase"><b>Registro de Cita</b></h2><br>
          <div class="">
            
             <div class="form-group">
            <!--Codigo-->
            <label><h5>Código </h5></label>
            <input type="text" class="form-control" style="width: 20% !important;display:inline !important" >
            <!--Boton buscar-->
            <input type="submit" value="Buscar" class="btn btn-secondary; ">
            <!--Fecha-->
            <label style="padding-left: 25% !important; padding-right: 3%"><h5 style="display:inline !important">Fecha</h5></label>
            <input type="date" class="form-control" style="width: 23% !important;display:inline !important;">
          </div>
            <div class="form-group">
              <!--Paciente-->
              <label><h5 style="display:inline !important">Paciente</h5></label>
              <input type="text" class="form-control" style="width: 12% !important;display:inline !important" >
              <input type="text" class="form-control" style="width: 25% !important;display:inline !important" >
              <!--Boton buscar-->
            <input type="submit" value="Buscar" class="btn btn-secondary; ">
                          <!--Motivo-->
              <label><h5 style="display:inline !important;padding-left: 19px !important">Motivo</h5></label>
              <input type="text" class="form-control" style="width: 30% !important;display:inline !important" >
              
            </div>
            <div class="form-group">
              <!--Doctor-->
              <label><h5 style="display:inline !important">Doctor/a</h5></label>
              <input type="text" class="form-control" style="width: 12% !important;display:inline !important" >
              <input type="text" class="form-control" style="width: 25% !important;display:inline !important" >
              <!--Boton buscar-->
            <input type="submit" value="Buscar" class="btn">
              <!--Especialidad-->
              <label><h5 style="display:inline !important;padding-left: 19px !important">Especialidad</h5></label>
              <input type="text" class="form-control" style="width: 24% !important;display:inline !important" >
              
            </div>
            <div class="form-group">
              <!--Fecha Cita-->
              <label ><h5>Fecha Cita</h5></label>
              <input type="date" class="form-control" style="width: 22% !important;display:inline !important" >
              <!--Hora Cita-->
              <label style="padding-left: 22px !important" ><h5>Hora Cita</h5></label>
              <input type="time" class="form-control" style="width: 10% !important;display:inline !important" >
              <div class="select-wrap"style="display:inline !important;" >
                <select name="" id="" class="form-control"style="width: 10% !important;display:inline !important">
                  <option value="">---- </option><option value="">Am</option><option value="">Pm</option>
                </select>
              </div>
              <!--Estado Cita-->
              <label style="padding-left: 22px !important" ><h5>Estado Cita</h5></label>
              <div class="select-wrap"style="display:inline !important;" >
                <select name="" id="" class="form-control"style="width: 18% !important;display:inline !important">
                  <option value="">---- </option><option value="">Activa</option><option value="">Desactiva</option>
                  <option value="">Prospuesta</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <!--Referencia-->
              <label ><h5>Referencia</h5></label>
              <input type="text" class="form-control" style="width: 22% !important;display:inline !important" >
              <!--Comentario-->
              <label style="padding-left: 19px !important"><h5>Comentario </h5></label>
              <input type="textarea" class="form-control" style="width: 51% !important;display:inline !important" >
            </div>

      </div>
    </form>`




    )
};

function mostrarPestana_3(){
    $("#pest-3").html(

        `<form action="#" class=" ftco-animate " style="POSITION: absolute" >
        <h2 style="text-transform: uppercase"><b>Facturación de Consulta</b></h2><br>
        <div class="">
          
          <div class="form-group">
            <!--Codigo-->
            <label><h5>Código </h5></label>
            <input type="text" class="form-control" style="width: 17% !important;display:inline !important" >
             <!--Boton buscar-->
          <input type="submit" value="Buscar" class="btn">
            <!--Numero-->
            <label style="padding-left: 22px!important"><h5>Número </h5></label>
            <input type="text" class="form-control" style="width: 18% !important;display:inline !important;" >
            
            <!--Fecha-->
            <label style="padding-left: 3% !important"><h5 style="display:inline !important">Fecha</h5></label>
            <input type="date" class="form-control" style="width: 22% !important;display:inline !important;">
          </div>
          <div class="form-group">
            <!--Codigo-->
            <label><h5>ID Consulta </h5></label>
            <input type="text" class="form-control" style="width: 17% !important;display:inline !important" >
              <!--Boton buscar-->
          <input type="submit" value="Buscar" class="btn">
            <!--Paciente-->
            <label style="padding-left: 19px !important"><h5 style="display:inline !important">Paciente</h5></label>
            <input type="text" class="form-control" style="width: 12% !important;display:inline !important" >
            <input type="text" class="form-control" style="width: 33% !important;display:inline !important" >
          </div>
          <div class="form-group">
            <!--ARS-->
            <label ><h5 style="display:inline !important;">ARS</h5></label>
            <div class="select-wrap"style="display:inline !important;" >
              <select name="" id="" class="form-control"style="width: 24% !important;display:inline !important">
                <option value="">--Seleccionar-- </option><option value="">Universal</option>
                <option value="">SeNaSa</option><option value="">Palic Salud</option>
                <option value="">Primera de Humano</option><option value="">Monumental</option><option value="">Humano</option>
              </select>
            </div>
            <!--Comentario-->
            <label style="padding-left: 31px"><h5>Comentario</h5></label>
            <input type="text" class="form-control" style="width: 28% !important;display:inline !important" >
            <!--Monto Cobertura-->
            <label style="padding-left: 31px"><h5>Monto</h5></label>
            <input type="text" class="form-control" style="width: 16% !important;display:inline !important" >
             
          </div>
          

             <div class="form-group ftco-animate" style="display: inline;"><label ><h3><b>Cobertura del seguro</b></h3></label></div>
             <div class="form-group bg-light p-3 ftco-animate">
      <div class="form-group">
        <!--Núm. Póliza-->
      <label><h5 style="display:inline !important; padding-right: 28px">Número de Póliza</h5></label>
      <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
      <!--Núm. Reclamación-->
      <label style="padding-left: 20px!important"><h5 style="display:inline !important">Número Reclamación</h5></label>
      <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
      </div>
      <div class="form-group">
        <!--Monto Reclamación-->
      <label><h5 style="display:inline !important">Monto Reclamación</h5></label>
      <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
      <!--Núm. Cobertura-->
      <label style="padding-left: 20px!important; padding-right: 15px"><h5 style="display:inline !important">Monto de Cobertura</h5></label>
      <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
      </div>
    </div>

    <div class="form-group ftco-animate"><label style="display: inline;"><h3><b>Condiciones de Pago</b></h3></label></div>
        <div class="form-group bg-light p-3 ftco-animate">
      <div class="form-group">
        <!--Total a Facturar-->
      <label><h5 style="display:inline !important; ">Total a Facturar</h5></label>
      <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
      </div>
      <div class="form-group">
        <!--Condición Pago-->
      <label><h5 style="display:inline !important;">Condición Pago</h5></label>
       <div class="select-wrap"style="display:inline !important" >
              <select name="" id="" class="form-control"style="width: 25% !important;display:inline !important">
                <option value="">--Seleccionar-- </option><option value="">Efectivo</option>
                <option value="">Cheque</option><option value="">Tarjeta</option>
              </select>
            </div>
      <!--Núm Referencia-->
      <label style="padding-left: 20px!important"><h5 style="display:inline !important">Núm Referencia</h5></label>
      <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
      </div>
      <div class="form-group">
        <!--Total Recibido-->
      <label><h5 style="display:inline !important;padding-right: 20px">Total Recibido</h5></label>
      <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
      <!--Total Devuelto-->
      <label style="padding-left: 20px!important; padding-right: 15px"><h5 style="display:inline !important">Total Devuelto</h5></label>
      <input type="text" class="form-control" style="width: 25% !important; display: inline !important" >
      </div>
    </div>

    </div>
  </form>`

    )

};