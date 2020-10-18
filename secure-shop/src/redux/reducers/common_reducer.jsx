import {
  // HANDLE_COMPARE_TESTCASE_BOOTSTAT,
} from "../actions/types";

const initial_state = {
  email:"",
  password:"",
  name:"",
  phone_number:"",

};

export default function (state = initial_state, action) {
  switch (action.type) {
    // case SET_INITIAL_STATE:
    //   return {
    //     ...state,
    //     featureType: action.payload,
    //   };
    default:
      return state;
  }
}
