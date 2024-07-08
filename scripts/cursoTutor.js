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
                <td>${formacion.nombre}</td>
                <td>${formacion.tipoproceso}</td>
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
        data[id].tipoproceso
      );
      location.href = `CursoConTutorCohortesPage.html?idFormacion=${data[id].id}&nombreFormacion=${data[id].nombre}&tipoFormacion=${data[id].tipoproceso}`;
    });
  });
}

const listarCursosTutorFetch = async () => {
  modeloCursoConTutor = modelCT;
  llenarTablaCursosTutor(modeloCursoConTutor);
  verCohorte(modeloCursoConTutor);
};

listarCursosTutorFetch();

const asignarTipoFormacionAFormulario = (
  idTipoFormacion,
  nombreTipoFormacion
) => {
  const $inputTipoFormacion = document.getElementById(
    "form-curso-tutor-input-tipo-formacion"
  );
  console.log("hola", nombreTipoFormacion);
  $inputTipoFormacion.setAttribute("value", nombreTipoFormacion);
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
