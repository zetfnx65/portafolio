function copyEmail() {
    // Definir el correo electrónico que quieres copiar
    const email = "zetfnx@proton.me";

    // Crear un elemento de entrada temporal
    const tempInput = document.createElement("input");
    tempInput.value = email;

    // Agregar el elemento al cuerpo del documento
    document.body.appendChild(tempInput);

    // Seleccionar el valor del input temporal
    tempInput.select();

    // Copiar el valor seleccionado al portapapeles
    document.execCommand("copy");

    // Remover el elemento temporal
    document.body.removeChild(tempInput);

    // Opcional: mostrar un mensaje de confirmación
    alert("Correo electrónico copiado: " + email);
}

document.getElementById("hireButton").onclick = function() {
    window.location.href = "https://ejemplo.com";
};

document.getElementById("hireButton").onclick = function() {
    window.location.href = "https://dc.madkus.us/";
};
