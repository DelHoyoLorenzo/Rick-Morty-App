import style from "./About.module.css";
import imagen from "../../Assets/fotoDePerfil.jpeg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={style.aboutConteiner}>
      <Link to="/home">
        <button className={style.botonHome}>Home</button>
      </Link>

      <img className={style.imagen} src={imagen} alt="foto de perfil" />
      <div className={style.texto}>
        <p>Mi nombre es Lorenzo Martin del Hoyo, tengo 24 años.</p>
        <p>Soy de la ciudad de Mar del Plata Argentina</p>
        <p>Soy Full Stack Developer y me encuentro en mi etapa de desarollo</p>
        <div>
          <Link
            to="https://www.linkedin.com/in/lorenzo-martin-del-hoyo-8044071bb/
" target="_blank" >
            <button className={style.boton}>LinkedIn</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
