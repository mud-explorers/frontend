import {
  INIT_PLAYER_FETCHING,
  INIT_PLAYER_SUCCESS,
  INIT_PLAYER_FAILURE
} from "../actions/index";

const initialState = {
  playerInfo: {
    name: "",
    cooldown: null,
    encumbrance: null,
    strength: null,
    speed: null,
    gold: null,
    inventory: [],
    status: [],
    errors: [],
    messages: []
  },
  loading: false
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PLAYER_FETCHING:
      return { ...state, loading: true };
    case INIT_PLAYER_SUCCESS:
      return {
        ...state,
        playerInfo: { ...action.payload},
        loading: false
      };
    case INIT_PLAYER_FAILURE:
      return {
        ...state,
        playerInfo: { ...state.playerInfo, errors: action.payload },
        loading: false
      };
    default:
      return state;
  }
};
