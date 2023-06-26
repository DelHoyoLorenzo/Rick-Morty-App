import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Nav(props) {
  let { onSearch, onSearchRandom, logOut } = props;
  let location = useLocation();
  return (
    <div className={style.sectorBarraNav}>
      <div>
        <h1 className={style.titulo}>Rick and Morty App</h1>
      </div>
      <div className={style.sectorBotones} >
        <Link to="/about">
          <button className={style.boton}>About</button>
        </Link>

        <Link to="/home">
          <button className={style.boton}>Home</button>
        </Link>

        <Link to="/favorites">
          <button className={style.botonFav}>Favorites</button>
        </Link>
        <div>
          <button className={style.boton} onClick={logOut}>
            Log out
          </button>
        </div>
      </div>

      {(location.pathname === '/home') && (<div className={style.sectorBar}>
        <SearchBar onSearch={onSearch} onSearchRandom={onSearchRandom} />
      </div>) }
    </div>
  );
}
