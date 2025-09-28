// assets/js/main.js - funciones compartidas (simulación de login/registro y utilidades)
function simulateSubmit(formId, target='admin.html') {
  const f = document.getElementById(formId);
  if(!f) return;
  f.addEventListener('submit', function(e){
    e.preventDefault();
    // Simulación: redirige a la pantalla principal (admin/home)
    window.location.href = target;
  });
}
// Muestra mensaje simple (para pantallas que "realizan" acciones)
function fakeAction(msg='Acción realizada') {
  alert(msg);
}
