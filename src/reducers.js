import { CHANGE_SEARCH_FIELD } from "./constant.js";

const initialState = {
  searchField: ""
};

// create a reducer with a pure function
export const searchCats = (state = initialState, action = {}) => {
  switch (action.type) {
    // receive an action called CHANGE_SEARCH_FIELD
    case CHANGE_SEARCH_FIELD:
      //   if that the case return the new state with action.payload
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
