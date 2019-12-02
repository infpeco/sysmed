window.onload = function () {    
  //DATOS DEL MENU
       $("#divmenu").html(
        "<br><ul>"+"<!--MENU PERSONAL-->"+
        "<li class='label' style='font-size: 20px;'><b>Personal</b>"+ 
        "<li><a href='/index.html'><img src='../../images/personal/doctor.png' width='28px'><span style='padding-left: 5%'></span>Doctores</a></li>"+
        "<!--SUBMENU PERSONAL: ENFERMEROS-->"+
        "<li><a href='/index.html'><img src='../../images/personal/enfermera.png' width='28px'><span style='padding-left: 5%'></span>Enfermeros</a></li>"+
        "<!--SUBMENU PERSONAL: EMPLEADOS-->"+
        "<li><a href='/index.html'><img src='../../images/personal/empleado.png' width='28px'><span style='padding-left: 5%'></span>Empleados</a></li>"+
        "<!--SUBMENU PERSONAL: PACIENTES-->"+
        "<li><a href='/index.html'><img src='../../images/personal/paciente.png' width='28px'><span style='padding-left: 5%'></span>Pacientes</a></li>"+
        "<!--SUBMENU PERSONAL: REGISTROS-->"+
        "<li><a href='../../html/registro/registro.html' ><i><img src='../../images/plantilla/plantilla.png' width='28px'></i><span style='padding-left: 5%'></span>Registros</a></li>"+
        "</li>"+
        "<!--MENU DEPARTAMENTO-->"+
        "<li class='label' style='font-size: 20px;' ><b>Departamentos</b></li>"+
        "<!--SUBMENU DEPARTAMENTO: CONSULTORIO-->"+
        "<li><a href='../../html/consultorio/consultorio.html' ><i><img src='../../images/consultorio/consultorio.png' width='28px'></i><span style='padding-left: 5%'></span>Consultorio</a></li>"+
        "<!--SUBMENU DEPARTAMENTO: Emergencia-->"+
        "<li><a href='../../html/emergencia/emergencia.html' ><i><img src='../../images/emergencia/emergencia.png' width='28px'></i><span style='padding-left: 5%'></span>Emergencia</a></li>"+
        "<!--SUBMENU DEPARTAMENTO: Laboratorio-->"+
        "<li><a href='../../html/laboratorio/laboratorio.html'><i><img src='../../images/laboratorio/laboratorio.png' width='28px'></i><span style='padding-left: 5%'></span>Laboratorio</a></li>  "+            
        "<!--SUBMENU DEPARTAMENTO: Nutrición-->"+
        "<li><a href='../../html/nutricion/nutricion.html' ><i><img src='../../images/nutricion/nutricion.png' width='28px'></i><span style='padding-left: 5%'></span>Nutrición</a></li>");
  //DATOS DE LA CABECERA izquierdA
$("#divheaderizquierda").html( "<span class='line'></span>"+"<span class='line'></span>"+"<span class='line'></span>");
  //DATOS DE LA CABECERA titulo
$("#divheadertitulo").html( "<b style='font-size: 35px; color: black; font-family:Verdana'>SISTEMA MÉDICO</b>");
  //DATOS DE LA CABECERA salir
$("#divheadersalir").html( "<ul>"+
                "<li class='header-icon dib'><a href=''><img src='../../images/index/salir.png' width='40px'></a></li>"+
                "</ul>");

 
}