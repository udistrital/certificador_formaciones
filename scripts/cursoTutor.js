import { modelCT } from "../models/cursoConTutorModel.js";

var modeloCursoConTutor = [...modelCT];

const llenarTablaCursosTutor = (data) => {
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById(
      "template-renglon-cursos-tutor"
    ).content,
    $tbody = document.getElementById("tbody-table-cursos-tutor");

  data.forEach((formacion) => {
    $template.querySelector("tr").innerHTML = `
                <td>${formacion.id}</td>
                <td style="overflow-x: auto; max-width: 300px;">${formacion.nombre}</td>
                <td>${formacion.tipo_proceso}</td>
                <td class="td-acciones">
                <span class="material-symbols-outlined accion-ver-cohorte" title="Ver cohortes">visibility</span>
                </td>`;

    let clone = document.importNode($template, true);

    $fargmento.appendChild(clone);
  });

  $tbody.appendChild($fargmento);
  console.log(data);
};

function verCohorte(data) {
  console.log(data);
  const $accionVerCohorte = document.querySelectorAll(".accion-ver-cohorte");
  $accionVerCohorte.forEach((formacion, id) => {
    formacion.addEventListener("click", (e) => {
      //aca se captura el id de la formacion que se selecciona para observas las cohortes
      console.log(
        formacion,
        id,
        data[id].id,
        data[id].nombre,
        data[id].tipo_proceso
      );
      location.href = `CursoConTutorCohortesPage.html?idFormacion=${data[id].id}&nombreFormacion=${data[id].nombre}&tipoFormacion=${data[id].tipo_proceso}`;
    });
  });
}

const listarCursosTutorFetch = async () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/proceso.php",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result));

      //este fragmento permite que de todos los procesos se filtren los que son de curso con tutor
      let formacionesCTutor = [];
      JSON.parse(result).forEach((element) => {
        element.tipo_proceso == 2 && formacionesCTutor.push(element);
      });
      modeloCursoConTutor = formacionesCTutor;
      //en caso de que la peticion solo retorne procesos de tipo curso con tutor
      // modeloCursoConTutor = JSON.parse(result);
      llenarTablaCursosTutor(modeloCursoConTutor);
      verCohorte(modeloCursoConTutor);
    })
    .catch((error) => {
      console.error(error);
    });
};

listarCursosTutorFetch();

const asignarTipoFormacionAFormulario = (
  idTipoFormacion,
  nombreTipoFormacion
) => {
  const $inputTipoFormacion = document.getElementById(
    "form-curso-tutor-input-tipo-formacion"
  );
  const $inputTipoFormacionId = document.getElementById(
    "form-curso-tutor-input-tipo-formacion-id"
  );
  console.log("hola", nombreTipoFormacion);
  $inputTipoFormacion.setAttribute("value", nombreTipoFormacion);
  $inputTipoFormacionId.setAttribute("value", idTipoFormacion);
};

//CARGUE DE CONTENIDOS
const buscarTipoFormacion = () => {
  window.location.href.includes("CursoConTutorPage") &&
    fetch(
      "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/tipo_proceso.php?id=2"
    )
      .then((response) => {
        // Verificar si la respuesta es exitosa (código de estado HTTP 200-299)
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        // Parsear la respuesta como JSON
        return response.json();
      })
      .then(async (data) => {
        // Hacer algo con los datos recibidos
        // console.log(data);
        await asignarTipoFormacionAFormulario(data[0].id, data[0].nombre);
      })
      .catch((error) => {
        // Capturar y manejar cualquier error
        console.error("Error:", error);
      });
};

buscarTipoFormacion();
