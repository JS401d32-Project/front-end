const API = process.env.REACT_APP_API;

const update = (data) => ({
  type: 'CASE_UPDATE',
  payload: data,
});

const updateCaseAction = (data, id) => (dispatch) => {
  const options = {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return fetch(`${API}/case/${id}`, options)
    .then((result) => result.json())
    .then((updateData) => dispatch(update(updateData)));
};

const updateInitialCaseAction = (data) => ({
  type: 'CASE_UPDATE_INITIAL',
  payload: data,
});

export { update, updateCaseAction, updateInitialCaseAction };
