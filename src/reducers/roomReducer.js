import {
  INIT_ROOM_FETCHING,
  INIT_ROOM_SUCCESS,
  INIT_ROOM_FAILURE
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
  loading: false
};

export const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ROOM_FETCHING:
      return { ...state, loading: true };
    case INIT_ROOM_SUCCESS:
      return {
        ...state,
        roomInfo: {...action.payload},
        loading: false
      };
    case INIT_ROOM_FAILURE:
      return {
        ...state,
        roomInfo: { ...state.roomInfo, errors: action.payload },
        loading: false
      };
    default:
      return state;
  }
};
