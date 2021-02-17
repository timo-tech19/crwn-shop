import { userActionTypes } from './userActionTypes';

const INITIAL_STATE = {
  currentUser: null,
};

// A reducer function takes in the state object and an action object
const userReducer = (state = INITIAL_STATE, action) => {
  // All reducers are fired for any recieve action hence
  // conditionals are used to make user a reducer updates
  // state only for particular actions
  switch (action.type) {
    case userActionTypes.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
