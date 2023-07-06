import style from './SearchBar.module.css';
import { useState } from 'react';
import {IoPersonAddOutline} from 'react-icons/io5';

export default function SearchBar(props) {
   let {onSearch, onSearchRandom}=props;
   let [id, setId]=useState('');

   let handleChange = function(event){
      setId(event.target.value);
   }
   return (
      <div className={style.SearchBar}>
         <input placeholder='Ingrese Id...' value={id} onChange={handleChange} className={style.input} type='search'/>

         <IoPersonAddOutline className={style.boton} onClick={()=> {onSearch(id)}}/>
         <button className={style.boton} onClick={onSearchRandom}>Random</button>
      </div>
   );
}