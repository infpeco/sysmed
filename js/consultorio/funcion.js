function registrarCita(){
    console.log("hacer cita.....");

    $("#form-cita").submit(function(e){
        const datosPost = {
            fecha: $("#input-fecha").val(),
            paciente: $("#paciente").val(),
            motivo: $("#motivo").val(),
            doctor: $("#doctor").val(),
            fecha_cita: $("#fecha-cita").val(),
            hora_cita: $("#hora-cita").val(),
            estado_cita: $("#estado").val(),
            referencia: $("#referencia").val(),
            comentario: $("#comentario").val()
        };
        console.log(datosPost);
        let url = '../../php/consultorio/regsitro_cita.php';

        e.preventDefault();

        $.post(url, datosPost, function(response){
            console.log(response);
        })


    })
};




function consultaMedica(){
    console.log("consulta medica.....");

    $("#formulario").submit(function(e){
        const datosPost = {
            referencia: $("#ref").val(),
            nombre: $("#nom").val(),
            apellido: $("#ape").val(),
            telefono: $("#tel").val(),
            fecha: $("#fec").val(),
            doctor: $("#doc").val(),
            tipo_paciente: $("#tip").val(),
            comentario: $("#com").val(),
            diagnostico: $("#dia").val(),
            receta_medica: $("#rec").val()
        };
        console.log(datosPost);
        let url = '../../php/consultorio/consulta_medica.php';

         e.preventDefault();

        $.post(url, datosPost, function(response){
            $("#formulario").trigger('resert');
            console.log(response+"HOLA");
        })


    })
};




function cargarDatos(consulta){
    console.log("cosulta de cita.....");
    $.ajax({
        url: '../../php/consultorio/cargar_datos.php',
        type: 'POST',
        dataType: 'html',
        data: { consulta: consulta },
      })
        .done(function (respuesta) {
          $("#datos").html(respuesta);
        })
        .fail(function () {
          console.log("Error al Cargar");
        })
      newFunction().on('keyup', '#bus', function () {
        var valor = $(this).val();
        if (valor != "") {
            cargarDatos(valor);
        } else {
            cargarDatos();
        }
      });
    
      function newFunction() {
        return $(document);
      }
    }

function facturacion(){
    console.log("facturacion.....");

    $("#facturacion").submit(function(e){
        const datosPost = {
            numero: $("#numero").val(),
            fecha: $("#fecha").val(),
            id_consulta: $("#id_consulta").val(),
            ars: $("#ars").val(),
            comentario: $("#comentario").val(),
            monto: $("#monto").val(),
            no_poliza: $("#no_poliza").val(),
            no_reclamacion: $("#no_reclamacion").val(),
            monto_covertura: $("#monto_covertura").val(),
            total_factura: $("#total_factura").val(),
            condicion_pago: $("#condicion_pago").val(),
            total_recibido: $("#total_recibido").val(),
            no_referencia: $("#no_referencia").val(),
            total_devuelto: $("#total_devuelto").val()
        };
        console.log(datosPost);
        let url = '../../php/consultorio/facturacion.php';

        e.preventDefault();

        $.post(url, datosPost, function(response){
            console.log(response);
        })


    })
};

