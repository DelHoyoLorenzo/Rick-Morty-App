import Card from '../../components/Card/Card.jsx'
import {connect} from "react-redux";
import { useDispatch } from 'react-redux';
import {filterCards,orderCards} from '../../redux/actions.js'
import {useState} from 'react'
import {onClose} from '../../App.js'
import style from './Favorites.module.css'

export function Favorites({myFavorites, onClose}){
    let dispatch = useDispatch();
    
    const [aux, setAux]=useState(false);

    let handleOrder = function(e){
        dispatch(orderCards(e.target.value));
        setAux(true);
    }

    let handleFilter = function(e){
        dispatch(filterCards(e.target.value));
    }
    
    return(
        <div className={style.contenedor}>
            <div className={style.contenedorBotones}>
                <select onChange={handleOrder} className={style.boton}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={handleFilter} className={style.boton}>
                    <option value="AllCharacters">AllCharacters</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className={style.cartas}>
                {myFavorites.map((personaje)=>{ 
                    return <Card key={personaje.id} character={personaje} onClose={onClose} />}
                )}
            </div>
        </div>
    );
}

export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }//me traigo del estado global a su propiedad myFavorites
}

export default connect(mapStateToProps, null)(Favorites);