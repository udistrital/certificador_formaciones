export const redireccionarAsistencias = (idCohorte, idFormacion) => {
  location.href = `../AsistenciasPage.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
};
export const redireccionarCertificaciones = (idCohorte, idFormacion) => {
  location.href = `../Certificados/CertificadosEmitidosPage.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
};
export const redireccionarConfiguraciones = (idCohorte, idFormacion) => {
  location.href = `CursoConTutorCohortesPage.html?idFormacion=${idFormacion}&idCohorte=${idCohorte}`;
};
