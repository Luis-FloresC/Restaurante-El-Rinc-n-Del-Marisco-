var validators = 
{
    "text":/^[A-Za-z\s]*$/,
    "correo":  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    "vacio": /^\s*$/,
    "doble_espacio":/\s{2,}/,
    "contrasenia": /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^\w\s]).{8,20}$/
};

var formInputs = 
{
    txtCorreo: null,
    txtNombreUsuario: null,
    txtContrasenia: null
};
  
var formInputsErrors = 
{
    txtCorreoErr: null,
    txtNombreUsuarioErr: null,
    txtContraseniaErr: null
};
  
document.addEventListener("DOMContentLoaded", function(e)
{
    formInputs.txtCorreo = document.getElementById("txtCorreo");
    formInputsErrors.txtCorreoErr = document.getElementById("txtCorreoErr");

    formInputs.txtNombreUsuario = document.getElementById("txtNombreUsuario");
    formInputsErrors.txtNombreUsuarioErr = document.getElementById("txtNombreUsuarioErr");
    
    formInputs.txtContrasenia = document.getElementById("txtContrasenia");
    formInputsErrors.txtContraseniaErr = document.getElementById("txtContraseniaErr");

    formInputs.txtCorreo.addEventListener("change", inputOnChange);
    formInputs.txtCorreo.addEventListener("blur", inputOnChange);
  
    formInputs.txtNombreUsuario.addEventListener("change", inputOnChange);
    formInputs.txtNombreUsuario.addEventListener("blur", inputOnChange);

    formInputs.txtContrasenia.addEventListener("change", inputOnChange);
    formInputs.txtContrasenia.addEventListener("blur", inputOnChange);

});

function inputOnChange(e)
{
    switch (e.target.name)
    {
        case "txtCorreo":

            if (validators.correo.test(e.target.value)) 
            {
                formInputsErrors.txtCorreoErr.innerHTML = "";
            } 
            else 
            {
                formInputsErrors.txtCorreoErr.innerHTML = "El correo no tiene el formato requerido";
                formInputs.txtCorreo.focus();
            }
          
            if (validators.vacio.test(e.target.value)) 
            {
                formInputsErrors.txtCorreoErr.innerHTML = "El correo es requerido";
                formInputs.txtCorreo.focus();
            } 
        break;

        case "txtNombreUsuario":

            if(validators.text.test(e.target.value))
            {
                formInputsErrors.txtNombreUsuarioErr.innerHTML = "";
            } 
            else 
            {
                formInputsErrors.txtNombreUsuarioErr.innerHTML = "El nombre de usaurio contiene caracteres no validos";
                formInputs.txtNombre.focus();
            }

            if (validators.doble_espacio.test(e.target.value))
            {
                formInputsErrors.txtNombreUsuarioErr.innerHTML = "No se pueden ingresar espacios seguidos";
            }
        
            if (validators.vacio.test(e.target.value)) 
            {
                formInputsErrors.txtNombreUsuarioErr.innerHTML = "El nombre de usuario es requerido";
                formInputs.txtNombreUsuario.focus();
            }
        break;

        case "txtContrasenia":
            if (validators.contrasenia.test(e.target.value)) 
            {
                formInputsErrors.txtContraseniaErr.innerHTML = "";
            } 
            else 
            {
                formInputsErrors.txtContraseniaErr.innerHTML = "La contraseña no es valida";
                formInputs.txtContrasenia.focus();
            }
          
            if (validators.vacio.test(e.target.value)) 
            {
                formInputsErrors.txtContraseniaErr.innerHTML = "La contraseña es requerida";
                formInputs.txtContrasenia.focus();
            } 
           
        break;
    }
}

const saveAsJson = () => {

    formInputs.txtCorreo = document.getElementById("txtCorreo").value;
    formInputs.txtNombreUsuario = document.getElementById("txtNombreUsuario").value;
    formInputs.txtContrasenia = document.getElementById("txtContrasenia").value;

    if(formInputs.txtCorreo!="" && txtNombreUsuario!="" && txtContrasenia!="")
    {
        let data = JSON.stringify(formInputs);
        download(data, 'json.txt', 'text/plain');
    }
    else
    {
        window.alert("Error debe llenar todos los campos");
    }
}

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}