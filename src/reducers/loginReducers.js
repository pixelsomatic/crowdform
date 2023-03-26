const INITIAL_STATE = {
  currentData: {
    email: '',
    password: '',
  },
  possibleData: {
    email: '',
    password: '',
  },
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN':
      const {email, password} = action.payload;
      let result = {
        ...state,
        email,
        password,
      };
      return result;
    default: {
      return state;
    }
  }
};

export default loginReducer;
