//Trae el usuario del login 
var username = new URL(location.href).searchParams.get("username");
var user;

$(document).ready(function () {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    getUsuario().then(function () {



        getUsuario(false, "ASC");

        $("#ordenar-rol").click(ordenarUsuarios);
    });
});


function getPeliculas(ordenar, orden) {

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
                console.log("Error recuperando los datos de las peliculas");
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
                 '<td>'+ "r"+ '</td>' +
                '</tr>'


    });
    $("#peliculas-tbody").html(contenido);
}

