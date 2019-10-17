const API = 'http://localhost:4000';


const getAll = (payload) => {
  return {
    type: 'FETCH_NOTES',
    payload,
  };
};

const getOne = (payload) => {
  return {
    type: 'FETCH_ONE_NOTE',
    payload,
  };
};


const fetchNotes = () => (dispatch) => {
  return fetch(`${API}/testNotes`)
    .then((results) => results.json())
    .then((data) => dispatch(getAll(data)));
};

const fetchOneNote = () => (dispatch) => {
  return fetch(`${API}/testNotes`)
    .then((results) => results.json())
    .then((data) => dispatch(getOne(data)));
};

export default {
  fetchNotes,
  fetchOneNote,
};
