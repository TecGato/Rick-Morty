import axios from 'axios';

export function addMyFavorites(character) {
  // return {
  //   type: 'ADDMYFAVORITES',
  //   payload: character,
  // };
  return async (dispatch) => {
    console.log(character);
    const response = await axios.post(
      'http://localhost:3001/rickandmorty/fav',
      character
    );
    const data = response.data;
    return dispatch({
      type: 'ADDMYFAVORITES',
      payload: data,
    });
  };
}

// export function getAllFavorite() {
//   return async () => {
//     const response = await axios.get('http://localhost:3001/rickandmorty/fav');
//     const data = response.data;
//     return dispatch({
//       type: 'GETALLFAVORITES',
//       payload: data,
//     });
//   };
// }

export function deleteFavorites(id) {
  // return {
  //   type: 'DELETEFAVORITES',
  //   payload: id,
  // };
  return async (dispatch) => {
    const response = await axios.delete(
      `http://localhost:3001/rickandmorty/fav/${id}`
    );
    const data = response.data;
    return dispatch({
      type: 'DELETEFAVORITES',
      payload: data,
    });
  };
}

export function filterCards(status) {
  return {
    type: 'FILTER',
    payload: status,
  };
}

export function orderCards(id) {
  return {
    type: 'ORDER',
    payload: id,
  };
}
