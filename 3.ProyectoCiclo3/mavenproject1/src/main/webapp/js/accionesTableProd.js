
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

//adaptar a productos
function modificarUsuario() {
    //alert("prueba")

    let username = $("#input-username").val();
    let password = $("#input-contrasena").val();
    let cedula = $("#input-cedula").val();
    let nombre = $("#input-nombre").val();
    let apellidos = $("#input-apellidos").val();
    let correo = $("#input-email").val();
    //let fecha_nac = $("#input-fecha_nac").val();
    let celular = $("#input-celular").val();
    let rol = $("#input-rol").val();

//alert(apellidos)

    $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletProductoModificar",
        data: $.param({
            username: username,            
            nombre: nombre,
            apellidos: apellidos,
            correo: correo,
            //fecha_nac: fecha_nac,
            celular: celular,
            rol:rol
            
        }),
        success: function (result) {

            if (result != false) {
                $("#modificar-error").addClass("d-none");
                $("#modificar-exito").removeClass("d-none");
                 document.location.href = "tableUsers.html" ;
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
async function eliminarUsuario() {
    
    let username = $("#input-username").val();

    await $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletProductosEliminar",
        data: $.param({
            username: username
        }),
        success: function (result) {

            if (result != false) {

                console.log("Usuario eliminado")
                document.location.href = "tableUsers.html" ;

            } else {
                console.log("Error eliminando el usuario");
            }
        }
    });
}
