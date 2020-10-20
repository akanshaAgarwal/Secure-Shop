import { SET_STATE_AFTER_SUBMIT } from "./types";

export const setStateAfterSubmit = (email, password, name, authenticated) => (
  dispatch
) => {
  return dispatch({
    type: SET_STATE_AFTER_SUBMIT,
    payload: [email, password, name, authenticated],
  });
};
