import { combineReducers } from "redux";
import { roomReducer } from "./roomReducer";
import { playerReducer } from "./playerReducer";

export default combineReducers({
  roomReducer,
  playerReducer
});
