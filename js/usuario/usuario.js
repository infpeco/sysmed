function buscarUsuarios(){
    fetch('PHP/usuario/usuario.php')
    .then(res => res.json())
    .then(res => {
        console.log(res);
    })
}


window.onload = function(){

    this.console.log("cargado...")
    buscarUsuarios();
}
