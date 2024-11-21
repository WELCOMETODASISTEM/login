document.getElementById('loginForm').addEventListener('submit', (e) => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Usuarios y contraseñas válidas
  const users = {
    "H77ABC123D": "1273XYZ12-ABCD1-XY-9",
    "P88JKL567Q": "4567LMNOP-QRST2-WX-8",
    // Agrega el resto de usuarios aquí...
  };

  // Validar credenciales
  if (users[username] && users[username] === password) {
    // Permitir el envío normal para activar el autoguardado
    document.getElementById('statusMessage').innerText = "Inicio de sesión exitoso.";
    return; // Salimos para dejar que el navegador maneje el envío
  } else {
    e.preventDefault(); // Bloqueamos el envío si falla la validación
    document.getElementById('statusMessage').innerText = "Usuario o contraseña incorrectos.";
    console.error("Error al iniciar sesión: credenciales inválidas");
  }
});
