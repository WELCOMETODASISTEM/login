// Manejo del formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulación de autenticación básica
  if (username === "hax" && password === "1234") {
    document.getElementById('statusMessage').innerText = "Inicio de sesión exitoso.";
    console.log("Usuario autenticado:", { username });
  } else {
    document.getElementById('statusMessage').innerText = "Usuario o contraseña incorrectos.";
    console.error("Error al iniciar sesión: credenciales inválidas");
  }
});
