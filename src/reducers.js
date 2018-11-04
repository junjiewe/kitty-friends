import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CATS_PENDING,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAILED
} from "./constant.js";

const initialStateSearch = {
  searchField: ""
};

// create a reducer with a pure function
export const searchCats = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    // receive an action called CHANGE_SEARCH_FIELD
    case CHANGE_SEARCH_FIELD:
      //   if that the case return the new state with action.payload
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateCats = {
  isPending: true,
  cats: []
};

//request cats reducer
export const requestCats = (state = initialStateCats, action = {}) => {
  switch (action.type) {
    case REQUEST_CATS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_CATS_SUCCESS:
      return Object.assign({}, state, {
        cats: action.payload,
        isPending: false
      });
    case REQUEST_CATS_FAILED:
      return Object.assign({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
};
