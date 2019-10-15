const API = 'http://localhost:4000';


const get = (payload) => {
  return {
    type: 'FETCH_CONTACTS',
    payload,
  };
};

const add = (payload) => {
  return {
    type: 'ADD_CONTACT',
    payload,
  };
};

const fetchContacts = () => (dispatch) => {
  return fetch(`${API}/contacts`)
    .then((results) => results.json())
    .then((data) => dispatch(get(data)));
};

const addContact = (contact) => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return fetch(`${API}/contacts`, options)
    .then((results) => results.json())
    .then((data) => dispatch(add(data)));
};

export default {
  fetchContacts,
  addContact,
};
