import {
  requestNews,
  receiveNews,
  requestBreakingNews,
  recieveBreakingNews,
} from "./actionCreators";
import {
  requestNewsService,
  requestBreakingNewsService,
} from "../services/newsServices";

export function fetchNews(provider, pageNumber) {
  return (dispatch) => {
    // requestNews action creator is used to change status to loading/fetching
    dispatch(requestNews());
    requestNewsService(provider, pageNumber)
      .then((response) => {
        dispatch(receiveNews(response.articles));
      })
      .catch(() => {
        dispatch(receiveNews([]));
      });
  };
}

export function fetchBreakingNews(provider) {
  return (dispatch) => {
    dispatch(requestBreakingNews());
    requestBreakingNewsService(provider)
      .then((response) => {
        dispatch(recieveBreakingNews(response.articles));
      })
      .catch(() => {
        dispatch(recieveBreakingNews([]));
      });
  };
}
