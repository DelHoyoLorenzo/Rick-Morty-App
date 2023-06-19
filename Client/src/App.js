import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';


import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';

import About from './views/About/About.jsx';
import Detail from './views/Detail/Detail.jsx';
import Error from './views/Error/Error.jsx'
import Form from './views/Form/Form.jsx';
import Favorites from './views/Favorites/Favorites.jsx';

import { removeFav } from './redux/actions.js';
import {connect} from 'react-redux';

import axios from "axios";

function App({removeFav}) {
   let [characters,setCharacters] = useState([]);
   
   let onClose=function(id){
      const filtrados = characters.filter((elem)=>elem.id !== id);

      setCharacters(filtrados);
      removeFav(id);
   }

   function onSearchRandom(){
      let ident=Math.floor(Math.random()*826)+1;
      onSearch(ident);
   }
   
   function onSearch(id){
      if(!characters.find((elem)=> elem.id === parseInt(id))){                                          
         fetch(`http://localhost:3001/rickandmorty/character/${id}`)
         .then((res)=>res.json())
         .then((data)=>{
            setCharacters((oldChars) => [...oldChars, data]);
         }).
         catch((error)=> window.alert('No hay personajes con ese Id'))
      }
   }
   
   let location = useLocation();
   const navigate = useNavigate();
   const [access,setAccess]= useState(false);

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   useEffect(() => { //hace que mi pagina tenga acceso al momento de la carga
      !access && navigate('/');//en el mount el access es false
   }, [access,navigate]); //cada vez que el acceso de mi pagina cambie, vuelvo a ejecutar la funcion

   function logOut(){
      setAccess(false);
      navigate('/');
   }

   return (
      <div>
      {location.pathname !=='/' && <Nav onSearch={onSearch} onSearchRandom={onSearchRandom} logOut={logOut}/> }

      <Routes>
         <Route path='/favorites' element={<Favorites onClose={onClose}/>} />
         <Route path='/about' element={<About />}/>
         <Route path='/detail/:id' element={<Detail />}/>
         <Route path='/' element={<Form login={login} />}/>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} onSearchRandom={onSearchRandom}/>}/>
         <Route path='*' element={<Error />}/>
      </Routes>
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
     removeFav: (id) => {
       return dispatch(removeFav(id));
     },
   };
 }

 export default connect(null, mapDispatchToProps)(App);