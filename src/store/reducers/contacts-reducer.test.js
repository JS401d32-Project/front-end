import contactsReducer from './contacts-reducer';

describe('Contacts Reducer', () => {
  it('should return initial state', () => {
    expect(contactsReducer(undefined, [])).toEqual([]);
  });

  it('should fetch all contacts', () => {
    const fetchAction = {
      type: 'FETCH_CONTACTS',
      payload: [{ name: 'test' }],
    };
    expect(contactsReducer([], fetchAction)).toEqual([{ name: 'test' }]);
  });

  it('should fetch a contact', () => {
    const fetchAction = {
      type: 'FETCH_CONTACT',
      payload: { name: 'test' },
    };
    expect(contactsReducer([], fetchAction)).toEqual([{ name: 'test' }]);
  });

  it('should add a contact', () => {
    const addAction = {
      type: 'ADD_CONTACT',
      payload: { name: 'me' },
    };
    expect(contactsReducer([{ name: 'you' }], addAction)).toEqual([{ name: 'you' }, { name: 'me' }]);
  });
});
