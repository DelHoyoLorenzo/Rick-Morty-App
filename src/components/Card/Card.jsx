import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

export function Card(props) {
  
  let { character, onClose , myFavorites, removeFav, addFav} = props;

  const navigate = useNavigate();

  let navigateHandler = function () {
    navigate(`/detail/${character.id}`);
  };

  let [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  let handleFavorite = function () {
    if(!isFav) {
      setIsFav(true);
      addFav(character);
    } else {
      setIsFav(false);
      removeFav(character.id);
    }
  };
//al momento de conectarme, cada vez q recargue mi pagina
/* cada vez q mi estado global myFavorites se modifique el useEffect se vuelve a ejecutar */

  return (
    <div className={style.carta}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      {/* <Link to={`/detail/${character.id}`}>
        
      </Link> */}
      <h2 className={style.tituloCarta}>{character.name}</h2>
      {/* <h2 className={style.texto}>{character.status}</h2> */}
      <h2 className={style.texto}>{character.species}</h2>
      <h2 className={style.texto}>{character.gender}</h2>
      {/* <h2 className={style.texto}>{character.origin.name}</h2> */}
      <img
        className={style.imagen}
        src={character.image}
        alt={character.name}
        onClick={navigateHandler}
      />
      <button className={style.boton} onClick={() => onClose(character.id)}>
        Eliminar
      </button>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => {
      return dispatch(addFav(character));
    },
    removeFav: (id) => {
      return dispatch(removeFav(id));
    },
  };
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
