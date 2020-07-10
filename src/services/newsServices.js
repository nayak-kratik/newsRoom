import { formatUrl } from "../helpers/urlFormatter";

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export function requestNewsService(source, pageNumber) {
  return new Promise((resolve, reject) => {
    const baseUrl = "http://newsapi.org/v2/everything";
    const formattedParams = formatUrl({
      sources: source,
      sortBy: "publishedAt",
      apiKey: "13f7003e27004379881e669afe8e2814",
      pageSize: 10,
      page: pageNumber,
    });
    fetch(proxyurl + baseUrl + "?" + formattedParams, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function requestBreakingNewsService(source) {
  return new Promise((resolve, reject) => {
    const baseUrl = "http://newsapi.org/v2/top-headlines";
    const formattedParams = formatUrl({
      sources: source,
      sortBy: "publishedAt",
      apiKey: "13f7003e27004379881e669afe8e2814",
    });
    fetch(proxyurl + baseUrl + "?" + formattedParams, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
