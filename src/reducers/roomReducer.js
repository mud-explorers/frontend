import {
  INIT_ROOM_FETCHING,
  INIT_ROOM_SUCCESS,
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
  UPDATE_COOLDOWN
} from "../actions/index";

const initialState = {
  roomInfo: {
    room_id: null,
    title: "",
    description: "",
    coordinates: "",
    elevation: null,
    terrain: "",
    players: [],
    items: [],
    exits: [],
    cooldown: null,
    errors: [],
    messages: []
  },
  loading: false,
  coolingDown: false
};

export const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ROOM_FETCHING:
    case MOVE_ROOM_FETCHING:
    case GET_ITEM_FETCHING:
    case SELL_ITEM_FETCHING:
      return { ...state, loading: true };
    case INIT_ROOM_SUCCESS:
    case MOVE_ROOM_SUCCESS:
    case GET_ITEM_SUCCESS:
    case SELL_ITEM_SUCCESS:
      return {
        ...state,
        roomInfo: {...action.payload},
        loading: false,
        coolingDown: true
      };
    case INIT_ROOM_FAILURE:
    case MOVE_ROOM_FAILURE:
    case GET_ITEM_FAILURE:
    case SELL_ITEM_FAILURE:
      return {
        ...state,
        roomInfo: {...state.roomInfo, errors: [action.payload.errors[0]], cooldown: action.payload.cooldown},
        loading: false,
        coolingDown: true
      }
    case UPDATE_COOLDOWN:
      return {
        ...state,
        roomInfo: {...state.roomInfo, cooldown: action.payload},
        coolingDown: false
      }
    default:
      return state;
  }
};
