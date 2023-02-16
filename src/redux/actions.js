export function addMyFavorites(character) {
  return {
    type: 'ADDMYFAVORITES',
    payload: character,
  };
}

export function deleteFavorites(id) {
  return {
    type: 'DELETEFAVORITES',
    payload: id,
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
