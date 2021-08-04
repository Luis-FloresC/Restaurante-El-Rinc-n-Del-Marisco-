var validators = 
{
    "text":/^[A-Za-z\s]*$/,
    "telefono": /^(\+?\(?504\)?\s?)?[13456789]\d{3}-?\d{4}$/,
    "vacio": /^\s*$/,
    "doble_espacio":/\s{2,}/
};

var formInputs = 
{
    txtNombre: null,
    txtTelefono: null
};
  
var formInputsErrors = 
{
    txtNombreErr: null,
    txtTelefonoErr: null
};
  
document.addEventListener("DOMContentLoaded", function(e)
{
    formInputs.txtNombre = document.getElementById("txtNombre");
    formInputsErrors.txtNombreErr = document.getElementById("txtNombreErr");

    formInputs.txtTelefono = document.getElementById("txtTelefono");
    formInputsErrors.txtTelefonoErr = document.getElementById("txtTelefonoErr");

    

    formInputs.txtNombre.addEventListener("change", inputOnChange);
    formInputs.txtNombre.addEventListener("blur", inputOnChange);
  
    formInputs.txtTelefono.addEventListener("change", inputOnChange);
    formInputs.txtTelefono.addEventListener("blur", inputOnChange);

    formInputs.txtCorreo.addEventListener("change", inputOnChange);
    formInputs.txtCorreo.addEventListener("blur", inputOnChange);
  
    formInputs.txtAsunto.addEventListener("change", inputOnChange);
    formInputs.txtAsunto.addEventListener("blur", inputOnChange);

    formInputs.txtMensaje.addEventListener("change", inputOnChange);
    formInputs.txtMensaje.addEventListener("blur", inputOnChange);
});


function inputOnChange(e)
{
    console.log("Cambio en " + e.target.name);

    switch (e.target.name)
    {
        case "txtNombre":

            if(validators.text.test(e.target.value))
            {
                formInputsErrors.txtNombreErr.innerHTML = "";
            } 
            else 
            {
                formInputsErrors.txtNombreErr.innerHTML = "El nombre contiene caracteres extraños.";
                formInputs.txtNombre.focus();
            }

            if (validators.doble_espacio.test(e.target.value))
            {
                formInputsErrors.txtNombreErr.innerHTML = "No se pueden ingresar espacios seguidos.";
            }
        
            if (validators.vacio.test(e.target.value)) 
            {
                formInputsErrors.txtNombreErr.innerHTML = "El nombre es requerido.";
                formInputs.txtNombre.focus();
            }

        break;

        case "txtTelefono":

            if (validators.vacio.test(e.target.value)) 
            {
                formInputsErrors.txtTelefonoErr.innerHTML = "";
            } 
            else 
            {
                if(validators.telefono.test(e.target.value))
                {
                    formInputsErrors.txtTelefonoErr.innerHTML = "";
                }
                else
                {
                    formInputsErrors.txtTelefonoErr.innerHTML = "El celular no es valido."
                    formInputs.txtTelefono.focus();
                }
            }

        break;

        

        

        

    }
}