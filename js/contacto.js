let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
const form = document.getElementById('user-form');//variables constantes para las validadaciones del formulario
const submitButton = document.getElementById('submit-btn');//variables constantes para las validadaciones del boton del formulario

let timeout = null;//variable para que nos se cargue con mucho texto cada input 

let errors = {//Declaracion de la validacion de las variables de cada input para los errores
  nickName: true,
  email: true,
  mensaje: true,
};

const mailformatRegex = /^[^@]+@\w+(\.\w+)+\w$/;//varible que usas las reglas para la validaciones del input de correo

document.querySelectorAll('.form-box').forEach((box) => {//Funcion donde se valida el keydow a cada input
  const boxInput = box.querySelector('input');           // y para que no se llene la memoria al escribir en cada input

  boxInput.addEventListener('keydown', (event) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(`Input ${boxInput.name} value: `, boxInput.value);

      validation(box, boxInput);
    }, 300);
  });
});

validation = (box, boxInput) => {//validacion de que no permita enviar el formulario si estan los campos vacios
  if (boxInput.value == '') {
    showError(true, box, boxInput);
  } else {
    showError(false, box, boxInput);
  }

  if (boxInput.name == 'email') {//Funcion para la validacion del email
    if (!boxInput.value.match(mailformatRegex)) {
      showError(true, box, boxInput);
    } else {
      showError(false, box, boxInput);
    }
  }

  submitController();//funcion que evalua si se cumplen las condiciones para habilitar el boton de enviar
};

showError = (check, box, boxInput) => {//validacion de los errores
  if (check) {
    box.classList.remove('form-success');//si ese cumpla la validacion del formulario que quite la alerta
    box.classList.add('form-error');// sino que ponga el mensaje de error
    errors[boxInput.name] = true;
  } else {
    box.classList.remove('form-error');
    box.classList.add('form-success');
    errors[boxInput.name] = false;
  }
};

submitController = () => {//funcion que valida los errores en cada input para activar o desactivar el boton de enviar
  console.log(errors);
  if (errors.nickName || errors.email || errors.mensaje ) {
    submitButton.toggleAttribute('disabled', true);//si esta true que no muestre el boton
  } else {
    submitButton.toggleAttribute('disabled', false);//si esta false que nos muestre el boton
  }
};

form.addEventListener('submit', (event) => {//funcion listener que escuche y almacena los datos escritos en el formulario en la consola
  event.preventDefault();
  const formData = new FormData(event.target);//crea un nuevo formData y almacena los datos en la consola
  console.log([...formData]);
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }
    else{
        document.querySelector('#scroll-top').classList.remove('active');
    }

}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
   setInterval (loader, 3000);
}

window.onload = fadeOut();

var inputs = document.getElementsByClassName('formulario__input');
for(var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length >=1){
            this.nextElementSibling.classList.add('fijar');
        }else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}
