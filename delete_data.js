const deleteForm = (id) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    id,
  });

  console.log(id);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    // "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/registro_ponencia.php",
    // "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/asistencia.php",
    // "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/registro.php",
    // "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/formulario.php",
    // "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/sesion.php",
    // "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/modulo.php",
    // "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/cohorte.php",
    "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/proceso.php",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};

let id = 106;
const interval = setInterval(() => {
  deleteForm(id);
  id++;
}, 100);
