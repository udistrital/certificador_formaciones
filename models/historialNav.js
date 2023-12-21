export function registrarNavegacion() {
    const linksVisitados = JSON.parse(localStorage.getItem('linksVisitados')) || [];
    console.log(localStorage);
    if (localStorage.getItem('linksVisitados')) {
        console.log('existe');
        console.log(linksVisitados);
    }
    linksVisitados.push(window.location.href);
    localStorage.setItem('linksVisitados', JSON.stringify(linksVisitados));
}

// Llamada a la función para registrar la navegación en la primera carga
registrarNavegacion();