export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ONE_NOTE':
      return action.payload;
    default:
      return state;
  }
};
