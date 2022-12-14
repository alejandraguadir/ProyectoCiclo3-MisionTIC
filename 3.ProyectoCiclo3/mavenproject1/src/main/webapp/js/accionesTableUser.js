
$(document).ready(function () {

    const us = localStorage.getItem("usuarioactualizar")
    document.getElementById("input-username").value = us;
    getUsuario(us);

   
    
    

});



function getUsuario(username) {

    $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletUsuarioGet",
        data: $.param({
            username: username,

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
function setValores(usuario) {

    document.getElementById("input-contrasena").value = usuario.password;
    document.getElementById("input-cedula").value = usuario.cedula;
    document.getElementById("input-nombre").value = usuario.nombre;
    document.getElementById("input-apellidos").value = usuario.apellido;
    document.getElementById("input-email").value = usuario.correo;
   // document.getElementById("input-fecha_nac").value = usuario.fecha_nac;
    //console.log(new Date(usuario.fecha_nac));
    document.getElementById("input-celular").value = usuario.celular;
    document.getElementById("input-rol").value = usuario.rol;
}


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
        url: "./ServletUsuarioModificar",
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


async function eliminarUsuario() {
    
    let username = $("#input-username").val();

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
                document.location.href = "tableUsers.html" ;

            } else {
                console.log("Error eliminando el usuario");
            }
        }
    });
}