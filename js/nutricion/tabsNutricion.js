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
  
    
    if(containerID === "Registro"){
        abrirNutricionR();
    }else if(containerID === "Asignacion"){
        abrirNutricion();
    }else if(containerID === "Distribucion"){
        abrirNutricionD();
    }
  
}
    
 