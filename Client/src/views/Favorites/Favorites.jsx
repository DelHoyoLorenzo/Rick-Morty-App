import Card from "../../components/Card/Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions.js";
import { useState } from "react";
import style from "./Favorites.module.css";

export function Favorites({ onClose }) {
  let dispatch = useDispatch();
  let myFavorites = useSelector((state) => state.myFavorites);

  const [aux, setAux] = useState(false);

  let handleOrder = function (e) {
    dispatch(orderCards(e.target.value));
    setAux(true);
  };

  let handleFilter = function (e) {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className={style.contenedor}>
      <div className={style.contenedorBotones}>
        <select onChange={handleOrder} className={style.boton}>
          <option value="Sort">Sort</option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter} className={style.boton}>
          <option value="Filter">Filter</option>
          <option value="AllCharacters">AllCharacters</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      {!myFavorites.length && (
        <div className={style.contenedorTexto}>
          <div className={style.textoAnimado}>¡Agregue sus personajes favoritos!</div>
        </div>
      )}
      <div className={style.cartas}>
        {myFavorites.map((personaje) => {
          return (
            <Card key={personaje.id} character={personaje} onClose={onClose} />
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
