import react, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState('');
  const navegar = useNavigate();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch((err) => {
        window.alert('No hay personajes con ese ID');
      });
    return setCharacter({});
  }, []);
  return (
    <div>
      <button onClick={() => navegar('/home')}>Atras</button>
      <h1>Nombre: {character.name}</h1>
      <h2>Estatus: {character.status}</h2>
      <h2>Especie: {character.specie}</h2>
      <h2>Genero: {character.gender}</h2>
      <h2>Origen: {character.origin?.name}</h2>
      <img src={character.image} />
    </div>
  );
}
