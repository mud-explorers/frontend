import {} from "../actions/index";

import { initMap } from "../helper-functions/initMap";
import { mapGraph } from '../dummy-data-structures/map-graph'

const initialState = {
  map: initMap(),
  visited: mapGraph
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
