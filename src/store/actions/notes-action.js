const API = 'http://localhost:4000';


const get = (payload) => {
  return {
    type: 'FETCH_NOTES',
    payload,
  };
};

const fetchNotes = () => (dispatch) => {
  return fetch(`${API}/notes`)
    .then((results) => results.json())
    .then((data) => dispatch(get(data)));
};

export default {
  fetchNotes,
};
