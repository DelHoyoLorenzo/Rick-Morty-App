import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";

export function Card({character, onClose}) {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  
  let allCharacters = useSelector((state)=> state.allCharacters)
  

  let navigateHandler = function () {
    navigate(`/detail/${character.id}`);
  };

  let [isFav, setIsFav] = useState(false);

  useEffect(() => {
    allCharacters.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [allCharacters, character.id]);
  /*al momento de conectarme, cada vez q recargue mi pagina
   cada vez q mi estado global allcharacter se modifique el useEffect se vuelve a ejecutar */
  
  let handleFavorite = function () {
    if(!isFav) {
      setIsFav(true);
      dispatch(addFav(character));
    } else {
      setIsFav(false);
      dispatch(removeFav(character.id));
    }
  };

  return (
    <div className={style.carta}>
      {isFav ? (
        <button className={style.botonFav} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={style.botonFav} onClick={handleFavorite}>🤍</button>
      )}
      <h2 className={style.tituloCarta}>{character.name}</h2>
      <img
        className={style.imagen}
        src={character.image}
        alt={character.name}
        onClick={navigateHandler}
      />
      <button className={style.boton} onClick={()=> onClose(character.id)}>
        Eliminar
      </button>
    </div>
  );
}


export default Card;

/*CON COMPONENTE DE CLASE SERIA ASI 
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
} */