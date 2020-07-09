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
    this.state = { bgColor: COLOR1, articles: [], breakingNews: [] };
  }
  componentDidMount() {
    this.props.getNews("bbc-news");
    this.props.getBreakingNews("bbc-news");
  }

  componentDidUpdate(prevProps) {
    if (
      (prevProps.articles !== this.props.articles &&
        this.props.articles.get("status") !== "fetching") ||
      (prevProps.breakingNews !== this.props.breakingNews &&
        this.props.breakingNews.get("status") !== "fetching")
    ) {
      this.setState({
        articles: this.props.articles.get("articles"),
        breakingNews: this.props.breakingNews.get("breakingNews"),
      });
    }
  }
  changeBgColor = (color) => {
    this.setState({ bgColor: color });
  };
  loadNews = (pageBg, source) => {
    this.changeBgColor(pageBg);
    this.setState({
      articles: [],
      breakingNews: [],
    });
    this.props.getNews(source);
    this.props.getBreakingNews(source);
  };

  render() {
    return (
      <>
        <Layout
          className="h-100"
          style={{ backgroundColor: this.state.bgColor }}
        >
          <SideNav loadNewsFunction={this.loadNews}></SideNav>
          <Layout className="bg-transparent p-5">
            <Content>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Dashboard
                    {...props}
                    articles={this.state.articles}
                    breakingNews={this.state.breakingNews}
                  />
                )}
              />
              <Route path="/:article" component={Article} />
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
    getNews: (newsSource) => {
      dispatch(fetchNews(newsSource));
    },
    getBreakingNews: (newsSource) => {
      dispatch(fetchBreakingNews(newsSource));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
