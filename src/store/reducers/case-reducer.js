export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CASE_FETCH':
      return { ...payload };
    case 'CASE_UPDATE':
      return {
        ...state,
        status: payload.caseStatus,
        referralType: payload.referralType,
        legalPlan: payload.legalPlan,
      };
    default:
      return state;
  }
};
