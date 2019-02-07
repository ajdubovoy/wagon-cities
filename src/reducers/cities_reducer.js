const citiesReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialization
    return [];
  }

  switch (action.type) {
    case 'SET_CITIES':
      return action.payload;
    case 'SELECT_CITY':
      return action.payload;
    default:
      return state;
  }
};

export default citiesReducer;
