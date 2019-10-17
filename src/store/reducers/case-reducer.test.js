import caseReducer from './case-reducer';

describe('Case reducer', () => {
  it('should return initial state', () => {
    expect(caseReducer(undefined, {})).toEqual({});
  });

  it('should fetch a case', () => {
    const fetchAction = {
      type: 'CASE_FETCH',
      payload: { name: 'test' },
    };
    expect(caseReducer({}, fetchAction)).toEqual({ name: 'test' });
  });

  it('should update a case', () => {
    const updateAction = {
      type: 'CASE_UPDATE',
      payload: { status: 'open', referralType: 'none', legalPlan: 'hyatt' },
    };
    expect(caseReducer({ status: 'potential', referralType: 'none', legalPlan: 'hyatt' }, updateAction)).toEqual({
      status: 'open', referralType: 'none', legalPlan: 'hyatt',
    });
  });
});
