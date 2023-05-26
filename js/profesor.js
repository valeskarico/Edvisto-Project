// Obtener el correo electrónico migrado de localStorage
var emailProfesor = localStorage.getItem("emailProfesor");

// Mostrar el correo electrónico en el elemento con el ID "emailEstudiante"
document.getElementById("emailProfesor").textContent = emailProfesor;
//

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("myInput").focus();
}

function loadUsers() {
  const users = JSON.parse(localStorage.getItem('submitted'));
  users.forEach((user) => {
    const projects = JSON.parse(localStorage.getItem(user));
    const userLink = document.createElement('a');
    userLink.innerHTML = user.toUpperCase();
    userLink.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('user-selected').value = user;
      document.querySelector('.no-user').style.display = 'none';
      document.getElementById("myDropdown").classList.toggle("show");
      document.querySelector('.projectos-estudiante').style.display = 'block';
      document.getElementById('nombre-lider').value = projects['nombre-lider'];
      document.getElementById('titulo-proyecto').value = projects['titulo-proyecto'];
      document.getElementById('yt-link-1').href = projects['link'];
    })
    document.getElementById('users').appendChild(userLink);
  })
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().startsWith(filter)) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var btnAprobado = document.getElementById('btnAprobado');
  var btnDesaprobado = document.getElementById('btnDesaprobado');

  btnAprobado.addEventListener('click', function () {
    var confirmacion = confirm('Está por enviar una evaluación de "video aprobado", la cual será irreversible. ¿Desea continuar?');
    if (confirmacion) {
      var projName = document.getElementById('user-selected').value;
      var proj = JSON.parse(localStorage.getItem(projName));
      localStorage.setItem(projName, JSON.stringify({ ...proj, 'status': 'approved' }))
      alert('¡Felicidades! Ya terminaste tu evaluación. Se la enviamos al alumno');
    }
  });

  btnDesaprobado.addEventListener('click', function () {
    var confirmacion = confirm('Está por enviar una evaluación de "video desaprobado", la cual será irreversible. ¿Desea continuar?');
    if (confirmacion) {
      var projName = document.getElementById('user-selected').value;
      var proj = JSON.parse(localStorage.getItem(projName));
      localStorage.setItem(projName, JSON.stringify({ ...proj, 'status': 'disapproved' }))
      alert('¡Felicidades! Ya terminaste tu evaluación. Se la enviamos al alumno');
    }
  });
  loadUsers();
});