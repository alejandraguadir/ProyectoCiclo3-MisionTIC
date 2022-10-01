(()=>{
       console.log("pagina de registro"); 
}
)();

var username = localStorage.getItem("usuarioactualizar");
var user;


    console.log("pagina de registro");



$(document).ready(function () {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $("#form-modificar").on("submit", function (event) {

        event.preventDefault();
        modificarUsuario();
    });

    $("#aceptar-eliminar-cuenta-btn").click(function () {

        eliminarCuenta().then(function () {
            location.href = "index.html";
        })
    })

    console.log("aaa*****************");
   
    console.log(username);


});

function modificarUsuario() {


    let username = $("#input-username").val();
    let password = $("#input-contrasena").val();
    let passwordConfirmacion = $("#input-contrasena-repeat").val();
    let cedula = $("#input-cedula").val();
    let nombre = $("#input-nombre").val();
    let apellidos = $("#input-apellidos").val();
    let correo = $("#input-email").val();
    let fecha_nac = $("#input-fecha_nac").val();
    let celular = $("#input-celular").val();
    let rol = $("#input-rol").val();


    $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletUsuarioModificar",
        data: $.param({
            username: username,
            contrasena: password,
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            saldo: saldo,
            premium: premium,
        }),
        success: function (result) {

            if (result != false) {
                $("#modificar-error").addClass("d-none");
                $("#modificar-exito").removeClass("d-none");
            } else {
                $("#modificar-error").removeClass("d-none");
                $("#modificar-exito").addClass("d-none");
            }

            setTimeout(function () {
                location.reload();
            }, 3000);

        }
    });

}


async function eliminarUsuario() {

    await $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletUsuarioEliminar",
        data: $.param({
            username: username
        }),
        success: function (result) {

            if (result != false) {

                console.log("Usuario eliminado")

            } else {
                console.log("Error eliminando el usuario");
            }
        }
    });
}