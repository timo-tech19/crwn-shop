import { userActionTypes } from './userActionTypes';

// Action creator objects which are passed into reducers

export const setCurrentUser = (user) => ({
  type: userActionTypes.setCurrentUser,
  payload: user,
});
