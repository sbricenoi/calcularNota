'use strict'
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

//add event del formulario login
var loginForm = document.getElementById("login-form");
loginForm.addEventListener('submit', (event) => {
  event.preventDefault() //evitamos que se envíe el formulario y refresque la pagina
  let userPw = document.getElementById("userPw").value;
  let userRemember = document.getElementById("userName").value;
  getDatos(userRemember,userPw).then((res)=>{ // llamamos a la funcion de consulta datos utilizando then para esperar a que llegue la información
    //console.log(res);
    let existe = 0;
    let usuariovalidar;
    if(res.usuarios.length>0){ //validamos si existen datos
      for(let u=0;u<res.usuarios.length;u++){
        //console.log("validando usuario",res.usuarios[u].email,"-",userRemember)

        if(existe==0){
          if(res.usuarios[u].email==userRemember){
            usuariovalidar = res.usuarios[u];
            existe = 1;
            console.log("existe");
          }
        }
      }
      if(existe==1){ // validamos si existe el email dentro del json
        //validamos pass
        //console.log(usuariovalidar);
        //console.log(usuariovalidar.password,"-",userPw)
        if(usuariovalidar.password===userPw){ // validamos pass
          window.location.href = 'index.html';
        }else{
          document.getElementById("mensaje-error").innerHTML = "error password";
        }
      }else{
        document.getElementById("mensaje-error").innerHTML = "usuario no existe";
      }
    }

  })
  
});

async function getDatos(usr,pass) {
  //let url = 'https://pokeapi.co/api/v2/pokemon';
  let url = './datos.json';
  //let body = {a: 1, b: 'Textual content'};
  try {
      let res = await fetch(url); // traemos la data por fetch
      return res.json(); //parseamos a json y retornamos
  } catch (error) {
      console.log(error);
  }
}
/*function check() {

  //let storedName = localStorage.getItem("name");
  //let storedPw = localStorage.getItem("pw");
  
  return false;
  /*let userName = document.getElementById("userName");
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


}*/
