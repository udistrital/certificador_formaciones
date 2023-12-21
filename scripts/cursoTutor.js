import { listaInformesGenerales } from "../models/informesGenerales.js";

let listaCursosTutor = [];
const llenarTablaCursosTutor = () => {
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById(
      "template-renglon-cursos-tutor"
    ).content,
    $tbody = document.getElementById("tbody-table-cursos-tutor");
  listaCursosTutor = listaInformesGenerales.filter(
    (curso) => curso.tipoFormacion === "Curso con tutor"
  );

  listaCursosTutor.forEach((formacion) => {
    $template.querySelector("tr").innerHTML = `
                <td>${formacion.id}</td>
                <td>${formacion.nombreFormacion}</td>
                <td>${formacion.tipoFormacion}</td>
                <td class="td-acciones">
                <span class="material-symbols-outlined accion-ver-cohorte" title="Ver cohortes">visibility</span>
                </td>`;

    let clone = document.importNode($template, true);

    $fargmento.appendChild(clone);
  });

  $tbody.appendChild($fargmento);
  console.log(listaCursosTutor);
};

llenarTablaCursosTutor();

function verCohorte() {
  const $accionVerCohorte = document.querySelectorAll(".accion-ver-cohorte");
  $accionVerCohorte.forEach((formacion, id) => {
    formacion.addEventListener("click", (e) => {
      //aca se captura el id de la formacion que se selecciona para observas las cohortes
      console.log(formacion, id, listaCursosTutor[id].id);
      location.href = `../pages/CursoConTutorCohortesPage.html?idFormacion=${listaCursosTutor[id].id}`;
    });
  });
}
verCohorte();
