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
const fetchContacts = (token) => (dispatch) => {
  const options = {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  };

  return fetch(`${API}/contacts`, options)
    .then((results) => results.json())
    .then((data) => dispatch(get(data)));
};

// Fetch one contact by Id
const fetchContact = (id, token) => (dispatch) => {
  const options = {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  };

  return fetch(`${API}/contact/${id}`, options)
    .then((results) => results.json())
    .then((data) => dispatch(getOne(data)));
};

const addContact = (contact, token) => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`${API}/contact`, options)
    .then((results) => results.json())
    .then((data) => dispatch(add(data)));
};

export default {
  get,
  getOne,
  add,
  fetchContacts,
  fetchContact,
  addContact,
};
