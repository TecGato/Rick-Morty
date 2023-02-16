import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Card.module.css';
import { addMyFavorites, deleteFavorites } from '../../redux/actions';
import { useState, useEffect } from 'react';

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorites(props.id);
    } else {
      setIsFav(true);
      props.addMyFavorites(props);
    }
  };

  useEffect(() => {
    for (let i = 0; i < props.myFavorites.length; i++) {
      if (props.myFavorites[i].id === props.id) {
        setIsFav(true);
      }
    }
  }, [props.myFavorites]);

  return (
    <div className={style.div}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={props.onClose} className={style.button}>
        X
      </button>
      <Link to={`/detail/${props.id}`}>
        <h2 className={style.name}>{props.name}</h2>
      </Link>
      <h2 className={style.specie}>{props.species}</h2>
      <h2 className={style.gender}>{props.gender}</h2>
      <h2>Id :{props.id}</h2>
      <img src={props.image} alt='Imagen de Rick' className={style.image} />
    </div>
  );
}

export function mapDispatchtoProps(dispatch) {
  return {
    addMyFavorites: (character) => {
      dispatch(addMyFavorites(character));
    },
    deleteFavorites: (id) => {
      dispatch(deleteFavorites(id));
    },
  };
}

export function mapStatetoProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Card);
