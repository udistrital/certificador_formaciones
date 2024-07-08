document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", function (event) {
    // Evitar el envío del formulario
    event.preventDefault();

    // Capturar los datos del formulario
    const correo = document.getElementById("login-correo").value;
    const pass = document.getElementById("login-pass").value;

    // Hacer algo con los datos (por ejemplo, imprimirlos en la consola)
    console.log("correo:", correo);
    console.log("pass:", pass);

    // Puedes realizar otras acciones, como enviarlos a un servidor usando fetch o XMLHttpRequest
    if (correo && pass) {
      fetch(
        "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/usuario.php"
      )
        .then((response) => {
          // Verificar si la respuesta es exitosa (código de estado HTTP 200-299)
          if (!response.ok) {
            throw new Error("La solicitud no fue exitosa");
          }
          // Parsear la respuesta como JSON
          return response.json();
        })
        .then((data) => {
          // Hacer algo con los datos recibidos
          console.log(data);
          sessionStorage.setItem("data", JSON.stringify(data));
          window.location.href = "../index.html";
        })
        .catch((error) => {
          // Capturar y manejar cualquier error
          console.error("Error:", error);
        });
    }
  });
});
