// Action creator objects which are passed into reducers

export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});
