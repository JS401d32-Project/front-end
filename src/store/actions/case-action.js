const API = 'http://localhost:4000';

const update = (data) => ({
  type: 'CASE_UPDATE',
  payload: data,
});


const updateCaseAction = (data, id) => (dispatch) => {
  const options = {
    method: 'PUT',
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

export { updateCaseAction, updateInitialCaseAction };
