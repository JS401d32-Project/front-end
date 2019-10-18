import caseIntakeFormReducer from './case-intake-form-reducer';

describe('Case Intake Form Reducer', () => {
  it('should return initial state', () => {
    expect(caseIntakeFormReducer(undefined, {})).toEqual({});
  });

  it('should update a case legal plan', () => {
    const updateCaseIntakeAction = {
      type: 'CASE_UPDATE_INITIAL',
      payload: { legalPlan: 'hyatt' },
    };
    expect(caseIntakeFormReducer({ legalPlan: '', caseType: '', referralType: '' }, updateCaseIntakeAction)).toEqual({ legalPlan: 'hyatt', caseType: '', referralType: '' });
  });

  it('should update a case type', () => {
    const updateCaseIntakeAction = {
      type: 'CASE_UPDATE_INITIAL',
      payload: { caseType: 'family' },
    };
    expect(caseIntakeFormReducer({ legalPlan: '', caseType: '', referralType: '' }, updateCaseIntakeAction)).toEqual({ legalPlan: '', caseType: 'family', referralType: '' });
  });

  it('should update a case referral type', () => {
    const updateCaseIntakeAction = {
      type: 'CASE_UPDATE_INITIAL',
      payload: { referralType: 'none' },
    };
    expect(caseIntakeFormReducer({ legalPlan: '', caseType: '', referralType: '' }, updateCaseIntakeAction)).toEqual({ legalPlan: '', caseType: '', referralType: 'none' });
  });
});
