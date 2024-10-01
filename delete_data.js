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
    "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/registro.php",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};

let id = 34;
const interval = setInterval(() => {
  deleteForm(id);
  id++;
}, 500);
