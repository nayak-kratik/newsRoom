import React, { Component } from "react";
import { Row, Col } from "antd";
import { Layout } from "antd";

import { COLOR1, COLOR2, COLOR3, COLOR4, COLOR5 } from "../utils/colorPalette";

import "../styles/styles.scss";
const { Sider } = Layout;

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  shouldCollapse = (flag) => {
    //  Collapse and expand side nav
    this.setState({
      collapsed: flag,
    });
  };
  render() {
    const { loadArticlesFromSource } = this.props;
    return (
      <>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          breakpoint="md"
          onBreakpoint={(broken) => {
            broken ? this.shouldCollapse(true) : this.shouldCollapse(false);
          }}
        >
          <Row justify="space-around" className="h-100">
            <Col
              className="css-source  color-one"
              span={24}
              onClick={(e) => loadArticlesFromSource(COLOR1, "bbc-news")}
            >
              BBC
            </Col>

            <Col
              className="css-source color-two"
              span={24}
              onClick={(e) => loadArticlesFromSource(COLOR2, "cnn")}
            >
              CNN
            </Col>
            <Col
              className="css-source color-three"
              span={24}
              onClick={(e) => loadArticlesFromSource(COLOR3, "espn")}
            >
              ESPN
            </Col>
            <Col
              className="css-source color-four"
              span={24}
              onClick={(e) => loadArticlesFromSource(COLOR4, "abc-news")}
            >
              ABC News
            </Col>
            <Col
              className="css-source color-five"
              span={24}
              onClick={(e) => loadArticlesFromSource(COLOR5, "the-hindu")}
            >
              The Hindu
            </Col>
          </Row>
        </Sider>
      </>
    );
  }
}
export default SideNav;
