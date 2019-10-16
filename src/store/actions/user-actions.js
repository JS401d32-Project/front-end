const saveToken = (token) => {
  return {
    type: 'TOKEN_SAVE',
    payload: { token },
  };
};

export default { saveToken };
