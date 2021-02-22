import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import stateListReducer from "./stateList";
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
  listState : stateListReducer
});


export default allReducers;