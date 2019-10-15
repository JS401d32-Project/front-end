export default (state = {}, { type, payload }) => {
  // TODO: Jo & Leyla - Will write cases tomorrow
  switch (type) {
    case 'CASE_CREATE':
      break;
    case 'CASE_UPDATE':
      return { ...state, payload };
    default:
      return state;
  }
};
