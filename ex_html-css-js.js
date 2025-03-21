


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