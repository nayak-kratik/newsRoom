import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/styles.scss";
import BreakingNewsComponent from "./dashboradComponents/breakingNews";
import OtherNewsComponent from "./dashboradComponents/otherNews";

class Dashboard extends Component {
  render() {
    return this.props.breakingNews &&
      this.props.breakingNews.length > 0 &&
      this.props.articles &&
      this.props.articles.length > 0 ? (
      <>
        <div>
          <BreakingNewsComponent
            breakingNews={this.props.breakingNews}
          ></BreakingNewsComponent>
        </div>
        <div className=" mt-3">
          <OtherNewsComponent
            articles={this.props.articles}
          ></OtherNewsComponent>
        </div>
        <div className="d-flex justify-content-center">
          <button className="my-2 w-50" onClick={() => this.props.loadMore()}>
            Load More Articles
          </button>
        </div>
      </>
    ) : (
      <div className="d-flex h-100 justify-content-center align-items-center ">
        <h3> Loading</h3>
      </div>
    );
  }
}

export default connect(null)(Dashboard);
