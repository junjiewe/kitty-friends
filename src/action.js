import { apiCall } from "./api/api";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CATS_PENDING,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAILED
} from "./constant.js";

// action
export const setSearchField = userinput => ({
  type: CHANGE_SEARCH_FIELD /*action been taken*/,
  payload: userinput /*Sending what data is needed to reducer */
});

//action - higherOrder function witch returns another function
export const requestCats = () => dispatch => {
  dispatch({ type: REQUEST_CATS_PENDING });
  // fetch("http://jsonplaceholder.typicode.com/users")
  //   .then(response => response.json())
  //   .then(data => dispatch({ type: REQUEST_CATS_SUCCESS, payload: data }))
  //   .catch(error => dispatch({ type: REQUEST_CATS_FAILED, payload: error }));
  apiCall("http://jsonplaceholder.typicode.com/users")
    .then(data => dispatch({ type: REQUEST_CATS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_CATS_FAILED, payload: error }));
};
