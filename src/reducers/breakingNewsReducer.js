import { Map } from "immutable";
let defaultState = Map({
  breakingNews: [],
});
export const breakingNewReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "REQUEST_BREAKING_NEWS":
      return state.set("status", "fetching");
    case "RECIEVE_BREAKING_NEWS":
      return state
        .set("status", "quiet")
        .set("breakingNews", action.breakingNews);
    default:
      return state;
  }
};
