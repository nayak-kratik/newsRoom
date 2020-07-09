import React, { Component } from "react";
import { Row, Col } from "antd";
import { Layout } from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
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

  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { loadNewsFunction } = this.props;
    return (
      <>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          {React.createElement(
            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger css-trigger-icon",
              onClick: this.onCollapse,
            }
          )}
          <Row justify="space-around" className="h-100">
            <Col
              className="css-source  color-one"
              span={24}
              onClick={(e) => loadNewsFunction(COLOR1, "bbc-news")}
            >
              BBC
            </Col>

            <Col
              className="css-source color-two"
              span={24}
              onClick={(e) => loadNewsFunction(COLOR2, "cnn")}
            >
              CNN
            </Col>
            <Col
              className="css-source color-three"
              span={24}
              onClick={(e) => loadNewsFunction(COLOR3, "espn")}
            >
              ESPN
            </Col>
            <Col
              className="css-source color-four"
              span={24}
              onClick={(e) => loadNewsFunction(COLOR4, "google-news-in")}
            >
              Google
            </Col>
            <Col
              className="css-source color-five"
              span={24}
              onClick={(e) => loadNewsFunction(COLOR5, "the-hindu")}
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
