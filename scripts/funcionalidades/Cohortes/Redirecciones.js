export const redireccionarAsistencias = (
  idProceso,
  idCohorteModelo,
  idModulo
) => {
  if (
    window.location.pathname.includes("EventosModulos") ||
    window.location.pathname.includes("CursosModulos")
  ) {
    location.href = `../AsistenciasPage.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}&idModulo=${idModulo}`;
  } else if (window.location.pathname.includes("index")) {
    location.href = `../pages/AsistenciasPage.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
  } else {
    location.href = `../AsistenciasPage.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
  }
};
export const redireccionarCertificaciones = (
  idProceso,
  idCohorteModelo,
  idModulo
) => {
  if (
    window.location.pathname.includes("EventosModulos") ||
    window.location.pathname.includes("CursosModulos")
  ) {
    location.href = `../Certificados/CertificadosEmitidosPage.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}&idModulo=${idModulo}`;
  } else if (window.location.pathname.includes("index")) {
    location.href = `../pages/Certificados/CertificadosEmitidosPage.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
  } else {
    location.href = `../Certificados/CertificadosEmitidosPage.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
  }
};
export const redireccionarConfiguraciones = (
  idProceso,
  idCohorteModelo,
  idModulo
) => {
  if (
    window.location.pathname.includes("EventosModulos") ||
    window.location.pathname.includes("CursosModulos")
  ) {
    location.href = `CursoConTutorCohortesPage.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}&idModulo=${idModulo}`;
  } else if (window.location.pathname.includes("index")) {
  } else {
    location.href = `CursoConTutorCohortesPage.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
  }
};
export const redireccionarPonentesRegistrados = (
  idProceso,
  idCohorteModelo,
  idModulo
) => {
  if (
    window.location.pathname.includes("EventosModulos") ||
    window.location.pathname.includes("CursosModulos")
  ) {
    location.href = `../PonentesRegistrados.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}&idModulo=${idModulo}`;
  } else if (window.location.pathname.includes("index")) {
    location.href = `../pages/PonentesRegistrados.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
  } else {
    location.href = `../PonentesRegistrados.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
  }
};
export const redireccionarCursantesRegistrados = (
  idProceso,
  idCohorteModelo,
  idModulo
) => {
  if (
    window.location.pathname.includes("EventosModulos") ||
    window.location.pathname.includes("CursosModulos")
  ) {
    location.href = `../CursantesRegistrados.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}&idModulo=${idModulo}`;
  } else if (window.location.pathname.includes("index")) {
    location.href = `../pages/CursantesRegistrados.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
  } else {
    location.href = `../CursantesRegistrados.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
  }
};
export const redireccionarEventosModulos = (idProceso, idCohorteModelo, idTipoProceso) => {
  if (window.location.pathname.includes("EventosCohortesPage")) {
    location.href = `EventosModulos.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
  } else if (window.location.pathname.includes("DiplomadoCohortesPage")) {
    location.href = `CursosModulos.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
  } else if (window.location.pathname.includes("index")) {
    console.log(idTipoProceso);
    
    if (idTipoProceso === "10") {
      location.href = `../pages/Diplomado/CursosModulos.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
    } else if (idTipoProceso === "11") {
      location.href = `../pages/Eventos/EventosModulos.html?idProceso=${idProceso}&idCohorte=${idCohorteModelo}`;
    }
  }
};
