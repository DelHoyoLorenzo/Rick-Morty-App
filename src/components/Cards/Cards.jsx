import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards(props) {
   let {characters,onClose}=props;
   return (
   <div className={style.cartas}>
      {characters.map((character)=>
         <Card className={style.cartas} /* key={character.id} */ character={character} onClose ={onClose}/>
      )}
   </div>
   );
}
