import { modelCT } from "../models/cursoConTutorModel.js";

var modeloCursoConTutor = [];

const listarCursosTutorFetch = async () => {
  await fetch("https://65e896cb4bb72f0a9c4fdadd.mockapi.io/api/cursostutor")
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
      modeloCursoConTutor = data;
      llenarTablaCursosTutor(modeloCursoConTutor);
      verCohorte(modeloCursoConTutor);
    })
    .catch((error) => {
      // Capturar y manejar cualquier error
      console.error("Error:", error);
      modeloCursoConTutor = modelCT;
      llenarTablaCursosTutor(modeloCursoConTutor);
      verCohorte(modeloCursoConTutor);

    });
};

listarCursosTutorFetch();

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
      location.href = `../pages/CursoMoocCohortesPage.html?idFormacion=${data[id].id}&nombreFormacion=${data[id].nombre}&tipoFormacion=${data[id].tipoproceso}`;
    });
  });
}

const asignarTipoFormacionAFormulario = () => {
  const $inputTipoFormacion = document.getElementById(
    "form-curso-tutor-input-tipo-formacion"
  );

  $inputTipoFormacion.setAttribute("value", "Curso con tutor");
};

asignarTipoFormacionAFormulario();
