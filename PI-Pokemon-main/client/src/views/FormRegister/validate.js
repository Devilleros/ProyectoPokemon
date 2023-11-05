const regexEmail = /\S+@\S+\.\S+/ 
const regexPassw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

export function validate(input){
    let errors = {};
    if(!input.email){errors.email = "No puede estar vacio"}
    else if(input.email.length > 35){errors.email = "Demasiado largo"}
    else if(!regexEmail.test(input.email)){errors.email = "debe ser un correo"}
    else{errors.email = ""}

    if(!regexPassw.test(input.password)){errors.password = "debe ser una contraseña valida"}
    else{errors.password = ""}

    if(!input.name){errors.name = "No puede estar vacio"}
    else if(input.name.length < 6){errors.name = "Debe tener minimo 6 caracteres"}
    else{errors.name = ""}
    
    return errors
}