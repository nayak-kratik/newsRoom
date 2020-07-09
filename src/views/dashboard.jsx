import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel, Card, Row, Col, PageHeader } from "antd";
import { LikeOutlined, ExpandAltOutlined } from "@ant-design/icons";
import "../styles/styles.scss";
const { Meta } = Card;

class Dashboard extends Component {
  render() {
    return this.props.breakingNews.length > 0 &&
      this.props.articles.length > 0 ? (
      <>
        <div>
          <PageHeader className="site-page-header" title="BREAKING NEWS" />
          <Carousel autoplay dotPosition="right" effect="fade">
            {this.props.breakingNews.map((item, key) => (
              <div key="key" className="article__carousel-card">
                <img
                  src={item.urlToImage}
                  alt="article_img"
                  className="m-auto w-100"
                  height="450px"
                ></img>
                <div className="m-auto w-100 position-absolute article__title">
                  <span className="text-color-white">{item.author}</span>
                  <h3 className="text-color-white">{item.title}</h3>
                </div>
                <div className="article__content">
                  {item.content ? (
                    <Row>
                      <Col span={18}>{item.content}</Col>
                      <Col span={6} className="text-center d-flex">
                        <a
                          rel="noopener noreferrer"
                          href={item.url}
                          target="_blank"
                        >
                          View Full Article
                        </a>
                      </Col>
                    </Row>
                  ) : (
                    <Row>
                      <Col span={24}>Content Unavailable</Col>
                    </Row>
                  )}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className=" mt-3">
          <PageHeader className="site-page-header" title="AROUND THE GLOBE" />
          <Row>
            {this.props.articles.map(
              (item, key) =>
                item.content && (
                  <Col span={8}>
                    <Card
                      className="article__card   mx-2 my-4"
                      cover={
                        <img alt="img" src={item.urlToImage} height="225" />
                      }
                      actions={[
                        <LikeOutlined key="like" />,
                        <ExpandAltOutlined
                          key="Read Full"
                          onClick={() => {
                            window.open(item.url, "_blank");
                          }}
                        />,
                      ]}
                    >
                      <Meta title={item.title} description={item.content} />
                    </Card>
                  </Col>
                )
            )}
          </Row>
        </div>{" "}
      </>
    ) : (
      <div className="d-flex h-100 justify-content-center align-items-center ">
        <h3> Loading</h3>
      </div>
    );
  }
}

export default connect(null)(Dashboard);
