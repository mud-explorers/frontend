import axios from "axios";
import {
  INIT_PLAYER_SUCCESS,
  INIT_PLAYER_FETCHING,
  INIT_PLAYER_FAILURE,
} from "./index";

export const getPlayer = () => dispatch => {
  dispatch({
    type: INIT_PLAYER_FETCHING
  });

  return axios
    .post(
      "https://lambda-treasure-hunt.herokuapp.com/api/adv/status/",
      {},

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token e8fa63d50b59b093c3a400e9eac11981d2e721c9"
        }
      }
    )
    .then(playerInfo => {
      dispatch({
        type: INIT_PLAYER_SUCCESS,
        payload: playerInfo.data
      });
    })
    .catch(error => {
      dispatch({
        type: INIT_PLAYER_FAILURE,
        payload: error
      });
    });
};


