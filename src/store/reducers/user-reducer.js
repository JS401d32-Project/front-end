
export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'TOKEN_SAVE':
      return payload;
    default:
      return state;
  }
};
