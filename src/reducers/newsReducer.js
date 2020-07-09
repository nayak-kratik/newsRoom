import { Map } from "immutable";
let defaultState = Map({
  articles: [],
});
export const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "REQUEST_NEWS":
      return state.set("status", "fetching");
    case "RECIEVE_NEWS":
      return state.set("status", "quiet").set("articles", action.articles);
    default:
      return state;
  }
};
