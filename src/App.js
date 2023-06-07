import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';

import style from './App.module.css';

import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';

import About from './views/About/About.jsx';
import Detail from './views/Detail/Detail.jsx';
import Error from './views/Error/Error.jsx'
import Form from './views/Form/Form.jsx';
import Favorites from './views/Favorites/Favorites.jsx';

function App() {
   let [characters,setCharacters] = useState([]);
   
   let onClose=function(id){
      const filtrados = characters.filter((elem)=>elem.id !== id);

      setCharacters(filtrados);
   }

   function onSearchRandom(){
      let ident=Math.floor(Math.random()*826)+1;
      
      if(!characters.find((elem)=> elem.id === ident)){                                          
         fetch(`https://rickandmortyapi.com/api/character/${ident}`)
         .then((res)=>res.json())
         .then((data)=>{if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }});
      }else{
         window.alert('Ya esta repetido');
      }

   }
   
   function onSearch(id){
      if(! characters.find((elem)=> elem.id === parseInt(id))){                                          
         fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then((res)=>res.json())
         .then((data)=>{if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }});
      }/* else{
         window.alert('Ya esta repetido');
      } */
   }
   
   let location = useLocation();
   const navigate = useNavigate();
   const [access,setAccess]= useState(false);

   const EMAIL = 'delhoyo.lorenzo@gmail.com';
   const PASSWORD = '123456';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => { //hace que mi pagina tenga acceso al momento de la carga
      !access && navigate('/');//en el mount el access es false
   }, [access]); //cada vez que el acceso de mi pagina cambie, vuelvo a ejecutar la funcion

   function logOut(){
      setAccess(false);
      navigate('/');
   }

   return (
      <div>
      
      {location.pathname !=='/' && <Nav onSearch={onSearch} onSearchRandom={onSearchRandom} logOut={logOut}/> }
      
      
      <Routes>
         <Route path='/favorites' element={<Favorites/>}></Route>
         <Route path='/about' element={<About />}/>
         <Route path='/detail/:id' element={<Detail />}/>
         <Route path='/' element={<Form login={login} />}/>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='*' element={<Error />}/>
      </Routes>
      </div>
   );
}

export default App;
