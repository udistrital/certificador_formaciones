const obtenerParametrosUrlFormulario = async () => {
  let codigo = new URLSearchParams(window.location.search).get("codigo");

  return codigo;
};

export default obtenerParametrosUrlFormulario;
