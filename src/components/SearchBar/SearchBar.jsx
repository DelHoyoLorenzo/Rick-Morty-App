import style from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
   let {onSearch, onSearchRandom}=props;
   let [id, setId]=useState('');

   let handleChange = function(event){
      setId(event.target.value);
   }
   return (
      <div className={style.SearchBar}>
         <input placeholder='Ingrese Id del personaje' value={id} onChange={handleChange} className={style.input} type='search'/>

         <button className={style.boton} onClick={()=> {onSearch(id)}}>Agregar</button>
         <button className={style.boton} onClick={onSearchRandom}>Random</button>
      </div>
   );
}