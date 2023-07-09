import { combineReducers } from "redux";
import CountReducer from "./CountReducer";

const reducers = combineReducers({
  CountReducer: CountReducer,
});
export default reducers;
