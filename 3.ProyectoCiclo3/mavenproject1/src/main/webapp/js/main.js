//Trae el usuario del login 
var username = new URL(location.href).searchParams.get("username");
var user;

$(document).ready(function () {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    getUsuarios().then(function () {



        getUsuarios(false, "ASC");

        $("#ordenar-rol").click(ordenarUsuarios);
    });
});


function getUsuarios(ordenar, orden) {

    $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletUsuarioListar",
        data: $.param({
            ordenar: ordenar,
            orden: orden
        }),
        success: function (result) {
            let parsedResult = JSON.parse(result);

            if (parsedResult != false) {
                mostrarUsuarios(parsedResult);
            } else {
                console.log("Error recuperando los datos de usuarios");
            }
        }
    });
}
function mostrarUsuarios(usuario) {

    let contenido = "";

    $.each(usuario, function (index, us) {

        usuariouno = JSON.parse(us);




        contenido += '<tr><th scope="row">' + usuariouno.username + '</th>' +
                '<td>' + usuariouno.password + '</td>' +
                '<td>' + usuariouno.cedula + '</td>' +
                '<td>' + usuariouno.nombre + '</td>' +
                '<td>' + usuariouno.apellido + '</td>' +
                '<td>' + usuariouno.correo + '</td>' +
                '<td>' + usuariouno.fecha_nac + '</td>' +
                '<td>' + usuariouno.celular + '</td>' +
                '<td>' + usuariouno.rol + '</td>' +
                '<td><button class="btn btn-link" id="' + usuariouno["username"] + '"';

        contenido += '>Actualizar</button>  </td></tr>'



    });
    $("#Usuarios-tbody").html(contenido);

    $.each(usuario, function (index, us) {

        usuariouno = JSON.parse(us);


        let btn = document.getElementById( usuariouno.username);
        btn.addEventListener(
                "click",
                (event)=>[
                   iractualizar(event.target.id)
                ]
                );

    });


}

function ordenarUsuarios() {

    if ($("#icono-ordenar").hasClass("fa-sort")) {
        getPeliculas(true, "ASC");
        $("#icono-ordenar").removeClass("fa-sort");
        $("#icono-ordenar").addClass("fa-sort-down");
    } else if ($("#icono-ordenar").hasClass("fa-sort-down")) {
        getPeliculas(true, "DESC");
        $("#icono-ordenar").removeClass("fa-sort-down");
        $("#icono-ordenar").addClass("fa-sort-up");
    } else if ($("#icono-ordenar").hasClass("fa-sort-up")) {
        getPeliculas(false, "ASC");
        $("#icono-ordenar").removeClass("fa-sort-up");
        $("#icono-ordenar").addClass("fa-sort");
    }
}

function iractualizar(perm) {
   localStorage.setItem("usuarioactualizar",perm);
   window.location=("modificarUsuario.html");
}


