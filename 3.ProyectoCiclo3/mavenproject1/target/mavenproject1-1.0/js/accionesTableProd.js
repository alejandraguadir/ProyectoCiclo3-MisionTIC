
$(document).ready(function () {

    const prod = localStorage.getItem("productoactualizar")
    document.getElementById("input-numerodeparte").value = prod;
    getProducto(prod);
    

});



function getProducto(num_parte) {

    $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletProductoGet",
        data: $.param({
            num_parte: num_parte,

        }),
        success: function (result) {
            let parsedResult = JSON.parse(result);

            if (parsedResult != null) {
                setValores(parsedResult)
            } else {
                console.log("Error recuperando los datos de usuarios");
            }
        }
    });
}
function setValores(producto) {

    document.getElementById("input-nombreproducto").value = producto.nombre;
    document.getElementById("input-cantidad").value = producto.cantidad;
    document.getElementById("input-descripcion").value = producto.descripcion;
    document.getElementById("input-precio").value = producto.precio;

   
}

function modificarProducto() {
    //alert("prueba")

    let num_parte = $("#input-numerodeparte").val();
    let nombre = $("#input-nombreproducto").val();
    let cantidad = $("#input-cantidad").val();
    let descripcion = $("#input-descripcion").val();
    let precio = $("#input-precio").val();

//alert(apellidos)

    $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletProductoModificar",
        data: $.param({
            num_parte: num_parte,            
            nombre: nombre,
            cantidad: cantidad,
            descripcion: descripcion,
            precio:precio
            
        }),
        success: function (result) {

            if (result != false) {
                $("#modificar-error").addClass("d-none");
                $("#modificar-exito").removeClass("d-none");
                 document.location.href = "tableProductos.html" ;
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

//adaptar a productos
async function eliminarProductos() {
    
    let num_parte = $("#input-numerodeparte").val();

    await $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletProductosEliminar",
        data: $.param({
            num_parte: num_parte
        }),
        success: function (result) {

            if (result != false) {

                console.log("Producto eliminado")
                document.location.href = "tableProductos.html" ;

            } else {
                console.log("Error eliminando el producto");
            }
        }
    });
}
