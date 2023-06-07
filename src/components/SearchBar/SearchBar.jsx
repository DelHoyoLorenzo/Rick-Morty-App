import style from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
   let {onSearch}=props;
   let [id, setId]=useState('');

   let handleChange = function(event){
      setId(event.target.value);
   }
   return (
      <div className={style.SearchBar}>
         <input value={id} onChange={handleChange} className={style.input} type='search'/>

         <button className={style.input} onClick={()=> {onSearch(id)}}>Agregar</button>
      </div>
   );
}