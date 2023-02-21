import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={style.div}>
      {characters.map((personaje, index) => {
        return (
          <Card
            key={index}
            name={personaje.name}
            species={personaje.species}
            gender={personaje.gender}
            id={personaje.id}
            image={personaje.image}
            onClose={() => onClose(personaje.id)}
            className={style.card}
          />
        );
      })}
    </div>
  );
}
