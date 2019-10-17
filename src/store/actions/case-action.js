const API = process.env.REACT_APP_API;

/**
 * Model case-action
 */

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

/**
 * update case with new data and the case id and return updated case
 * @param data {object}
 * @param id {string}
 * @returns case {object}
 */
const updateCaseAction = (data, id, token) => (dispatch) => {
  const options = {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }),
  };

  return fetch(`${API}/case/${id}`, options)
    .then((result) => result.json())
    .then((updateData) => dispatch(update(updateData)));
};

const updateInitialCaseAction = (data) => ({
  type: 'CASE_UPDATE_INITIAL',
  payload: data,
});

const addNewCase = (data, token) => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`${API}/case`, options)
    .then((results) => results.json())
    .then(() => dispatch(add(data)));
};

export {
  update, updateCaseAction, updateInitialCaseAction, addNewCase, 
};
