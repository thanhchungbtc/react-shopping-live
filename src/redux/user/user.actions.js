import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user) => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

export const googleSignInFailure = (err) => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: err,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const emailSignInSuccess = (user) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignInFailure = (err) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: err,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (err) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: err,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (err) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: err,
});

export const signUpStart = (credentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: credentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (err) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: err,
});
