
// Horizontal tabs


function openTab(evt, containerID) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(containerID).style.display = "block";
  evt.currentTarget.className += " active";
    // Get the element with id="defaultOpen" and click on it
  // document.getElementById("defaultOpen").click();
  console.log(containerID);
  
  if(containerID === "Admision"){
    AbrirAdmision();
    RegistrarDatos();
    
  }else if(containerID === "Evaluacion"){
    AbrirEvaluacion();
    RegistrarDatosE();

  }else if(containerID === "Referencias"){
    AbrirReferencias();
    RegistrarDatosR();

  }else if(containerID === "Registro"){
    MostrarTabla();
    MostrarT();
  }
}
