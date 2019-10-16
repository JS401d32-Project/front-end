const getCaseAction = (data) => ({
  type: 'CASE_FETCH',
  payload: data,
});

const updateCaseAction = (data) => ({
  type: 'CASE_UPDATE',
  payload: data,
});

const updateInitialCaseAction = (data) => ({
  type: 'CASE_UPDATE_INITIAL',
  payload: data,
});

export { getCaseAction, updateCaseAction, updateInitialCaseAction };
