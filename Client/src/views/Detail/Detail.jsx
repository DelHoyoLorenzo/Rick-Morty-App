import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from './Detail.module.css'

export default function Detail(){
    const{id} = useParams();

    const [character,setCharacter] = useState([]);

    const [loading, setLoading]= useState(true);
    
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
           .then(response => response.json())
           .then(data => {
              if (data.name) {
                 setCharacter(data);
    
              } else {
                 window.alert('No hay personajes con ese ID');
              }
              setLoading(false);
           })
           /* .catch(error => {
              console.log('Error:', error);
           }); */
     
        return () => {
           setCharacter({});
        };
     }, [id]);

    if(Object.keys(character).length !== 0){
            return( 
            <div className={style.detailConteiner} >
               <img className={style.imagen} src={character.image} alt={character.name} />
               
               <div className={style.textos}> 
                  <h2 /* className={style.tituloCarta} */>Name: {character.name}</h2>
                  <h2 /* className={style.texto} */>Status: {character.status}</h2>
                  <h2 /* className={style.texto} */>Specie:{character.species}</h2>
                  <h2 /* className={style.texto} */>Gender:{character.gender}</h2>
                  <h2 /* className={style.texto} */>Origin: {character.origin}</h2>
               </div>
            </div>
             );
        }else{
            return <div>NO</div>
        }
}