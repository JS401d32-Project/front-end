export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CASE_UPDATE_INITIAL':
      if (payload.legalPlan) {
        return { ...state, legalPlan: payload.legalPlan };
      }
      if (payload.caseType) {
        return { ...state, caseType: payload.caseType };
      }
      if (payload.referralType) {
        return { ...state, referralType: payload.referralType };
      }
    default: // eslint-disable-line no-fallthrough
      return state;
  }
};
