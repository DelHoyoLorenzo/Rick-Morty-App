import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";

import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addChar, removeFav, removeChar} from "./redux/actions.js";
import About from "./views/About/About.jsx";
import Detail from "./views/Detail/Detail.jsx";
import Error from "./views/Error/Error.jsx";
import Form from "./views/Form/Form.jsx";
import Favorites from "./views/Favorites/Favorites.jsx";

import axios from "axios";

function App() {
  /* let [characters, setCharacters] = useState([]); */
  
  let dispatch = useDispatch();
  let characters = useSelector((state)=> state.characters);

  let onClose = function (id) {
    dispatch(removeChar(id));
    dispatch(removeFav(id));
  };

  function onSearchRandom() {
    let ident = Math.floor(Math.random() * 826) + 1;
    onSearch(ident);
  }

  async function onSearch(id) {
    /* try {
      if (!characters.find((elem) => elem.id === id)) {
        let response = await fetch(
          `http://localhost:3001/rickandmorty/character/${id}`
        );
        let data = await response.json();

        setCharacters((oldChars) => [data, ...oldChars]);
      }
    } catch (error) {
        alert("No hay personajes con ese Id");
    } */
    dispatch(addChar(id));
  }

  let location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(true);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";

      let response = await axios(URL + `?email=${email}&password=${password}`);
      let data = response.data;

      const { access } = data;
      setAccess(data);
      if(access){
        /* await axios.delete(URL) */
        navigate("/home");
      }
    } catch (error) {
      alert('Email o contraseña incorrecto')
    }
  }

  useEffect(() => {
    //hace que mi pagina tenga acceso al momento de la carga
    !access && navigate("/"); //en el mount el access es false
  }, [access, navigate]); //cada vez que el acceso de mi pagina cambie, vuelvo a ejecutar la funcion

  function logOut() {
    setAccess(false);
    navigate("/");
  }

  return (
    <div>
      {location.pathname !== "/" && (
        <Nav
          onSearch={onSearch}
          onSearchRandom={onSearchRandom}
          logOut={logOut}
        />
      )}
      {/* <div className="video-background">
        <video className="video" loop muted autoPlay>
          <source
            src="./Assets/morty-in-the-space-video.mp4"
            type="video/mp4"
          />
        </video>
      </div> */}
      <Routes>
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={
            <Cards
              characters={characters}
              onClose={onClose}
              onSearchRandom={onSearchRandom}
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
