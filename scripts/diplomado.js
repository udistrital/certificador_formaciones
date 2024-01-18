import { modeloDiplomado } from "../models/diplomadoModel.js";

let listaDiplimados = [];
const llenarTablaCursosTutor = () => {
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById(
      "template-renglon-cursos-tutor"
    ).content,
    $tbody = document.getElementById("tbody-table-cursos-tutor");
  listaDiplimados = modeloDiplomado.filter(
    (curso) => curso.tipoFormacion === "Diplomado"
  );

  listaDiplimados.forEach((formacion) => {
    $template.querySelector("tr").innerHTML = `
                <td>${formacion.id}</td>
                <td>${formacion.nombreFormacion}</td>
                <td>${formacion.tipoFormacion}</td>
                <td class="td-acciones">
                <span class="material-symbols-outlined accion-ver-cohorte" title="Ver cohortes">visibility</span>
                <span class="material-symbols-outlined">stacks</span>
                </td>`;

    let clone = document.importNode($template, true);

    $fargmento.appendChild(clone);
  });

  $tbody.appendChild($fargmento);
  console.log(listaDiplimados);
};

llenarTablaCursosTutor();

function verCohorte() {
  const $accionVerCohorte = document.querySelectorAll(".accion-ver-cohorte");
  $accionVerCohorte.forEach((formacion, id) => {
    formacion.addEventListener("click", (e) => {
      //aca se captura el id de la formacion que se selecciona para observas las cohortes
      console.log(formacion, id, listaDiplimados[id].id);
      location.href = `../pages/diplomadoCohortesPage.html?idFormacion=${listaDiplimados[id].id}&nombreFormacion=${listaDiplimados[id].nombreFormacion}&tipoFormacion=${listaDiplimados[id].tipoFormacion}`;
    });
  });
}
verCohorte();

const asignarTipoFormacionAFormulario = () => {
  const $inputTipoFormacion = document.getElementById(
    "form-curso-tutor-input-tipo-formacion"
  );

  $inputTipoFormacion.setAttribute("value", "Diplomado");
};

asignarTipoFormacionAFormulario();
