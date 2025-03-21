//Validacion del formulario
document.getElementById("formulario").onsubmit = function EnviarPedido() {

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;

 
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return false;
    }

    if (!/^\d{9}$/.test(telefono)) {
        alert("El teléfono debe contener exactamente 9 números.");
        return false;
    }

    if (direccion.length < 18) {
        alert("La dirección debe tener al menos 5 caracteres.");
        return false;
    }







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

//Contador de caracteres limitado a 150
document.getElementById("adicional").oninput = function(){
    let caracteres = this.value.length;
    document.getElementById("contador").innerHTML = caracteres;
    this.disabled = caracteres > 150;
}



//Cambiar color del input type submit al pasar el mouse
let enviarButton = document.getElementById("Enviar");

enviarButton.addEventListener("mouseover", () => {
    enviarButton.style.backgroundColor = "black";
    enviarButton.style.color = "white";
});

enviarButton.addEventListener("mouseout", () => {
    enviarButton.style.backgroundColor = "white";
    enviarButton.style.color = "black";
}); 