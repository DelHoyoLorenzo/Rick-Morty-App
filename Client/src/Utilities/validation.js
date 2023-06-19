
export default function validate(userData) {
    //inputs es basicamente el texto que
    //esta escribiendo el usuario
    //sea en cualquiera de los 3 inputs que tenemos
    let errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;

    if (!userData.email) {
      errors.email = "Se requiere un mail";
    }
    if (userData.email.length >35){
        errors.email = 'El mail no puede superar los 35 caracteres';
    }

    if (!regexEmail.test(userData.email)) {
      errors.email = "Debe ser un correo electrónico";
    }
    if (!/\d/.test(userData.password)) {// 
      errors.password = "Se requiere una contraseña de por lo menos un numero";
    }

    if (userData.password.length<6 || userData.password.length>10) {
        errors.password = "Se requiere una contraseña entre 6 y 10 numeros";
      }
    return errors;
  }