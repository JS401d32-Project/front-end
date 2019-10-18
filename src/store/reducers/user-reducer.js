
export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'PROFILE_SAVE':
      return { ...payload };
    case 'PROFILE_REMOVE':
      return payload;
    default:
      return state;
  }
};
