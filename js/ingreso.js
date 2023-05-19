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