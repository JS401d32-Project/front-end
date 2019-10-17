const API = process.env.REACT_APP_API;


const get = (payload) => {
  return {
    type: 'FETCH_CONTACTS',
    payload,
  };
};

const getOne = (payload) => {
  return {
    type: 'FETCH_CONTACT',
    payload,
  };
};

const add = (payload) => {
  return {
    type: 'ADD_CONTACT',
    payload,
  };
};

// Fetch all contacts
const fetchContacts = () => (dispatch) => {
  return fetch(`${API}/contacts`)
    .then((results) => results.json())
    .then((data) => dispatch(get(data)));
};

// Fetch one contact by Id
const fetchContact = (id) => (dispatch) => {
  return fetch(`${API}/contact/${id}`)
    .then((results) => results.json())
    .then((data) => dispatch(getOne(data)));
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
  fetchContact,
  addContact,
};
