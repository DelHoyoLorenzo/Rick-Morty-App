import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards({characters,onClose}) {
   return (
   <div className={style.cartas}>
      {characters && characters.map((character)=>{
         return <Card className={style.cartas} key={character.id} character={character} onClose ={onClose} />
      })}
   </div>
   );
}
