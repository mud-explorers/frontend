import axios from "axios";
import {
  INIT_ROOM_SUCCESS,
  INIT_ROOM_FETCHING,
  INIT_ROOM_FAILURE,
  MOVE_ROOM_FAILURE,
  MOVE_ROOM_SUCCESS,
  MOVE_ROOM_FETCHING,
  GET_ITEM_FAILURE,
  GET_ITEM_FETCHING,
  GET_ITEM_SUCCESS,
  SELL_ITEM_FAILURE,
  SELL_ITEM_FETCHING,
  SELL_ITEM_SUCCESS
} from "./index";

import { canMove } from "../helper-functions/display-functions";

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

export const moveRoom = (direction, exits) => dispatch => {
  if (canMove(direction, exits)) {
    dispatch({
      type: MOVE_ROOM_FETCHING
    });
  
    return axios
      .post(
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/move/",
        { direction: direction },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token e8fa63d50b59b093c3a400e9eac11981d2e721c9"
          }
        }
      )
      .then(roomInfo => {
        dispatch({
          type: MOVE_ROOM_SUCCESS,
          payload: roomInfo.data
        });
      })
      .catch(error => {
        dispatch({
          type: MOVE_ROOM_FAILURE,
          payload: error.response.data
        });
      });
  } else {
    return null
  }
  
};


export const getItem = name => dispatch => {
  dispatch({
    type: GET_ITEM_FETCHING
  });

  return axios
    .post(
      "https://lambda-treasure-hunt.herokuapp.com/api/adv/take/",
      { name: name },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token e8fa63d50b59b093c3a400e9eac11981d2e721c9"
        }
      }
    )
    .then(roomInfo => {
      dispatch({
        type: GET_ITEM_SUCCESS,
        payload: roomInfo.data
      });
    })
    .catch(error => {
      dispatch({
        type: GET_ITEM_FAILURE,
        payload: error.response.data
      });
    });
};

export const sellItem = (name) => dispatch => {
  dispatch({
    type: SELL_ITEM_FETCHING
  });

  return axios
    .post(
      "https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/",
      {name: name, confirm: 'yes'},

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token e8fa63d50b59b093c3a400e9eac11981d2e721c9"
        }
      }
    )
    .then(roomInfo => {
      dispatch({
        type: SELL_ITEM_SUCCESS,
        payload: roomInfo.data
      });
    })
    .catch(error => {
      dispatch({
        type: SELL_ITEM_FAILURE,
        payload: error.response.data
      });
    });
}