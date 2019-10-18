const API = process.env.REACT_APP_API;

const toStandardTime = (militaryTime) => {
  const militaryTimeSplit = militaryTime.split(':');
  let updatedTime;
  const hour = `${militaryTimeSplit[0].charAt(0)}${militaryTimeSplit[0].charAt(1)}`;
  if (Number(hour) > 12) { 
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

const fetchOneNote = (id, token) => (dispatch) => {
  const options = {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  };

  return fetch(`${API}/note/${id}`, options)
    .then((results) => results.json())
    .then((data) => {
      const alteredObj = {
        id: data.id,
        caseId: data[0].case.caseId,
        author: data[0].author && data[0].author.userName ? data[0].author.userName : 'No Author',
        content: data[0].content,
        dateCreated: alterDateTime(data[0].dateCreated),
        title: data[0].title,
      };
      return alteredObj;
    })
    .then((alteredNote) => dispatch(getOne(alteredNote)));
};


const fetchNotes = (token) => (dispatch) => {
  const options = {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  };

  return fetch(`${API}/notes`, options)
    .then((results) => results.json())
    .then((data) => {
      const renderDataArray = data.map((note) => {
        const alteredObj = {
          id: note.id,
          caseId: note.case.caseId,
          author: (note.author && note.author.userName) ? note.author.userName : 'No Author',
          content: note.content,
          dateCreated: alterDateTime(note.dateCreated),
          title: note.title,
        };
        return alteredObj;
      });
      dispatch(get(renderDataArray));
    });
};

export default {
  get,
  getOne,
  fetchNotes,
  fetchOneNote,
};
