import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// enhancer - thunk
//
export default createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
