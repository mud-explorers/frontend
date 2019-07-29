import axios from "axios";
import {
  INIT_ROOM_SUCCESS,
  INIT_ROOM_FETCHING,
  INIT_ROOM_FAILURE,
} from "./index";

export const getRoom = () => dispatch => {
    dispatch({
      type: INIT_ROOM_FETCHING
    });
  
    return axios
      .get(
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/init/",
  
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token e8fa63d50b59b093c3a400e9eac11981d2e721c9"
          }
        }
      )
      .then(roomInfo => {
        dispatch({
          type: INIT_ROOM_SUCCESS,
          payload: roomInfo.data
        });
      })
      .catch(error => {
        dispatch({
          type: INIT_ROOM_FAILURE,
          payload: error
        });
      });
  };