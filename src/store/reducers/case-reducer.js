export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CASE_FETCH':
      return { ...payload };
    case 'CASE_UPDATE':
      return { ...payload };
    default:
      return state;
  }
};
