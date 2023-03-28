const INITIAL_STATE = {
  currentData: {
    email: '',
    password: '',
  },
  possibleData: {
    email: '',
    password: '',
  },
  isLoggedIn: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN':
      let result = {
        ...state,
        currentData: {
          ...state.currentData,
          ...action.payload,
        },
      };
      return result;
    case 'SET_LOGGED_IN':
      return {...state, isLoggedIn: action.payload};
    default: {
      return state;
    }
  }
};

export default loginReducer;
