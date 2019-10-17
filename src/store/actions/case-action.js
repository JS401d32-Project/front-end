const API = process.env.REACT_APP_API;

const update = (data) => ({
  type: 'CASE_UPDATE',
  payload: data,
});


const add = (payload) => {
  return {
    type: 'CASE_CREATE',
    payload,
  };
};
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

const addNewCase = (data) => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return fetch(`${API}/case`, options)
    .then((results) => results.json())
    .then(() => dispatch(add(data)));
};


export {
  update, updateCaseAction, updateInitialCaseAction, addNewCase, 
};
