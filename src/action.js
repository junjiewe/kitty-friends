import { CHANGE_SEARCH_FIELD } from "./constant.js";

// action
export const setSearchField = userinput => ({
  type: CHANGE_SEARCH_FIELD /*action been taken*/,
  payload: userinput /*Sending what data is needed to reducer */
});
