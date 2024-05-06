import { cusosCohortesGenerales } from "../models/informesGenerales.js";

let listaInformesGenerales = [];
const listarGeneralesFetch = async () => {
  await fetch("https://65e896cb4bb72f0a9c4fdadd.mockapi.io/api/generales")
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
      listaInformesGenerales = data;
      console.log(data);
      llenarTablaInformesGenerales(listaInformesGenerales);
      obtenerIdCohorte(listaInformesGenerales);
      ordenamientos(listaInformesGenerales);
    })
    .catch((error) => {
      // Capturar y manejar cualquier error
      console.error("Error:", error);
      llenarTablaInformesGenerales(cusosCohortesGenerales);
      obtenerIdCohorte(cusosCohortesGenerales);
      ordenamientos(cusosCohortesGenerales);
    });
};

listarGeneralesFetch();

const llenarTablaInformesGenerales = (li) => {
  console.log(li);
  // debugger;
  const $fargmento = document.createDocumentFragment(),
    $template = document.getElementById(
      "template-renglon-formaciones-generales"
    ).content,
    $tbodyFormacionesGenerales = document.getElementById(
      "tbody-table-formaciones-generales"
    );
  $tbodyFormacionesGenerales.innerHTML = "";
  li.forEach((formacion) => {
    $template.querySelector("tr").innerHTML = `
      <td>${formacion.id}</td>
      <td>${formacion.tipo}</td>
      <td>${formacion.nombre}</td>
      <td>${formacion.numCohorte}</td>
      <td>${formacion.anio}</td>
      <td>${new Date(formacion.fechaI).getFullYear()}/${
      new Date(formacion.fechaI).getMonth() + 1
    }/${new Date(formacion.fechaI).getDate()}</td>
      <td>${new Date(formacion.fechaF).getFullYear()}/${
      new Date(formacion.fechaF).getMonth() + 1
    }/${new Date(formacion.fechaF).getDate()}</td>
      <td class="td-acciones">
      <span
      class="material-symbols-outlined index-asistencias"
      title="Ver link información cohorte"
      >
      link
      </span>
      </td>`;

    let clone = document.importNode($template, true);

    $fargmento.appendChild(clone);
  });

  $tbodyFormacionesGenerales.appendChild($fargmento);
};

let d = document;
const ordenamientos = () => {
  let orderBool = false;

  d.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target === d.getElementById("index-sort-id")) {
      console.log("id");
      orderBool = !orderBool;
      //ORDENAMIENTO DE MAYOR A MENOR
      if (orderBool) {
        listaInformesGenerales.sort((a, b) => b.id - a.id);
      } else {
        //ORDENAMIENTO DE MENOR A MAYOR
        listaInformesGenerales.sort((a, b) => a.id - b.id);
      }
      obtenerIdCohorte(listaInformesGenerales);
    } else if (e.target === d.getElementById("index-sort-tipo")) {
      console.log("tipo");
      orderBool = !orderBool;

      //ORDENAMIENTO DE z A a
      if (orderBool) {
        listaInformesGenerales.sort((a, b) => {
          if (a.tipo < b.tipo) {
            return 1;
          } else if (a.tipo > b.tipo) {
            return -1;
          } else {
            return 0;
          }
        });
      } else {
        //ORDENAMIENTO DE a A z
        listaInformesGenerales.sort((a, b) => {
          if (a.tipo > b.tipo) {
            return 1;
          } else if (a.tipo < b.tipo) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      obtenerIdCohorte(listaInformesGenerales);
    } else if (e.target === d.getElementById("index-sort-nombre")) {
      console.log("nombre");
      orderBool = !orderBool;

      //ORDENAMIENTO DE z A a
      if (orderBool) {
        listaInformesGenerales.sort((a, b) => {
          if (a.nombreFormacion < b.nombreFormacion) {
            return 1;
          } else if (a.nombreFormacion > b.nombreFormacion) {
            return -1;
          } else {
            return 0;
          }
        });
      } else {
        //ORDENAMIENTO DE a A z
        listaInformesGenerales.sort((a, b) => {
          if (a.nombreFormacion > b.nombreFormacion) {
            return 1;
          } else if (a.nombreFormacion < b.nombreFormacion) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      obtenerIdCohorte(listaInformesGenerales);
    } else if (e.target === d.getElementById("index-sort-fechaInicial")) {
      console.log("finicial");
      orderBool = !orderBool;
      //ORDENAMIENTO DE MAYOR A MENOR
      if (orderBool) {
        listaInformesGenerales.sort(
          (a, b) => b.fechaInicialCohorte - a.fechaInicialCohorte
        );
      } else {
        //ORDENAMIENTO DE MENOR A MAYOR
        listaInformesGenerales.sort(
          (a, b) => a.fechaInicialCohorte - b.fechaInicialCohorte
        );
      }
      obtenerIdCohorte(listaInformesGenerales);
    } else if (e.target === d.getElementById("index-sort-fechaFinal")) {
      console.log("ffinal");
      orderBool = !orderBool;
      //ORDENAMIENTO DE MAYOR A MENOR
      if (orderBool) {
        listaInformesGenerales.sort(
          (a, b) => b.fechaFinalCohorte - a.fechaFinalCohorte
        );
      } else {
        //ORDENAMIENTO DE MENOR A MAYOR
        listaInformesGenerales.sort(
          (a, b) => a.fechaFinalCohorte - b.fechaFinalCohorte
        );
      }
      obtenerIdCohorte(listaInformesGenerales);
    }
  });
};

document
  .getElementById("input-buscador-informes")
  .addEventListener("input", (event) => {
    let filtro = event.target.value.toLowerCase();
    console.log(filtro);
    let filtrado = listaInformesGenerales.filter((formacion) => {
      return (
        formacion.nombre.toLowerCase().includes(filtro) ||
        formacion.tipo.toLowerCase().includes(filtro) ||
        formacion.id.toString().toLowerCase().includes(filtro) ||
        formacion.numCohorte.toString().toLowerCase().includes(filtro) ||
        formacion.anio.toString().toLowerCase().includes(filtro)
      );
    });
    console.log(filtrado);
    obtenerIdCohorte(filtrado);
  });

const redireccionarAsistencia = (idCohorte, idFormacion) => {
  location.href = `formularioRegistroAspirantes.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
};

const obtenerIdCohorte = (li) => {
  llenarTablaInformesGenerales(li);

  let listaAsistencias = d.querySelectorAll(".index-asistencias");
  listaAsistencias.forEach((asistencia, id) => {
    asistencia.addEventListener("click", (e) => {
      console.log("se hizo clic");
      console.log(id, "id", li[id].id);
      redireccionarAsistencia(li[id].numCohorte, li[id].id);
    });
  });
};
