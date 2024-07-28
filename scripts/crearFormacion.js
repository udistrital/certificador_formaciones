const crearFormacionfnc = () => {
  let idUsuario = JSON.parse(sessionStorage.getItem("data"))[0].id;
  let idTipoFormacion = document.getElementById(
    "form-curso-tutor-input-tipo-formacion-id"
  ).value;
  let nombreFormacion = document.getElementById("nombreProceso").value;
  let intensidadHoraria = document.getElementById("intensidadHoraria").value;
  let codigoEdx = "";
  if (document.getElementById("")) {
    codigoEdx = document.getElementById("").value;
  }

  const data = {
    creador: idUsuario,
    tipo_proceso: parseInt(idTipoFormacion),
    nombre: nombreFormacion,
    intensidad_horaria: intensidadHoraria,
    activo: true,
    ...(codigoEdx !== "" && { codigo_edx: codigoEdx }),
  };
  console.log("data:", data);

  return fetchNuevaFormacion(data);
};

const fetchNuevaFormacion = async (data) => {
  let estado = false;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  await fetch(
    "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/proceso.php",
    requestOptions
  )
    .then((response) => response.text())
    .then(async (result) => {
      console.log(JSON.parse(result));
      if ((await JSON.parse(result).estado) === "ok") {
        estado = true;
      }
    })
    .catch((error) => {
      console.error(error);
      if (error.estado == "error") {
        estado = false;
      }
    });

  return estado;
};

export default crearFormacionfnc;
