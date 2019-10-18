import noteActions from './notes-action';

describe('Notes Actions', () => {
  it('should create an action to get all notes', () => {
    const data = 'test';
    const expectedAction = {
      type: 'FETCH_NOTES',
      payload: data,
    };
    expect(noteActions.get(data)).toEqual(expectedAction);
  });

  it('should create an action to get one note', () => {
    const data = 'test';
    const expectedAction = {
      type: 'FETCH_ONE_NOTE',
      payload: data,
    };
    expect(noteActions.getOne(data)).toEqual(expectedAction);
  });
});
