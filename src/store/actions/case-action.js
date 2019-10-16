const API = 'http://localhost:4000';

const get = (data) => ({
  type: 'CASE_FETCH',
  payload: data,
});

const update = (data) => ({
  type: 'CASE_UPDATE',
  payload: data,
});

//TODO: get the id from somewhere
const getCaseAction = (id) => (dispatch) => {
  const options = {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    //   Accept: 'application/json',
    // },
  };
  console.log('this is the id from case-action', id);
  return fetch(`${API}/case/${id}`, options)
    .then((result) => result.json())
    .then((data) => dispatch(get(data)));
};

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

export { getCaseAction, updateCaseAction };
