export const updateLogin = data => {
  return {
    type: 'UPDATE_LOGIN',
    payload: data,
  };
};

export const setLoggedIn = isLoggedIn => ({
  type: 'SET_LOGGED_IN',
  payload: isLoggedIn,
});
