const baseURl = 'https://team-fusion-backend-kvzy.onrender.com';

function getFormData(form) {
  const formData = new FormData(form);
  return Object.fromEntries(formData);
}

function redirectAfterLogin(rol) {
  if (rol === 'teacher') {
    return window.location.href = 'pages/profesor.html';
  }
  return window.location.href = 'pages/estudiante.html';
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validarFormulario(event) {
  event.preventDefault(); // Evitar que el formulario se envíe por defecto

  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  if (!validarEmail(email)) {
    Swal.fire({
      text: 'Por favor, introduce un correo electrónico válido',
      confirmButtonColor: '#354760',
    })
    return;
  }

  const profesorRadio = document.querySelector('.profesor input[type="radio"]');
  const estudianteRadio = document.querySelector('.estudiante input[type="radio"]');

  if (!profesorRadio.checked && !estudianteRadio.checked) {
    // Ningún radio está marcado, mostrar mensaje de error o realizar alguna otra acción
    Swal.fire({
      text: 'Por favor, selecciona un rol',
      confirmButtonColor: '#354760',
    });
    return;
  }

  axios.post(
    `${baseURl}/auth/login`,
    getFormData(event.target),
  ).then((response) => {
    localStorage.setItem('user', JSON.stringify(response.data));
    redirectAfterLogin(response.data.rol);
  }).catch(() => {
    Swal.fire({
      text: 'Asegúrese de que el email se encuentre registrado y que el rol seleccionado es el correcto',
      confirmButtonColor: '#354760',
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login');
  loginForm.addEventListener('submit', validarFormulario);
});