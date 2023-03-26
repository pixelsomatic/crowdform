export const updateLogin = (key, value) => {
  return {
    type: 'UPDATE_LOGIN',
    payload: {key, value},
  };
};
