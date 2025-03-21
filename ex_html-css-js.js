//Validacion del formulario







//Confirmacion antes de enviar el pedido
document.getElementById("Enviar").onclick = function EnviarPedido() {
    let respuesta = confirm("¿Estas seguro de enviar el pedido?");
    if (respuesta == true) {
        return true;
    } else {
        return false;
    }
};

//modo claro y oscuro
document.getElementById("modoBTN").onclick = function(){
    document.body.classList.toggle("oscuro");
}


