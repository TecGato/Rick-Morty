const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDMYFAVORITES':
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case 'DELETEFAVORITES':
      return {
        myFavorites: state.myFavorites.filter(
          (elemento) => elemento.id !== action.payload
        ),
      };
    case 'FILTER':
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (elemento) => elemento.gender === action.payload
        ),
      };
    case 'ORDER':
      let array = [];
      if (action.payload === 'Ascendente') {
        console.log('ascendente');
        array = state.allCharacters.sort((a, b) => a.id - b.id);
      } else if (action.payload === 'Descendente') {
        console.log('descendente');
        array = state.allCharacters.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: array,
      };

    default:
      return { ...state };
  }
};

export default reducer;
