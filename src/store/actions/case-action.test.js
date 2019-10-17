import { update, updateInitialCaseAction } from './case-action';

describe('Case Actions', () => {
  it('should create an update action', () => {
    const data = 'test';
    const expectedAction = {
      type: 'CASE_UPDATE',
      payload: data,
    };
    expect(update(data)).toEqual(expectedAction);
  });

  it('should create an action to update initial case action', () => {
    const data = 'test';
    const expectedAction = {
      type: 'CASE_UPDATE_INITIAL',
      payload: data,
    };
    expect(updateInitialCaseAction(data)).toEqual(expectedAction);
  });
});
