var username = new URL(location.href).searchParams.get("username");
var user;

$(document).ready(function () {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    getProductos().then(function () {



        getProductos(false, "ASC");

        $("#ordenar-nombre").click(ordenarProductos);
    });
});


function getProductos(ordenar, orden) {

    $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletProductoListar",
        data: $.param({
            ordenar: ordenar,
            orden: orden
        }),
        success: function (result) {
            let parsedResult = JSON.parse(result);

            if (parsedResult != false) {
                mostrarProductos(parsedResult);
            } else {
                console.log("Error recuperando los datos de productos");
            }
        }
    });
}
function mostrarProductos(productos) {

    let contenido = " ";
    
    //console.log(productos);
    $.each(productos, function (index, producto) {

        producto = JSON.parse(producto);
        console.log(producto);




        contenido += '<tr><th scope="row">' + producto.num_parte + '</th>' +
                '<td>' + producto.nombre + '</td>' +
                '<td>' + producto.categoria + '</td>' +
                '<td>' + producto.cantidad + '</td>' +
                '<td>' + producto.descripcion + '</td>' +
                '<td>' + producto.fecha_in + '</td>' +
                '<td>' + producto.precio + '</td>' +
                //'<td><button onclick="abrirpagina()"(' + usuario.username + ' );" class="btn btn-link" id="novedad' + usuario["username"] + '"';

                //contenido += '>Actualizar</button><button onclick="actualizarUsuario(' + usuario.username + ');" class="btn btn-success" ';


                // contenido += '>Eliminar</button>\n\
                '</td></tr>';



    });
    $("#Productos-tbody").html(contenido);

    // $.each(usuario, function (index, usuario) {
    //    console.log(document.getElementById("novedad" + usuario.username))
    //});
    //console.log(producto);
}

function ordenarProductos() {

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

