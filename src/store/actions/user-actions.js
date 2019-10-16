const saveToken = (token) => {
  return {
    type: 'TOKEN_SAVE',
    payload: { token },
  };
};

const removeToken = () => {
  return {
    type: 'TOKEN_REMOVE',
    payload: {},
  };
}

export default { saveToken, removeToken };
