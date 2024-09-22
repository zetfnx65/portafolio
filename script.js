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

// Esperar a que el contenido de la página se cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento de audio por su ID
    var audio = document.getElementById("musica-fondo");

    // Establecer el volumen al 50% (0.5)
    audio.volume = 0.5;

    // Intentar reproducir el audio
    audio.play().catch(function (error) {
        console.log("La reproducción automática fue bloqueada por el navegador:", error);
    });
});
