const API = process.env.REACT_APP_API;


const get = (payload) => {
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

const fetchOneNote = () => (dispatch) => {
  return fetch(`${API}/testNotes`)
    .then((results) => results.json())
    .then((data) => dispatch(getOne(data)));
};
  
const toStandardTime = (militaryTime) => {
  const militaryTimeSplit = militaryTime.split(':');
  let updatedTime;
  if (militaryTimeSplit[0].charAt(0) > 1) { 
    updatedTime = `${militaryTimeSplit[0] - 12}:${militaryTimeSplit[1]} P.M.`;
  } else {
    updatedTime = `${militaryTimeSplit[0]}:${militaryTimeSplit[1]} A.M.`;
  }
  return updatedTime;
};

const alterDateTime = (string) => {
  const dateTimeSplit = string.split('T');
  let date = dateTimeSplit[0].split('-');
  date = `${date[1]}/${date[2]}/${date[0]}`;
  const time = toStandardTime(dateTimeSplit[1]);
  return `${date} ${time}`;
};


const fetchNotes = () => (dispatch) => {
  return fetch(`${API}/notes`)
    .then((results) => results.json())
    .then((data) => {
      const renderDataArray = data.map((note) => {
        const alteredObj = {
          author: note.author.userName,
          dateCreated: alterDateTime(note.dateCreated),
          title: note.title,
        };
        return alteredObj;
      });
      dispatch(get(renderDataArray));
    });
};

export default {
  fetchNotes,
  fetchOneNote,
};
