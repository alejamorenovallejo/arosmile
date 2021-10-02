
function validar_login() {
  var formulario = document.getElementById("form_login");
  var datos_correctos = true;
  if (formulario.nombre.value == "") {
    formulario.nombre.setAttribute("class", "form-control is-invalid");
    var parrafo_validar = document.getElementById("alerta-nombre");
    parrafo_validar.setAttribute("class", "text-danger");
    parrafo_validar.innerHTML = "Debe ingresar el nombre de usuario";
    datos_correctos = false;
  }
  if (formulario.clave.value == "") {
    formulario.clave.setAttribute("class", "form-control is-invalid");
    var parrafo_validar = document.getElementById("alerta-clave");
    parrafo_validar.setAttribute("class", "text-danger");
    parrafo_validar.innerHTML = "Debe ingresar la contraseña de usuario";
    datos_correctos = false;
  } 
  if (datos_correctos) {
    formulario.nombre.setAttribute("class", "form-control is-valid");
    formulario.clave.setAttribute("class", "form-control is-valid");
    document.getElementById("alerta-nombre").style.display="none"
    document.getElementById("alerta-clave").style.display="none"
    location.href="./home.html";
  }
}

