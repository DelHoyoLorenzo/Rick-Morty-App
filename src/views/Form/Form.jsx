import { useState } from "react";
import validate from '../../Utilities/validation.js'
import style from './Form.module.css'

export default function Form({login}){
    const [userData, setUserData]=useState({
        email:'',
        password:'',
    });

    const [errors, setErrors] = useState({
        email:'',
        password:'',
      });

    const handleChange = function (event) {
        setUserData({
          ...userData,
          [event.target.name]: event.target.value, //event.target es el input de la pagina
          //le digo que el primer lugar del array osea inputs
          //en su popriedad name, email o message ponga el valor del
          //input, o sea lo que escribie el usuario
          //se podria hacer inputs.name = event.target.value
          //me deja vacias las otras propiedades
        });
    
        setErrors(
          validate({
            ...userData,
            [event.target.name]: event.target.value,
          })
        );
      };

    const handleSubmit = function (event) {
        event.preventDefault();
        if(!errors.email && !errors.password){
          login(userData);
        }else{
          alert('Datos incorrectos');
        }
      };
      
    
    return(
      <div className={style.conteinerForm}>
        <form onSubmit={handleSubmit} className={style.form}> {/* porque el boton es de tipo submit */}
            <label className={style.label}>Introduzca su email</label>
            <input
            className={style.label}
            onChange={handleChange}
            name='email'
            value={userData.email}
            type='text'
            placeholder="Escribe tu email..."
            />
            {errors.email && <p className={style.danger}>{errors.email}</p>}

            <label className={style.label}>Contraseña</label>
            <input
            className={style.label}
            onChange={handleChange}
            name='password'
            value={userData.password}
            type='password'
            placeholder="Escribe tu password..."
            />
            {errors.password && <p className={style.danger}>{errors.password}</p>}
            <button className={style.boton} type="submit">SUBMIT</button>
        </form>
        </div>  
    )
}