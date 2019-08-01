import { combineReducers } from "redux";
import { roomReducer } from "./roomReducer";
import { playerReducer } from "./playerReducer";
import { mapReducer } from "./mapReducer";

export default combineReducers({
  roomReducer,
  playerReducer,
  mapReducer
});
