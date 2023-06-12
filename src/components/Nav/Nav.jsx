import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import imagen from "../../Assets/logo.jpg";
import { Link } from "react-router-dom";

export default function Nav(props) {
  let { onSearch, onSearchRandom, logOut } = props;

  return (
    <div className={style.nav}>
      <div /* className={style.botones} */>
        <h1 className={style.title}>Rick and Morty App</h1>
      </div>
      <div className={style.sectorBotones} >
        <Link to="/about">
          <button className={style.boton}>About</button>
        </Link>

        <Link to="/home">
          <button className={style.boton}>Home</button>
        </Link>

        <Link to="/favorites">
          <button className={style.boton}>Favorites</button>
        </Link>
        <div>
          <button className={style.boton} onClick={logOut}>
            Log out
          </button>
        </div>
      </div>

      {/* <img className={style.imagen} src={imagen} alt='imagen'/> */}

      <div className={style.sectorBar}>
        <SearchBar onSearch={onSearch} onSearchRandom={onSearchRandom} />
      </div>
    </div>
  );
}
