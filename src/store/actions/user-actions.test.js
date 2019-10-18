import userActions from './user-actions';

describe('User Actions', () => {
  it('should create an action to save profile', () => {
    const data = 'profile';
    const expectedAction = {
      type: 'PROFILE_SAVE',
      payload: data,
    };
    expect(userActions.saveProfile(data)).toEqual(expectedAction);
  });

  it('should create an action to remove profile', () => {
    const expectedAction = {
      type: 'PROFILE_REMOVE',
      payload: {},
    };
    expect(userActions.removeProfile()).toEqual(expectedAction);
  });
});
