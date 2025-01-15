import getCertificadoPrueba from "../../Fetching/GET/Mid/GetCertificadoPrueba.js";

const certificadoPrueba = async (id_proceso, id_cohorte, id_modulo) => {
  let certificado;
  if (id_modulo === "null") {
    // certificado = await getCertificadoPrueba(id_cohorte);
  } else {
    // certificado = await getCertificadoPrueba(id_cohorte, id_modulo);
  }
  console.log(certificado);

  // URL del archivo PDF
  const pdfUrl = certificado;

  // Crear el elemento iframe
  const iframe = document.createElement("iframe");
  iframe.src = pdfUrl;
  iframe.className = "iframe-certprueba";
  iframe.style.display = "block";
  iframe.style.height = "500px";
  iframe.style.width = "100%"; // Ajustar al ancho completo de la sección

  // Seleccionar la sección donde se añadirá el iframe
  const section = document.querySelector(".section-iframe-certprueba");

  // Inyectar el iframe en la sección
  section.appendChild(iframe);

  //   llenaTablaCertificados(certificados); //555555
};

export default certificadoPrueba;
