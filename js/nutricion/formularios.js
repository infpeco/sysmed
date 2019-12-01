
//    FORMULARIO DE DOCTORES
function abrirDoctores(){
    // document.getElementById(contenedor);
  
      $("#doctores").html(
        
  
          "<div class='form-group'>"+
            "<div><h1>Registre Doctores</h1></div>"+
                      "<!--Codigo-->"+
                      "<label><h4>Codigo </h4></label>"+
                      "<input type='text' class='form-control' style='width: 20% !important; display:inline ' >"+
                      "<!--Boton buscar-->"+
                    "<input type='submit' value='Buscar' class='btn' >"+
                    "<!--Fecha Entrada-->"+
                    "<label style='padding-left: 5% !important'></label><h4 style='display:inline !important'>Fecha Entrada</h4></label>"+
                    "<input type='date' class='form-control' style='width: 20% !important; display:inline'>"+
        
                    "</div>"+
  
                    "<div class='form-group'>"+
                        "<!--Nombre-->"+
                        "<label ><h4 style='display:inline !important'>Nombre </h4></label>"+
                        "<input type='text' class='form-control' style='width: 40% !important; display:inline'  >"+
                        "<!--Fecha Nacimiento-->"+
                        "<label ><h4 style='display:inline !important; padding-left: 30px !important'>Fecha Nacimiento</h4></label>"+
                        "<input type='date' class='form-control' style='width: 20% !important; display:inline'>"+
          
                      "</div>"+
  
                      "<div class='form-group'>"+
                          "<!--Direcion-->"+
                          "<label><h4>Dirección </h4></label>"+
                          "<input type='text' class='form-control' style='width: 40% !important; display:inline' >"+
                          "<!--Identificacion-->"+
                          "<label ><h4 style='display:inline !important; padding-left: 30px !important'>Identificación </h4></label>"+
                          "<input type='text' class='form-control' style='width: 26% !important; display:inline' >"+
            
                        "</div>"+
            
                        "<div class='form-group'>"+
                          "<!--Sexo-->"+
                          "<label><h4 style='display:inline !important'>Sexo </h4></label>"+
                          "<div class='select-wrap'style='display:inline !important' >"+
                            "<select name=' id=' class='form-control'style='width: 15% !important; display:inline'>"+
                              "<option value='>--Seleccionar-- </option><option value='>Femenino</option><option value='>Masculino</option>"+
                            "</select>"+
                          "</div>"+
                          "<!--No. seguro social-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>No. Seguro Social</h4></label>"+
                          "<input type='text' class='form-control' style='width: 20% !important; display:inline' >"+
                          "<!--Tipo sangre-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>Tipo Sangre </h4></label>"+
                          "<div class='select-wrap'style='display:inline !important' >"+
                            "<select name=' id=' class='form-control'style='width: 15% !important; display:inline'>"+
                             "<option value='>--Seleccionar-- </option><option value='>A+</option><option value='>A-</option>"+
                             "<option value='>B+</option><option value='>B-</option><option value='>AB+</option>"+
                             "<option value='>AB-</option><option value='>O+</option><option value='>O-</option>"+
                           "</select>"+
                         "</div>"+
                         "<div class='form-group'>"+
                            "<!--Origen-->"+
                            "<label><h4 style='display:inline !important'>Origen</h4></label>"+
                            "<input type='text' class='form-control' style='width: 30% !important; display:inline' >"+
                            "<!--Familiar/Tutor-->"+
                            "<label><h4 style='display:inline !important; padding-left: 30px !important'>Familiar/Tutor</h4></label>"+
                            "<input type='text' class='form-control' style='width: 40% !important; display:inline' >"+
                
                          "</div>"+
            
                       "</div>"+
  
                       "<div class='form-group'>"+
                          "<!--Nivel Triage-->"+
                          "<label><h4 style='display:inline !important'>Nivel Triage</h4></label>"+
                          "<input type='text' class='form-control' style='width: 18% !important; display:inline' >"+
                          "<!--Telefono-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>Teléfono</h4></label>"+
                          "<input type='text' class='form-control' style='width: 20% !important; display:inline' >"+
                          "<!--celular-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>Celular</h4></label>"+
                          "<input type='text' class='form-control' style='width: 20% !important; display:inline' >"+
              
                        "</div>"
  
      );
  };

//    FORMULARIO DE PACIENTES
  function abrirPacientes(){
    // document.getElementById(contenedor);
  
      $("#pacientes").html(
        
  
          "<div class='form-group'>"+
          "<div><h1>Registre pacientes</h1></div>"+
                      "<!--Codigo-->"+
                      "<label><h4>Codigo </h4></label>"+
                      "<input type='text' class='form-control' style='width: 20% !important; display:inline ' >"+
                      "<!--Boton buscar-->"+
                    "<input type='submit' value='Buscar' class='btn' >"+
                    "<!--Fecha Entrada-->"+
                    "<label style='padding-left: 5% !important'></label><h4 style='display:inline !important'>Fecha Entrada</h4></label>"+
                    "<input type='date' class='form-control' style='width: 20% !important; display:inline'>"+
        
                    "</div>"+
  
                    "<div class='form-group'>"+
                        "<!--Nombre-->"+
                        "<label ><h4 style='display:inline !important'>Nombre </h4></label>"+
                        "<input type='text' class='form-control' style='width: 40% !important; display:inline'  >"+
                        "<!--Fecha Nacimiento-->"+
                        "<label ><h4 style='display:inline !important; padding-left: 30px !important'>Fecha Nacimiento</h4></label>"+
                        "<input type='date' class='form-control' style='width: 20% !important; display:inline'>"+
          
                      "</div>"+
  
                      "<div class='form-group'>"+
                          "<!--Direcion-->"+
                          "<label><h4>Dirección </h4></label>"+
                          "<input type='text' class='form-control' style='width: 40% !important; display:inline' >"+
                          "<!--Identificacion-->"+
                          "<label ><h4 style='display:inline !important; padding-left: 30px !important'>Identificación </h4></label>"+
                          "<input type='text' class='form-control' style='width: 26% !important; display:inline' >"+
            
                        "</div>"+
            
                        "<div class='form-group'>"+
                          "<!--Sexo-->"+
                          "<label><h4 style='display:inline !important'>Sexo </h4></label>"+
                          "<div class='select-wrap'style='display:inline !important' >"+
                            "<select name=' id=' class='form-control'style='width: 15% !important; display:inline'>"+
                              "<option value='>--Seleccionar-- </option><option value='>Femenino</option><option value='>Masculino</option>"+
                            "</select>"+
                          "</div>"+
                          "<!--No. seguro social-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>No. Seguro Social</h4></label>"+
                          "<input type='text' class='form-control' style='width: 20% !important; display:inline' >"+
                          "<!--Tipo sangre-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>Tipo Sangre </h4></label>"+
                          "<div class='select-wrap'style='display:inline !important' >"+
                            "<select name=' id=' class='form-control'style='width: 15% !important; display:inline'>"+
                             "<option value='>--Seleccionar-- </option><option value='>A+</option><option value='>A-</option>"+
                             "<option value='>B+</option><option value='>B-</option><option value='>AB+</option>"+
                             "<option value='>AB-</option><option value='>O+</option><option value='>O-</option>"+
                           "</select>"+
                         "</div>"+
                         "<div class='form-group'>"+
                            "<!--Origen-->"+
                            "<label><h4 style='display:inline !important'>Origen</h4></label>"+
                            "<input type='text' class='form-control' style='width: 30% !important; display:inline' >"+
                            "<!--Familiar/Tutor-->"+
                            "<label><h4 style='display:inline !important; padding-left: 30px !important'>Familiar/Tutor</h4></label>"+
                            "<input type='text' class='form-control' style='width: 40% !important; display:inline' >"+
                
                          "</div>"+
            
                       "</div>"+
  
                       "<div class='form-group'>"+
                          "<!--Nivel Triage-->"+
                          "<label><h4 style='display:inline !important'>Nivel Triage</h4></label>"+
                          "<input type='text' class='form-control' style='width: 18% !important; display:inline' >"+
                          "<!--Telefono-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>Teléfono</h4></label>"+
                          "<input type='text' class='form-control' style='width: 20% !important; display:inline' >"+
                          "<!--celular-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>Celular</h4></label>"+
                          "<input type='text' class='form-control' style='width: 20% !important; display:inline' >"+
              
                        "</div>"
  
      );
  };

//    FORMULARIO DE EMPLEADOS
  function abrirEmpleados(){
    // document.getElementById(contenedor);
  
      $("#empleados").html(
        
  
          "<div class='form-group'>"+
          "<div><h1>Registre Empleados</h1></div>"+
                      "<!--Codigo-->"+
                      "<label><h4>Codigo </h4></label>"+
                      "<input type='text' class='form-control' style='width: 20% !important; display:inline ' >"+
                      "<!--Boton buscar-->"+
                    "<input type='submit' value='Buscar' class='btn' >"+
                    "<!--Fecha Entrada-->"+
                    "<label style='padding-left: 5% !important'></label><h4 style='display:inline !important'>Fecha Entrada</h4></label>"+
                    "<input type='date' class='form-control' style='width: 20% !important; display:inline'>"+
        
                    "</div>"+
  
                    "<div class='form-group'>"+
                        "<!--Nombre-->"+
                        "<label ><h4 style='display:inline !important'>Nombre </h4></label>"+
                        "<input type='text' class='form-control' style='width: 40% !important; display:inline'  >"+
                        "<!--Fecha Nacimiento-->"+
                        "<label ><h4 style='display:inline !important; padding-left: 30px !important'>Fecha Nacimiento</h4></label>"+
                        "<input type='date' class='form-control' style='width: 20% !important; display:inline'>"+
          
                      "</div>"+
  
                      "<div class='form-group'>"+
                          "<!--Direcion-->"+
                          "<label><h4>Dirección </h4></label>"+
                          "<input type='text' class='form-control' style='width: 40% !important; display:inline' >"+
                          "<!--Identificacion-->"+
                          "<label ><h4 style='display:inline !important; padding-left: 30px !important'>Identificación </h4></label>"+
                          "<input type='text' class='form-control' style='width: 26% !important; display:inline' >"+
            
                        "</div>"+
            
                        "<div class='form-group'>"+
                          "<!--Sexo-->"+
                          "<label><h4 style='display:inline !important'>Sexo </h4></label>"+
                          "<div class='select-wrap'style='display:inline !important' >"+
                            "<select name=' id=' class='form-control'style='width: 15% !important; display:inline'>"+
                              "<option value='>--Seleccionar-- </option><option value='>Femenino</option><option value='>Masculino</option>"+
                            "</select>"+
                          "</div>"+
                          "<!--No. seguro social-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>No. Seguro Social</h4></label>"+
                          "<input type='text' class='form-control' style='width: 20% !important; display:inline' >"+
                          "<!--Tipo sangre-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>Tipo Sangre </h4></label>"+
                          "<div class='select-wrap'style='display:inline !important' >"+
                            "<select name=' id=' class='form-control'style='width: 15% !important; display:inline'>"+
                             "<option value='>--Seleccionar-- </option><option value='>A+</option><option value='>A-</option>"+
                             "<option value='>B+</option><option value='>B-</option><option value='>AB+</option>"+
                             "<option value='>AB-</option><option value='>O+</option><option value='>O-</option>"+
                           "</select>"+
                         "</div>"+
                         "<div class='form-group'>"+
                            "<!--Origen-->"+
                            "<label><h4 style='display:inline !important'>Origen</h4></label>"+
                            "<input type='text' class='form-control' style='width: 30% !important; display:inline' >"+
                            "<!--Familiar/Tutor-->"+
                            "<label><h4 style='display:inline !important; padding-left: 30px !important'>Familiar/Tutor</h4></label>"+
                            "<input type='text' class='form-control' style='width: 40% !important; display:inline' >"+
                
                          "</div>"+
            
                       "</div>"+
  
                       "<div class='form-group'>"+
                          "<!--Nivel Triage-->"+
                          "<label><h4 style='display:inline !important'>Nivel Triage</h4></label>"+
                          "<input type='text' class='form-control' style='width: 18% !important; display:inline' >"+
                          "<!--Telefono-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>Teléfono</h4></label>"+
                          "<input type='text' class='form-control' style='width: 20% !important; display:inline' >"+
                          "<!--celular-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>Celular</h4></label>"+
                          "<input type='text' class='form-control' style='width: 20% !important; display:inline' >"+
              
                        "</div>"
  
      );
  };


  //    FORMULARIO DE ENFEREMERAS
  function abrirEnfermeras(){
    // document.getElementById(contenedor);
  
      $("#enfermeras").html(
        
  
          "<div class='form-group'>"+
          "<div><h1>Registre Enfermeras</h1></div>"+
                      "<!--Codigo-->"+
                      "<label><h4>Codigo </h4></label>"+
                      "<input type='text' class='form-control' style='width: 20% !important; display:inline ' >"+
                      "<!--Boton buscar-->"+
                    "<input type='submit' value='Buscar' class='btn' >"+
                    "<!--Fecha Entrada-->"+
                    "<label style='padding-left: 5% !important'></label><h4 style='display:inline !important'>Fecha Entrada</h4></label>"+
                    "<input type='date' class='form-control' style='width: 20% !important; display:inline'>"+
        
                    "</div>"+
  
                    "<div class='form-group'>"+
                        "<!--Nombre-->"+
                        "<label ><h4 style='display:inline !important'>Nombre </h4></label>"+
                        "<input type='text' class='form-control' style='width: 40% !important; display:inline'  >"+
                        "<!--Fecha Nacimiento-->"+
                        "<label ><h4 style='display:inline !important; padding-left: 30px !important'>Fecha Nacimiento</h4></label>"+
                        "<input type='date' class='form-control' style='width: 20% !important; display:inline'>"+
          
                      "</div>"+
  
                      "<div class='form-group'>"+
                          "<!--Direcion-->"+
                          "<label><h4>Dirección </h4></label>"+
                          "<input type='text' class='form-control' style='width: 40% !important; display:inline' >"+
                          "<!--Identificacion-->"+
                          "<label ><h4 style='display:inline !important; padding-left: 30px !important'>Identificación </h4></label>"+
                          "<input type='text' class='form-control' style='width: 26% !important; display:inline' >"+
            
                        "</div>"+
            
                        "<div class='form-group'>"+
                          "<!--Sexo-->"+
                          "<label><h4 style='display:inline !important'>Sexo </h4></label>"+
                          "<div class='select-wrap'style='display:inline !important' >"+
                            "<select name=' id=' class='form-control'style='width: 15% !important; display:inline'>"+
                              "<option value='>--Seleccionar-- </option><option value='>Femenino</option><option value='>Masculino</option>"+
                            "</select>"+
                          "</div>"+
                          "<!--No. seguro social-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>No. Seguro Social</h4></label>"+
                          "<input type='text' class='form-control' style='width: 20% !important; display:inline' >"+
                          "<!--Tipo sangre-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>Tipo Sangre </h4></label>"+
                          "<div class='select-wrap'style='display:inline !important' >"+
                            "<select name=' id=' class='form-control'style='width: 15% !important; display:inline'>"+
                             "<option value='>--Seleccionar-- </option><option value='>A+</option><option value='>A-</option>"+
                             "<option value='>B+</option><option value='>B-</option><option value='>AB+</option>"+
                             "<option value='>AB-</option><option value='>O+</option><option value='>O-</option>"+
                           "</select>"+
                         "</div>"+
                         "<div class='form-group'>"+
                            "<!--Origen-->"+
                            "<label><h4 style='display:inline !important'>Origen</h4></label>"+
                            "<input type='text' class='form-control' style='width: 30% !important; display:inline' >"+
                            "<!--Familiar/Tutor-->"+
                            "<label><h4 style='display:inline !important; padding-left: 30px !important'>Familiar/Tutor</h4></label>"+
                            "<input type='text' class='form-control' style='width: 40% !important; display:inline' >"+
                
                          "</div>"+
            
                       "</div>"+
  
                       "<div class='form-group'>"+
                          "<!--Nivel Triage-->"+
                          "<label><h4 style='display:inline !important'>Nivel Triage</h4></label>"+
                          "<input type='text' class='form-control' style='width: 18% !important; display:inline' >"+
                          "<!--Telefono-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>Teléfono</h4></label>"+
                          "<input type='text' class='form-control' style='width: 20% !important; display:inline' >"+
                          "<!--celular-->"+
                          "<label><h4 style='display:inline !important; padding-left: 30px !important'>Celular</h4></label>"+
                          "<input type='text' class='form-control' style='width: 20% !important; display:inline' >"+
              
                        "</div>"
  
      );
  };