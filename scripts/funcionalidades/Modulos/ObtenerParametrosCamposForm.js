import postNuevoModulo from "../../Fetching/POST/InsertaModulo.js";
import formatearFecha from "../FormateoFecha.js";

const obtenerParametrosComposForm = () => {
  let $idCohorte = document.getElementById(
    "form-curso-tutor-input-id-cohorte"
  ).value;
  let $nombreModulo = document.getElementById("nombreModulo").value;
  let $intensidadHoraria = document.getElementById("intensidadHoraria").value;
  let $idProceso = document.getElementById(
    "form-curso-tutor-input-id-proceso"
  ).value;

  let idUsuario = JSON.parse(sessionStorage.getItem("data"))[0].id;

  const dataModulo = {
    creador: idUsuario,
    proceso: parseInt($idProceso),
    nombre: $nombreModulo,
    intensidad_horaria: parseInt($intensidadHoraria),
    id_cohorte: $idCohorte,
  };

  const dataFormularioRegistro = {
    creador: idUsuario,
    cohorte: $idCohorte,
    modulo: null,
    sesion: null,
    tipo_formulario: 1,
    hash: "link formulario",
    fecha_inicial: null,
    fecha_final: null,
    fecha_creado: formatearFecha(Date.now()),
    fecha_modificado: formatearFecha(Date.now()),
  };
  const dataFormularioPonente = {
    creador: idUsuario,
    cohorte: $idCohorte,
    modulo: null,
    sesion: null,
    tipo_formulario: 3,
    hash: "link formulario",
    fecha_inicial: null,
    fecha_final: null,
    fecha_creado: formatearFecha(Date.now()),
    fecha_modificado: formatearFecha(Date.now()),
  };
  const dataFormularioAsistencia = {
    creador: idUsuario,
    cohorte: $idCohorte,
    modulo: null,
    sesion: null,
    tipo_formulario: 2,
    hash: "link formulario",
    fecha_inicial: null,
    fecha_final: null,
    fecha_creado: formatearFecha(Date.now()),
    fecha_modificado: formatearFecha(Date.now()),
  };
  const dataFormularioMemorias = {
    creador: idUsuario,
    cohorte: $idCohorte,
    modulo: null,
    sesion: null,
    tipo_formulario: 5,
    hash: "link formulario",
    fecha_inicial: null,
    fecha_final: null,
    fecha_creado: formatearFecha(Date.now()),
    fecha_modificado: formatearFecha(Date.now()),
  };
  const dataFormularioDocumentacion = {
    creador: idUsuario,
    cohorte: $idCohorte,
    modulo: null,
    sesion: null,
    tipo_formulario: 4,
    hash: "link formulario",
    fecha_inicial: null,
    fecha_final: null,
    fecha_creado: formatearFecha(Date.now()),
    fecha_modificado: formatearFecha(Date.now()),
  };

  console.log(data);

  // return postNuevoModulo(data);
};

export default obtenerParametrosComposForm;
