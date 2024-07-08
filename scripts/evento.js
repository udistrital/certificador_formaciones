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
      location.href = `EventosCohortesPage.html?idFormacion=${listaDiplimados[id].id}&nombreFormacion=${listaDiplimados[id].nombreFormacion}&tipoFormacion=${listaDiplimados[id].tipoFormacion}`;
    });
  });
}
verCohorte();

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
  window.location.href.includes("EventosPage") &&
    fetch(
      "https://pruebascrud.formaciones.planestic.udistrital.edu.co/v1/tipo_proceso.php?id=6"
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
