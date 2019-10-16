
export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'TOKEN_SAVE':
      return payload;
    case 'TOKEN_REMOVE':
      return payload;
    default:
      return state;
  }
};
