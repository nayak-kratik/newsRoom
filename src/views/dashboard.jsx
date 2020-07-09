import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Carousel,
  Card,
  Row,
  Col,
  PageHeader,
  Divider,
  Typography,
} from "antd";
import { LikeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../styles/styles.scss";
const { Meta } = Card;
const { Paragraph, Title } = Typography;

class Dashboard extends Component {
  render() {
    return this.props.breakingNews.length > 0 &&
      this.props.articles.length > 0 ? (
      <>
        <div>
          <Divider orientation="left">
            <PageHeader className="site-page-header" title="BREAKING NEWS" />
          </Divider>

          <Carousel autoplay dotPosition="bottom" effect="fade">
            {this.props.breakingNews.map((item, key) => (
              <div key={key} className="article__carousel-card">
                <img
                  src={item.urlToImage}
                  alt="article_img"
                  className="m-auto w-100"
                  height="450px"
                ></img>
                <div className="m-auto w-100 position-absolute article__title">
                  <span className="text-color-white">
                    {item.source && item.source.name}
                  </span>
                  <h3 className="text-color-white">{item.title}</h3>
                </div>
                <div className="article__content">
                  {item.content ? (
                    <>
                      <Row>
                        <Col span={18}>
                          <Typography>
                            <Title level={4}>{item.description}</Title>
                            <Paragraph>{item.content}</Paragraph>
                          </Typography>
                        </Col>
                        <Col span={6} className="text-center d-flex">
                          <Link
                            to={{
                              pathname: "/article",
                              state: {
                                sources: item.source && item.source.name,
                                publishedAt: item.publishedAt,
                                title: item.title,
                                description: item.description,
                                url: item.url,
                                urlToImage: item.urlToImage,
                                content: item.content,
                              },
                            }}
                          >
                            View Full Article
                          </Link>
                        </Col>
                      </Row>
                    </>
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
          <Divider orientation="left">
            <PageHeader className="site-page-header" title="AROUND THE GLOBE" />
          </Divider>
          <Row>
            {this.props.articles.map(
              (item, key) =>
                item.content && (
                  <Col key={key} xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card
                      className="article__card  mx-2 my-4"
                      cover={
                        <img alt="img" src={item.urlToImage} height="225" />
                      }
                      actions={[
                        <LikeOutlined key="like" />,

                        <Link
                          to={{
                            pathname: "/article",
                            state: {
                              sources: item.source && item.source.name,
                              publishedAt: item.publishedAt,
                              title: item.title,
                              description: item.description,
                              url: item.url,
                              urlToImage: item.urlToImage,
                              content: item.content,
                            },
                          }}
                        >
                          View Full Article
                        </Link>,
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
