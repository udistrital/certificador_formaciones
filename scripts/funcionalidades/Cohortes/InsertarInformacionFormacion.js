const insertarInfoParaCreacionCohorte = (
    idFormacion,
    nombreFormacion,
    tipoFormacion
  ) => {
    let $inputNombreFormacion = document.getElementById(
      "cursoConTutorFormNombreFormacion"
    );
    let $inputTipoFormacion = document.getElementById(
      "cursoConTutorFormTipoFormacion"
    );
    let $inputIdFormacion = document.getElementById(
      "cursoConTutorFormIdFormacion"
    );
    console.log(nombreFormacion, tipoFormacion, idFormacion);
    $inputNombreFormacion.setAttribute("value", ` ${nombreFormacion}`);
    $inputTipoFormacion.setAttribute("value", ` ${tipoFormacion}`);
    $inputIdFormacion.setAttribute("value", ` ${idFormacion}`);
  };

  export default insertarInfoParaCreacionCohorte;