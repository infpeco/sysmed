
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
  // document.getElementById("abrir").click();
  console.log(containerID);

  if (containerID === "pest-1"){
    mostrarPestana_1();
    consultaMedica();
   
  }else if(containerID === "pest-2"){
    mostrarPestana_2();
    registrarCita();
  }else if(containerID === "pest-3"){
    mostrarPestana_3();
    cargarDatos();
   
 }else if(containerID === "pest-4"){
    mostrarPestana_4();
    facturacion();
  }




  
  
  
};
