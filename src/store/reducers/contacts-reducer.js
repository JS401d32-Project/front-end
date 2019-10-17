export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CONTACTS':
      return action.payload;
    case 'FETCH_CONTACT':
      return [...state, action.payload];
    case 'ADD_CONTACT':
      return [...state, action.payload];
    default: 
      return state;
  }   
};
