import SearchBar from '../SearchBar/SearchBar.jsx';
import style from './Nav.module.css';
import imagen from '../Assets/logo.jpg'
import { Link } from 'react-router-dom';

export default function Nav(props){
    
    let {onSearch, onSearchRandom, logOut}=props;
    
    let texto ='Agregue su personaje por su Id';

    return(

        <div className={style.nav}>
            <div className={style.tituloYBotones}>
                <div className={style.botones}>
                    <Link to='/about'>
                        <button>About</button>
                    </Link>
                    
                    <Link to='/home'>
                        <button>Home</button>
                    </Link>

                    <Link to='/favorites'>
                        <button>Favorites</button>
                    </Link>    
                    <button onClick={logOut}>Log out</button>

                </div>
            
                <h1 className={style.titulo}>Rick and Morty App</h1>


            </div>
            
            <img className={style.imagen} src={imagen}/>

            <div className={style.sectorBar}>
                <h2 >{texto}</h2>
                <SearchBar onSearch={onSearch} />
                <button onClick={onSearchRandom}>Random</button>
            </div>
            
         </div>


    );
}