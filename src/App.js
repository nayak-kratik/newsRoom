import React, { Component } from "react";
import { Route } from "react-router-dom";

import SideNav from "./components/sideNav";
import Dashboard from "./views/dashboard.jsx";
import Article from "./views/article.jsx";
import { fetchNews, fetchBreakingNews } from "./actions/actions";
import { connect } from "react-redux";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./styles/styles.scss";
import { COLOR1 } from "./utils/colorPalette";

const { Content } = Layout;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: COLOR1,
      articles: [],
      breakingNews: [],
      pageNumber: 1,
      source: "bbc-news",
    };
  }
  componentDidMount() {
    this.props.getNews(this.state.source);
    this.props.getBreakingNews(this.state.source);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevProps.articles !== this.props.articles &&
        this.props.articles.get("status") !== "fetching") ||
      (prevProps.breakingNews !== this.props.breakingNews &&
        this.props.breakingNews.get("status") !== "fetching")
    ) {
      this.setState((prevState) => ({
        articles: this.state.articles.concat(
          this.props.articles.get("articles")
        ),
        breakingNews: this.props.breakingNews.get("breakingNews"),
      }));
    }
  }
  changeBgColor = (color) => {
    this.setState({ bgColor: color });
  };
  loadArticlesFromSource = (pageBg, source) => {
    this.changeBgColor(pageBg);
    this.setState({
      articles: [],
      breakingNews: [],
      source,
      pageNumber: 1,
    });
    this.props.getNews(source);
    this.props.getBreakingNews(source);
  };
  loadMore = () => {
    this.props.getNews(this.state.source, this.state.pageNumber + 1);
    this.setState((prevState) => {
      return {
        ...prevState,
        pageNumber: prevState.pageNumber + 1,
      };
    });
  };
  render() {
    return (
      <>
        <Layout
          className="h-100"
          style={{ backgroundColor: this.state.bgColor }}
        >
          <SideNav
            loadArticlesFromSource={this.loadArticlesFromSource}
          ></SideNav>
          <Layout className="bg-transparent main-layout">
            <Content>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Dashboard
                    {...props}
                    articles={this.state.articles}
                    breakingNews={this.state.breakingNews}
                    loadMore={this.loadMore}
                  />
                )}
              />
              <Route path="/article" component={Article} />
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    breakingNews: state.breakingNews,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getNews: (newsSource, pageNumber = 1) => {
      dispatch(fetchNews(newsSource, pageNumber));
    },
    getBreakingNews: (newsSource) => {
      dispatch(fetchBreakingNews(newsSource));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
