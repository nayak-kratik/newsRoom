import React from "react";

import { Carousel, Row, Col, PageHeader, Divider, Typography } from "antd";
import { Link } from "react-router-dom";
import { ExpandAltOutlined } from "@ant-design/icons";
const { Paragraph, Title } = Typography;

const BreakingNewsComponent = ({ breakingNews }) => {
  return (
    <>
      <Divider orientation="left">
        <PageHeader className="site-page-header" title="BREAKING NEWS" />
      </Divider>
      <Carousel autoplay dotPosition="bottom" effect="fade">
        {breakingNews.map((item, key) => (
          <div key={key} className="article__carousel-card">
            <img
              src={item.urlToImage}
              alt="img"
              className="m-auto w-100 article_img"
            ></img>
            <div className="m-auto w-100 position-absolute article__title">
              <Row align="middle">
                <Col xs={18} sm={18} md={18} lg={23} xl={23}>
                  <span className="text-color-white">
                    {item.source && item.source.name}
                  </span>
                  <h3 className="text-color-white m-0 p-0">{item.title}</h3>
                </Col>
                <Col xs={6} sm={6} md={6} lg={1} xl={1}>
                  <Link
                    className="p-2 color-one"
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
                    <ExpandAltOutlined />
                  </Link>
                </Col>
              </Row>
            </div>
            <div className="article__content">
              {item.content ? (
                <>
                  <Row>
                    <Col>
                      <Typography>
                        <Title level={4} className="article_description">
                          {item.description}
                        </Title>
                        <Paragraph>{item.content}</Paragraph>
                      </Typography>
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
    </>
  );
};

export default BreakingNewsComponent;
