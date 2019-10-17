export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CASE_FETCH':
      return { ...payload };
    case 'CASE_UPDATE':
      return {
        ...state,
        status: payload.status,
        referralType: payload.referralType,
        legalPlan: payload.legalPlan,
      };
    case 'CASE_CREATE':
      return {
        state, payload,
      };
    default:
      return state;
  }
};
