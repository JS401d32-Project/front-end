const API = process.env.REACT_APP_API;

/**
 * Model case-action
 */

const update = (data) => ({
  type: 'CASE_UPDATE',
  payload: data,
});

/**
 * update case with new data and the case id and return updated case
 * @param data {object}
 * @param id {string}
 * @returns case {object}
 */
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
