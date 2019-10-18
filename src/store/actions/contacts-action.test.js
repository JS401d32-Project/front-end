import contactActions from './contacts-action';

describe('Contacts Actions', () => {
  it('should create an action to get all contacts', () => {
    const data = 'test';
    const expectedAction = {
      type: 'FETCH_CONTACTS',
      payload: data,
    };
    expect(contactActions.get(data)).toEqual(expectedAction);
  });

  it('should create an action to get one contact', () => {
    const data = 'test';
    const expectedAction = {
      type: 'FETCH_CONTACT',
      payload: data,
    };
    expect(contactActions.getOne(data)).toEqual(expectedAction);
  });

  it('should create an action add a contact', () => {
    const data = 'test';
    const expectedAction = {
      type: 'ADD_CONTACT',
      payload: data,
    };
    expect(contactActions.add(data)).toEqual(expectedAction);
  });
});
