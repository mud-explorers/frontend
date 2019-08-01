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
  SELL_ITEM_SUCCESS,
  UPDATE_COOLDOWN,
  PRAY_FAILURE,
  PRAY_FETCHING,
  PRAY_SUCCESS,
  DROP_ITEM_FAILURE,
  DROP_ITEM_SUCCESS,
  DROP_ITEM_FETCHING
} from "./index";

import { canMove } from "../helper-functions/display-functions";
import { getPlayer } from "./playerActions";

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
        payload: error.response ? error.response.data : {errors: ['Network timeout. Please refresh to retry.']}
      });
    });
};

export const moveRoom = (direction, exits, room_id, visited) => dispatch => {
  if (canMove(direction, exits)) {
    const currentRoom = visited[room_id];
    const currentNeighbors = currentRoom[1];
    const neighbor_id = currentNeighbors[direction].toString();
    const roomType = currentRoom[5];

    dispatch({
      type: MOVE_ROOM_FETCHING
    });

    return axios
      .post(
        `https://lambda-treasure-hunt.herokuapp.com/api/adv/${
          roomType === "MOUNTAIN" ? "fly" : "move"
        }/`,
        { direction: direction, next_room_id: neighbor_id },
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
    return null;
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
      setTimeout(() => {
        dispatch(getPlayer());
      }, 16000);
    })
    .catch(error => {
      dispatch({
        type: GET_ITEM_FAILURE,
        payload: error.response.data
      });
    });
};

export const dropItem = name => dispatch => {
  dispatch({
    type: DROP_ITEM_FETCHING
  });

  return axios
    .post(
      "https://lambda-treasure-hunt.herokuapp.com/api/adv/drop/",
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
        type: DROP_ITEM_SUCCESS,
        payload: roomInfo.data
      });
      setTimeout(() => {
        dispatch(getPlayer());
      }, 16000);
    })
    .catch(error => {
      dispatch({
        type: DROP_ITEM_FAILURE,
        payload: error.response.data
      });
    });
};

export const sellItem = name => dispatch => {
  dispatch({
    type: SELL_ITEM_FETCHING
  });

  return axios
    .post(
      "https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/",
      { name: name, confirm: "yes" },

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
      setTimeout(() => {
        dispatch(getPlayer());
      }, 6000);
    })
    .catch(error => {
      dispatch({
        type: SELL_ITEM_FAILURE,
        payload: error.response.data
      });
    });
};

export const updateCooldown = count => {
  return {
    type: UPDATE_COOLDOWN,
    payload: count
  };
};

export const pray = () => dispatch => {
  dispatch({
    type: PRAY_FETCHING
  });

  return axios
    .post(
      "https://lambda-treasure-hunt.herokuapp.com/api/adv/pray/",
      {},

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token e8fa63d50b59b093c3a400e9eac11981d2e721c9"
        }
      }
    )
    .then(roomInfo => {
      dispatch({
        type: PRAY_SUCCESS,
        payload: roomInfo.data
      });
    })
    .catch(error => {
      dispatch({
        type: PRAY_FAILURE,
        payload: error.response.data
      });
    });
};
