const baseURl = 'https://team-fusion-backend-pr-8.onrender.com';

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

function login(e) {
  e.preventDefault();
  axios.post(
    `${baseURl}/auth/login`,
    getFormData(e.target),
  ).then((response) => {
    localStorage.setItem('user', JSON.stringify(response.data));
    redirectAfterLogin(response.data.rol);
  }).catch(() => {
    Swal.fire({
      title: 'Usuario no encontrado',
      text: 'Asegurese que el email se encuentra registrado y que el rol seleccionado es el correcto',
      confirmButtonColor: '#354760',
    })
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login');
  loginForm.addEventListener('submit', login);
});
/*
function validarAcceso() {
  var email = document.getElementById("email").value;
  var rol = document.querySelector('input[name="rol"]:checked').value;

  if (email === "profesor@email.com" && rol === "teacher") {
    localStorage.setItem("emailProfesor", email);
    window.location.href = "./pages/profesor.html";
  } else if (email === "estudiante@email.com" && rol === "student") {
    localStorage.setItem("emailEstudiante", email);
    window.location.href = "./pages/estudiante.html";
  }
  return false;
}

const emailInput = document.getElementById('email');
const rolInputs = document.getElementsByName('rol');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!emailRegex.test(email)) {

    //alert('El correo electrónico ingresado no es válido');
    Swal.fire({
      imageUrl: 'img/error-email.png',
      confirmButtonColor: '#354760',
    })
    return;

  } else if (email === 'profesor@email.com') {

    if (rolInputs[0].checked) {

    } else if (rolInputs[1].checked) {
      Swal.fire({
        title: 'El correo electrónico ingresado no corresponde al rol',
        confirmButtonColor: '#354760',
      })
    } else {
      Swal.fire({
        title: 'Seleccione un rol de usuario',
        confirmButtonColor: '#354760',
      })
    }

  } else if (email === 'estudiante@email.com') {
    if (rolInputs[1].checked) {

    } else if (rolInputs[0].checked) {
      Swal.fire({
        title: 'El correo electrónico ingresado no corresponde al rol',
        confirmButtonColor: '#354760',
      })
    } else {   
      Swal.fire({
        title: 'Seleccione un rol de usuario',
        confirmButtonColor: '#354760',
      })
    }
  } else {
    Swal.fire({
      imageUrl: 'img/no-registrado.png',
      confirmButtonColor: '#354760',
    })
  }
});
*/