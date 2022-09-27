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

    $.each(usuario, function (index, usuario) {

        usuario = JSON.parse(usuario);




        contenido += '<tr><th scope="row">' + usuario.username + '</th>' +
                '<td>' + usuario.password + '</td>' +
                '<td>' + usuario.cedula + '</td>' +
                '<td>' + usuario.nombre + '</td>' +
                '<td>' + usuario.apellido + '</td>' +
                '<td>' + usuario.correo + '</td>' +
                '<td>' + usuario.fecha_nac + '</td>' +
                '<td>' + usuario.celular + '</td>' +
                '<td>' + usuario.rol + '</td>' +
                '<td><button onclick="actualizarUsuario(' + usuario.username  +  ');" class="btn btn-link" ';
            

            contenido += '>Actualizar</button><button onclick="actualizarUsuario(' + usuario.username  +  ');" class="btn btn-success" ';
            

            contenido += '>Eliminar</button></td></tr>'


    });
    $("#Usuarios-tbody").html(contenido);
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

