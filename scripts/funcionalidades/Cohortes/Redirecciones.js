export const redireccionarAsistencias = (idProceso, idCohorteModelo) => {
  location.href = `../AsistenciasPage.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
};
export const redireccionarCertificaciones = (idProceso, idCohorteModelo) => {
  location.href = `../Certificados/CertificadosEmitidosPage.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
};
export const redireccionarConfiguraciones = (idProceso, idCohorteModelo) => {
  location.href = `CursoConTutorCohortesPage.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
};
