import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { orderCards, filterCards } from '../../redux/actions';
import style from './favorites.module.css';

function Favorites(props) {
  const { favoritos } = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  useEffect(() => {}, [favoritos]);

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={style.container}>
      <div className={style.options}>
        <select onChange={handlerOrder}>
          <option value='order' disabled='disabled'>
            Order by
          </option>
          <option value='Ascendente'>Ascendente</option>
          <option value='Descendente'>Descendente</option>
        </select>
        <select onChange={handlerFilter}>
          <option value='filter' disabled='disabled'>
            Filter by
          </option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>unknown</option>
        </select>
      </div>
      <div className={style.cards}>
        {props.myFavorites.map((elemento) => {
          return (
            <div className={style.card}>
              <h2 className={style.text}>{elemento.name}</h2>
              <h2 className={style.text}>{elemento.id}</h2>
              <img src={elemento.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function mapStatetoProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStatetoProps, null)(Favorites);
