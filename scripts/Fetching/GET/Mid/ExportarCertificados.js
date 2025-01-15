const generaExcelCertificados = async (id_cohorte, id_modulo) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(`https://pruebascrud.formaciones.planestic.udistrital.edu.co/mid/exportar_certificado.php?id_cohorte=${id_cohorte}${id_modulo ? "&id_modulo=" + id_modulo : ""}`, requestOptions);
    console.log(response.url);
    // Abrir una nueva pestaña
    const newTab = window.open(response.url, "_blank");

    // Verificar si la pestaña se abrió correctamente
    if (newTab) {
      // Cerrar la pestaña después de un breve intervalo (opcional)
      setTimeout(() => {
        newTab.close();
      }, 10); // Tiempo en milisegundos antes de cerrar (aquí, 1 segundo)
    }
  } catch (error) {
    console.error(error);
    return { existe: false, noCertificados: error };
  }
};

export default generaExcelCertificados;
