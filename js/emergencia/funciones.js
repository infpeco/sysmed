function MostrarA() {

    if (document.getElementById("cod").value == null || document.getElementById("cod").value == "") {
        alert("valor inválido, Intetentelo de nuevo");
        return;
    }
    else {

        $.ajax({
            type: "POST",
            url: "../../php/emergencia/mostrarA.php",
            data: 'Codigo=' + $("#cod").val(),
            dataType: "JSON",
            error: function () {
                alert("Error al hacer la busqueda");
            },
            success: function (data) {
                if (data[0] == null) {
                    alert("Registro no encontrado, Intentelo de nuevo o Cree uno nuevo");
                    return false;
                }
                else {
                    $("#nombre").val(data[0]["Nombre"]);
                    $("#apellido").val(data[0]["Apellido"]);
                    $("#motivo").val(data[0]["Alergia/Afeccion"]);
                    console.log(data[0]);
                }

                $("#Contenedor").show();
                document.getElementById("guardar").style.display = "block";

                var input = $("#Contenedor input").toArray();
                for (i in input) {
                    input[i].disabled = true;
                }
                input[0].disabled = false;
                input = $("#Contenedor select").toArray();
                for (i in input) {
                    input[i].disabled = true;
                }
            }
            
        });
    }
}

function MostrarE() {

    if (document.getElementById("codigo").value == null || document.getElementById("codigo").value == "") {
        alert("valor inválido, Intetentelo de nuevo");
        return;
    }
    else {

        $.ajax({
            type: "POST",
            url: "../../php/emergencia/mostrarE.php",
            data: 'Codigo=' + $("#codigo").val(),
            dataType: "JSON",
            error: function () {
                alert("Error al hacer la busqueda");
            },
            success: function (data) {

                if (data[0] == null) {
                    alert("Registro no encontrado, Intentelo de nuevo o Cree uno nuevo");
                    return false;
                }
                else {
                    $("#nombreE").val(data[0]["nombre"]);
                    $("#apellidoE").val(data[0]["apellido"]);
                    $("#alergiaE").val(data[0]["alergia"]);
                    $("#motivoE").val(data[0]["motivo"]);
                    $("#fecha").val(data[0]["fechaEntrada"]);

                }

                $("#ContenedorE").show();
                document.getElementById("guar").style.display = "block";

                var input = $("#ContenedorE input").toArray();
                for (i in input) {
                    input[i].disabled = true;
                }
                input[0].disabled = false;
                input = $("#ContenedorE select").toArray();
                for (i in input) {
                    input[i].disabled = true;
                }
            }
        });
    }
}

function MostrarR() {

    if (document.getElementById("codi").value == null || document.getElementById("codi").value == "") {
        alert("valor inválido, Intetentelo de nuevo");
        return;
    }
    else {

        $.ajax({
            type: "POST",
            url: "../../php/emergencia/mostrarR.php",
            data: 'Codigo=' + $("#codi").val(),
            dataType: "JSON",
            error: function () {
                alert("Error al hacer la busqueda");
            },
            success: function (data) {

                if (data[0] == null) {
                    alert("Registro no encontrado, Intentelo de nuevo o Cree uno nuevo");
                    return false;
                }
                else {
                    $("#nombreR").val(data[0]["nombreE"]);
                    $("#apellidoR").val(data[0]["apellidoE"]);
                    $("#alergiaR").val(data[0]["alergiaE"]);
                    $("#fechaR").val(data[0]["fecha"]);

                    console.log(data[0]);
                }

                $("#ContenedorR").show();
                document.getElementById("guard").style.display = "block";

                var input = $("#ContenedorR input").toArray();
                for (i in input) {
                    input[i].disabled = true;
                }
                input[0].disabled = false;
                input = $("#ContenedorR select").toArray();
                for (i in input) {
                    input[i].disabled = true;
                }
            }
        });
    }

}

function BotonA(Consulta = "d") {
    if (Consulta == "Nuevo") {
        document.getElementById("guardar").style.display = "none";

    } else {
        document.getElementById("guardar").style.display = "block";
    }
}

function BotonE(Consulta = "d") {
    if (Consulta == "Nuevo") {
        document.getElementById("guar").style.display = "none";
        return;

    } else {
        document.getElementById("guar").style.display = "block";
    }
}

function BotonR(Consulta = "d") {
    if (Consulta == "Nuevo") {
        document.getElementById("guard").style.display = "none";
        return;

    } else {
        document.getElementById("guard").style.display = "block";
    }
}

function EditarA() {
    var input = $("#Contenedor input").toArray();
    for(i in input)
    {
      input[i].disabled= false;
    }
    input = $("#Contenedor select").toArray();
    for(i in input)
    {
      input[i].disabled= false;
    }
}

function EditarE() {
    var input = $("#ContenedorE input").toArray();
    for(i in input)
    {
      input[i].disabled= false;
    }
    input = $("#ContenedorE select").toArray();
    for(i in input)
    {
      input[i].disabled= false;
    }
}

function EditarR() {
    var input = $("#ContenedorR input").toArray();
    for(i in input)
    {
      input[i].disabled= false;
    }
    input = $("#ContenedorR select").toArray();
    for(i in input)
    {
      input[i].disabled= false;
    }
}

