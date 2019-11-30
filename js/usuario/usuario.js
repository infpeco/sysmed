function buscarUsuarios(){
    var div = document.getElementById("div");
    fetch('php/usuario/usuario.php')
    .then(res => res.json())
    .then(res => {
        var h = "";
        res.forEach(m =>{
            div = h + ``

            
        })
        console.log(res);
    })
}


window.onload = function(){

    this.console.log("cargado...")
    buscarUsuarios();
}
