document.addEventListener("DOMContentLoaded", () => {
  // Verificar si el usuario está autenticado
  const token = sessionStorage.getItem("data");

  if (!token) {
    // Redirigir a la página de inicio de sesión si no hay token
    window.location.href = "../pages/LoginPage.html";
  }

  // Opcional: Puedes hacer una llamada al servidor para verificar la validez del token
  // fetch('/verify-token', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`
  //     }
  // })
  // .then(response => response.json())
  // .then(data => {
  //     if (!data.valid) {
  //         window.location.href = '/login.html';
  //     }
  // })
  // .catch(err => {
  //     console.error('Error verificando el token:', err);
  //     window.location.href = '/login.html';
  // });
});
