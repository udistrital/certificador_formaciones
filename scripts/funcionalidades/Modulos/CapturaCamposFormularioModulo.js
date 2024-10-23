import postNuevoFormulario from "../../Fetching/POST/InsertaFormulario.js";
import insertaModulo from "../../Fetching/POST/InsertaModulo.js";
import postNuevaSesion from "../../Fetching/POST/InsertarSesion.js";
import formatearFecha from "../FormateoFecha.js";
import notificacion from "../Notificacion.js";

const formularioModulo = async (e) => {
  const formData = new FormData(e.target); // Crear un objeto FormData

  let idUsuario = JSON.parse(sessionStorage.getItem("data"))[0].id;
  console.log();

  const dataModulo = {
    creador: idUsuario,
    proceso: formData.get("form-curso-tutor-input-id-proceso"),
    nombre: formData.get("nombreModulo"),
    intensidad_horaria: formData.get("intensidadHoraria"),
  };

  console.log(formData.get("fechaFinallAsistencia") + " " + formData.get("horaFinalAsistencia") + ":00");

  let resultadoInsertaModulo = await insertaModulo(dataModulo);
  console.log(resultadoInsertaModulo);

  if (resultadoInsertaModulo.estado === "ok") {
    notificacion(true, "Se ha creado el módulo");
    const sesion = {
      creador: parseInt(idUsuario),
      cohorte: formData.get("form-curso-tutor-input-id-cohorte"),
      fecha_inicial: formData.get("fechaInicialSesion") + " " + formData.get("horaInicialSesion") + ":00",
      fecha_final: formData.get("fechaFinallSesion") + " " + formData.get("horaFinalSesion") + ":00",
      sesion_virtual: formData.get("modalidad") === "on" ? 1 : 0,
      enlace: formData.get("linkSesion"),
      activo: true,
    };
    let respuestaInsertaSesion = await postNuevaSesion(sesion);

    if (respuestaInsertaSesion.estado === "ok") {
      console.log("Entra en creacion de formularios");

      const dataFormularioRegistro = {
        creador: idUsuario,
        cohorte: formData.get("form-curso-tutor-input-id-cohorte"),
        modulo: resultadoInsertaModulo.resultado.id_modulo,
        sesion: respuestaInsertaSesion.resultado.id_sesion,
        tipo_formulario: 1,
        hash: "link formulario",
        fecha_inicial: formatearFecha(formData.get("fechaInicialCursante")),
        fecha_final: formatearFecha(formData.get("fechaFinalCursante")),
      };
      console.log(dataFormularioRegistro);

      const dataFormularioAsistencia = {
        creador: idUsuario,
        cohorte: formData.get("form-curso-tutor-input-id-cohorte"),
        modulo: resultadoInsertaModulo.resultado.id_modulo,
        sesion: respuestaInsertaSesion.resultado.id_sesion,
        tipo_formulario: 2,
        hash: "link formulario",
        fecha_inicial: formData.get("fechaInicialAsistencia") + " " + formData.get("horaInicialAsistencia") + ":00",
        fecha_final: formData.get("fechaFinallAsistencia") + " " + formData.get("horaFinalAsistencia") + ":00",
      };
      console.log(dataFormularioRegistro);

      let resultInsertaFormularioRegistro = await postNuevoFormulario(dataFormularioRegistro);

      let resultInsertaFormularioAsistencia = await postNuevoFormulario(dataFormularioAsistencia);
    } else {
      notificacion(false, "No se ha podido registrar la sesion");
    }
  } else {
    notificacion(false, "No se pudo crear el modulo");
  }
};

export default formularioModulo;
