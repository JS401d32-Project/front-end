const saveToken = (token) => ({
  type: 'TOKEN_SAVE',
  payload: token,
});

export default { saveToken };
