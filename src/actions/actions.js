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

export function fetchNews(provider) {
  return (dispatch) => {
    dispatch(requestNews());

    dispatch(
      receiveNews([
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "https://www.facebook.com/bbcnews",
          title: "Fourth senior civil servant announces exit in six months",
          description:
            "Sir Richard Heaton will step down as a permanent secretary at the Ministry of Justice.",
          url: "https://www.bbc.co.uk/news/uk-politics-53351672",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/95EC/production/_113308383_hi011065533.jpg",
          publishedAt: "2020-07-09T13:46:25Z",
          content:
            'Image copyrightGetty Images\r\nThe permanent secretary at the Ministry of Justice, Sir Richard Heaton, will stand down from his role this summer.\r\nJustice Secretary Robert Buckland praised him as "exce… [+2054 chars]',
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "https://www.facebook.com/bbcnews",
          title: "Fourth senior civil servant announces exit in six months",
          description:
            "Sir Richard Heaton will step down as a permanent secretary at the Ministry of Justice.",
          url: "https://www.bbc.co.uk/news/uk-politics-53351672",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/95EC/production/_113308383_hi011065533.jpg",
          publishedAt: "2020-07-09T13:46:25Z",
          content:
            'Image copyrightGetty Images\r\nThe permanent secretary at the Ministry of Justice, Sir Richard Heaton, will stand down from his role this summer.\r\nJustice Secretary Robert Buckland praised him as "exce… [+2054 chars]',
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "https://www.facebook.com/bbcnews",
          title: "Fourth senior civil servant announces exit in six months",
          description:
            "Sir Richard Heaton will step down as a permanent secretary at the Ministry of Justice.",
          url: "https://www.bbc.co.uk/news/uk-politics-53351672",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/95EC/production/_113308383_hi011065533.jpg",
          publishedAt: "2020-07-09T13:46:25Z",
          content:
            'Image copyrightGetty Images\r\nThe permanent secretary at the Ministry of Justice, Sir Richard Heaton, will stand down from his role this summer.\r\nJustice Secretary Robert Buckland praised him as "exce… [+2054 chars]',
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "https://www.facebook.com/bbcnews",
          title: "Fourth senior civil servant announces exit in six months",
          description:
            "Sir Richard Heaton will step down as a permanent secretary at the Ministry of Justice.",
          url: "https://www.bbc.co.uk/news/uk-politics-53351672",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/95EC/production/_113308383_hi011065533.jpg",
          publishedAt: "2020-07-09T13:46:25Z",
          content:
            'Image copyrightGetty Images\r\nThe permanent secretary at the Ministry of Justice, Sir Richard Heaton, will stand down from his role this summer.\r\nJustice Secretary Robert Buckland praised him as "exce… [+2054 chars]',
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "https://www.facebook.com/bbcnews",
          title: "Fourth senior civil servant announces exit in six months",
          description:
            "Sir Richard Heaton will step down as a permanent secretary at the Ministry of Justice.",
          url: "https://www.bbc.co.uk/news/uk-politics-53351672",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/95EC/production/_113308383_hi011065533.jpg",
          publishedAt: "2020-07-09T13:46:25Z",
          content:
            'Image copyrightGetty Images\r\nThe permanent secretary at the Ministry of Justice, Sir Richard Heaton, will stand down from his role this summer.\r\nJustice Secretary Robert Buckland praised him as "exce… [+2054 chars]',
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "https://www.facebook.com/bbcnews",
          title: "Fourth senior civil servant announces exit in six months",
          description:
            "Sir Richard Heaton will step down as a permanent secretary at the Ministry of Justice.",
          url: "https://www.bbc.co.uk/news/uk-politics-53351672",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/95EC/production/_113308383_hi011065533.jpg",
          publishedAt: "2020-07-09T13:46:25Z",
          content:
            'Image copyrightGetty Images\r\nThe permanent secretary at the Ministry of Justice, Sir Richard Heaton, will stand down from his role this summer.\r\nJustice Secretary Robert Buckland praised him as "exce… [+2054 chars]',
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "https://www.facebook.com/bbcnews",
          title: "Fourth senior civil servant announces exit in six months",
          description:
            "Sir Richard Heaton will step down as a permanent secretary at the Ministry of Justice.",
          url: "https://www.bbc.co.uk/news/uk-politics-53351672",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/95EC/production/_113308383_hi011065533.jpg",
          publishedAt: "2020-07-09T13:46:25Z",
          content:
            'Image copyrightGetty Images\r\nThe permanent secretary at the Ministry of Justice, Sir Richard Heaton, will stand down from his role this summer.\r\nJustice Secretary Robert Buckland praised him as "exce… [+2054 chars]',
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "https://www.facebook.com/bbcnews",
          title: "Fourth senior civil servant announces exit in six months",
          description:
            "Sir Richard Heaton will step down as a permanent secretary at the Ministry of Justice.",
          url: "https://www.bbc.co.uk/news/uk-politics-53351672",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/95EC/production/_113308383_hi011065533.jpg",
          publishedAt: "2020-07-09T13:46:25Z",
          content:
            'Image copyrightGetty Images\r\nThe permanent secretary at the Ministry of Justice, Sir Richard Heaton, will stand down from his role this summer.\r\nJustice Secretary Robert Buckland praised him as "exce… [+2054 chars]',
        },
      ])
    );

    // requestNewsService(provider)
    //   .then((response) => {
    //     dispatch(receiveNews(response.articles));
    //   })
    //   .catch(() => {
    //     dispatch(receiveNews([]));
    //   });
  };
}

export function fetchBreakingNews(provider) {
  return (dispatch) => {
    dispatch(requestBreakingNews());
    // requestBreakingNewsService(provider)
    //   .then((response) => {
    //     dispatch(recieveBreakingNews(response.articles));
    //   })
    //   .catch(() => {
    //     dispatch(recieveBreakingNews([]));
    //   });

    dispatch(
      recieveBreakingNews([
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "https://www.facebook.com/bbcnews",
          title: "Fourth senior civil servant announces exit in six months",
          description:
            "Sir Richard Heaton will step down as a permanent secretary at the Ministry of Justice.",
          url: "https://www.bbc.co.uk/news/uk-politics-53351672",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/95EC/production/_113308383_hi011065533.jpg",
          publishedAt: "2020-07-09T13:46:25Z",
          content:
            'Image copyrightGetty Images\r\nThe permanent secretary at the Ministry of Justice, Sir Richard Heaton, will stand down from his role this summer.\r\nJustice Secretary Robert Buckland praised him as "exce… [+2054 chars]',
        },
      ])
    );
  };
}
