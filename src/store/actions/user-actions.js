const saveProfile = (profile) => {
  return {
    type: 'PROFILE_SAVE',
    payload: profile,
  };
};

const removeProfile = () => {
  return {
    type: 'PROFILE_REMOVE',
    payload: {},
  };
};

export default { saveProfile, removeProfile };
