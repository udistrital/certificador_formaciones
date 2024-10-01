import registroPronencia from "../../Fetching/PUT/RegistroPonente.js";

const obtenerModuloId = (li) => {
  console.log(li);
  let listaPonentes = document.querySelectorAll(".index-aceptarPonente");
  listaPonentes.forEach((ponente, id) => {
    ponente.addEventListener("click", async (e) => {
      li[id].aceptado === "0"
        ? (li[id].aceptado = "1")
        : (li[id].aceptado = "0");
      console.log(li[id]);
      let resultRegistroPonenciaPut = await registroPronencia(li[id]);
      resultRegistroPonenciaPut.estado === "ok" && li[id].aceptado === "1"
        ? alert("Se acepto el ponente")
        : resultRegistroPonenciaPut.estado === "ok" && li[id].aceptado === "0"
        ? alert("Se rechazo el ponente")
        : alert("No se pudo aceptar/rechazar el ponente");
      window.location.reload();
      console.log(resultRegistroPonenciaPut);
    });
  });
};
export default obtenerModuloId;
