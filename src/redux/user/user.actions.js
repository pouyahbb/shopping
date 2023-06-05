export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const signedOut = (user) => ({
  type: "USER_SIGNED_OUT",
  payload: user,
});
