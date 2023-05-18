function validarAcceso() {
  var email = document.getElementById("email").value;
  var rol = document.querySelector('input[name="rol"]:checked').value;

  if (email === "profesor@email.com" && rol === "teacher") {
    window.location.href = "./pages/profesor.html";
  } else if (email === "estudiante@email.com" && rol === "student") {
    window.location.href = "./pages/estudiante.html";
  } else {
    event.preventDefault();
  }
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
      //alert('Bienvenido Profesor');
    } else if (rolInputs[1].checked) {
      alert('El correo electrónico ingresado solo se permite para el rol de profesor');
    } else {
      alert('Seleccione un rol de usuario');
    }

  } else if (email === 'estudiante@email.com') {
    if (rolInputs[1].checked) {
      //alert('Bienvenido Estudiante');
    } else if (rolInputs[0].checked) {
      alert('El correo electrónico ingresado solo se permite para el rol de estudiante');
    } else {   
      alert('Seleccione un rol de usuario');
    }
  } else {
    Swal.fire({
      imageUrl: 'img/no-registrado.png',
      confirmButtonColor: '#354760',
    })
    //alert('Lo siento, su correo no esta en nuestra base de datos');
  }
});