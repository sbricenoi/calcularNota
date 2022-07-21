//Almacenar
function store() {
  let name = document.getElementById("name");
  let pw = document.getElementById("pw");
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if (name.value.length == 0) {
    //alert('Por favor completar email');
    Toastify({
      text: "Por favor completar email",
      duration: 3000,
      //destination: "none",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #235bd5, #96c93d)",
      },
      onClick: function () {},
    }).showToast();
  } else if (pw.value.length == 0) {
    //alert('Por favor completar password');
    Toastify({
      text: "Por favor completar password",
      duration: 3000,
      //destination: "",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #235bd5, #96c93d)",
      },
      onClick: function () {},
    }).showToast();
  } else if (name.value.length == 0 && pw.value.length == 0) {
    //alert('Por favor completar email y password');
    Toastify({
      text: "Por favor completar email y password",
      duration: 3000,
      //destination: "",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #235bd5, #96c93d)",
      },
      onClick: function () {},
    }).showToast();
  } else if (pw.value.length > 8) {
    //alert('Maximo 8 caracteres');
    Toastify({
      text: "Maximo 8 caracteres",
      duration: 3000,
      //destination: "",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #235bd5, #96c93d)",
      },
      onClick: function () {},
    }).showToast();
  } else if (!pw.value.match(numbers)) {
    //alert('Por favor agregar un caracter numerico');
    Toastify({
      text: "Por favor agregar un caracter numerico",
      duration: 3000,
      //destination: "",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #235bd5, #96c93d)",
      },
      onClick: function () {},
    }).showToast();
  } else if (!pw.value.match(upperCaseLetters)) {
    //alert('Por favor agregar una mayuscula');
    Toastify({
      text: "Por favor agregar una mayuscula",
      duration: 3000,
      //destination: "",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #235bd5, #96c93d)",
      },
      onClick: function () {},
    }).showToast();
  } else if (!pw.value.match(lowerCaseLetters)) {
    //alert('Por favor agregar una minuscula');
    Toastify({
      text: "Por favor agregar una minuscula",
      duration: 3000,
      //destination: "",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #235bd5, #96c93d)",
      },
      onClick: function () {},
    }).showToast();
  } else {
    localStorage.setItem("name", name.value);
    localStorage.setItem("pw", pw.value);
    //alert('Su usuario ha sido creado');
    Toastify({
      text: "Su usuario ha sido creado",
      duration: 3000,
      //destination: "",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #235bd5, #96c93d)",
      },
      onClick: function () {},
    }).showToast();
  }
}

//Chequear
function check() {
  let storedName = localStorage.getItem("name");
  let storedPw = localStorage.getItem("pw");

  let userName = document.getElementById("userName");
  let userPw = document.getElementById("userPw");
  let userRemember = document.getElementById("rememberMe");

  if (userName.value == storedName && userPw.value == storedPw) {
    window.location.href = "index.html";
  } else {
    alert(storedPw == userPw.value);
    Swal.fire({
      title: "Error de validacion",
      text: "Error de usuario o password",
      icon: "error",
      confirmButtonText: "Ok",
    });
  }
}
