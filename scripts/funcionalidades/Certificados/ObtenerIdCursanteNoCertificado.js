import generar_certificado from "../../Fetching/POST/mid/GenerarCertificado.js";
import notificacion from "../Notificacion.js";

const obtenerIdCursanteNoCertificado = (listaNoCertificados, id_cohorte, id_modulo) => {
  let linc = listaNoCertificados.noCertificados;

  let d = document;
  let $listaNoCertificados = d.querySelectorAll(".index-noCertificado");
  let $btnGenMasCertificados = d.querySelector(".btn.btn-generar-certificados");

  $listaNoCertificados.forEach((nc, id) => {
    console.log(nc);
    nc.addEventListener("click", async (e) => {
      //ACA SE CAPTURA EL ID DE LA FORMACION SELECCIONADA
      console.log(linc[id]);
      let data = {
        id_creador: JSON.parse(sessionStorage.getItem("data"))[0].id,
        id_cohorte: id_cohorte,
        id_modulo: id_modulo,
        id_registro: linc[id].id_registro,
        nota: 100,
        firma: "fdsjkfljksd",
      };
      let response = await generar_certificado(data);
    });
  });

  $btnGenMasCertificados.addEventListener("click", async () => {
    let $listaCheckboxsSelect = d.querySelectorAll(".check-gen-certificados");
    const indicesMarcados = Array.from($listaCheckboxsSelect)
      .map((check, index) => (check.checked ? index : null)) // Devuelve el índice si está marcado, de lo contrario `null`
      .filter((index) => index !== null); // Filtra los `null`

    let listaSeleccionados = indicesMarcados.map((index) => linc[index]);
    listaSeleccionados = listaSeleccionados.map((seleccionado) => seleccionado.id_registro);

    let data = {
      id_creador: JSON.parse(sessionStorage.getItem("data"))[0].id,
      id_cohorte: id_cohorte,
      id_modulo: id_modulo,
      nota: 100,
      firma: "fdsjkfljksd",
      registros: listaSeleccionados,
    };

    // console.log(indicesMarcados, listaSeleccionados);
    console.log(data);
  });
};

export default obtenerIdCursanteNoCertificado;
