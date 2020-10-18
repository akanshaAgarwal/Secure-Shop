import { combineReducers } from "redux";
import common_reducer from "./common_reducer";
// import bootstatReducer from "./bootstatReducer";

export default combineReducers({
  // can have access to data by state.commonData
  common_data: common_reducer,
  // bootstatData: bootstatReducer,
});
