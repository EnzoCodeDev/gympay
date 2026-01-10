// assets/js/main.js - funciones compartidas (simulación de login/registro y utilidades)
if (document.getElementById('registerForm')) {
  document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name'); // Ajusta según tu input
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Registro exitoso. Redirigiendo...');
        window.location.href = 'admin.html'; // O donde quieras redirigir
      } else {
        alert(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      alert('❌ Error de conexión con el servidor.');
    }
  });
}

if (document.getElementById('loginForm')) {
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('name'); // Ajusta según tu input
    const password = formData.get('password');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Bienvenido!');
        window.location.href = 'admin.html'; // Redirige al panel
      } else {
        alert(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      alert('❌ Error de conexión con el servidor.');
    }
  });
}

// Muestra mensaje simple (para pantallas que "realizan" acciones)
function fakeAction(msg = 'Acción realizada') {
  alert(msg);
}
