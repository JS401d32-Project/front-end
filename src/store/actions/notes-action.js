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
    // .then((data) => dispatch(get(data)));
    .then((data) => {
      const renderDataArray = data.map((note) => {
        console.log(note.author.userName, note.dateCreated, note.title);
        const alteredObj = {
          author: note.author.userName,
          dateCreated: note.dateCreated,
          title: note.title,
        };
        return alteredObj;
      });
      console.log(renderDataArray);
      dispatch(get(renderDataArray));
    });
};

export default {
  fetchNotes,
};
