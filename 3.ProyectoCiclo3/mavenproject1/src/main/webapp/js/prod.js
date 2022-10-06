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
function mostrarProductos(producto) {

    let contenido = " ";
    
    //console.log(productos);
    $.each(producto, function (index, prod) {

        productouno = JSON.parse(prod);
        console.log(producto);




        contenido += '<tr><th scope="row">' + productouno.num_parte + '</th>' +
                '<td>' + productouno.nombre + '</td>' +
                '<td>' + productouno.categoria + '</td>' +
                '<td>' + productouno.cantidad + '</td>' +
                '<td>' + productouno.descripcion + '</td>' +
                '<td>' + productouno.fecha_in + '</td>' +
                '<td>' + productouno.precio + '</td>' +
                 '<td><button class="btn btn-link" id="' + productouno["num_parte"] + '"';

        contenido += '>Actualizar</button>  </td></tr>'



    });
    $("#Productos-tbody").html(contenido);

    $.each(producto, function (index, prod) {

        productouno = JSON.parse(prod);


        let btn = document.getElementById( productouno.num_parte);
        btn.addEventListener(
                "click",
                (event)=>[
                   iractualizar(event.target.id)
                ]
                );

    });
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

function iractualizar(perm) {
   localStorage.setItem("productoactualizar",perm);
   window.location=("modificarProducto.html");
}
