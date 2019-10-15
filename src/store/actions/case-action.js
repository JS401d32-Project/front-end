const getCaseAction = (data) => ({
  type: 'CASE_FETCH',
  payload: data,
});

const updateCaseAction = (data) => ({
  type: 'CASE_UPDATE',
  payload: data,
});

export { getCaseAction, updateCaseAction };
