import { combineReducers } from "redux";
import UserReducer from "./reducers-users";

const allReducers = combineReducers({
  user: UserReducer
});
export default allReducers;
