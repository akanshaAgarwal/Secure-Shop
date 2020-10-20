import { SET_STATE_AFTER_SUBMIT } from "../actions/types";

const initial_state = {
  email: "",
  password: "",
  name: "",
  authenticated: false,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case SET_STATE_AFTER_SUBMIT:
      return {
        ...state,
        email: action.payload[0],
        passoword: action.payload[1],
        name: action.payload[2],
        authenticated: action.payload[3],
      };
    default:
      return state;
  }
}
