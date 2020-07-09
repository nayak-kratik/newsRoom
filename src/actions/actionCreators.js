export function requestNews() {
  return {
    type: "REQUEST_NEWS",
  };
}

export function receiveNews(articles) {
  return {
    type: "RECIEVE_NEWS",
    articles: articles,
  };
}

export function requestBreakingNews() {
  return {
    type: "REQUEST_BREAKING_NEWS",
  };
}

export function recieveBreakingNews(breakingNews) {
  return {
    type: "RECIEVE_BREAKING_NEWS",
    breakingNews: breakingNews,
  };
}
