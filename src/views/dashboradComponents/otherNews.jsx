import React from "react";

import { Card, Row, Col, PageHeader, Divider } from "antd";
import { Link } from "react-router-dom";
import { LikeOutlined } from "@ant-design/icons";
const { Meta } = Card;

const OtherNewsComponent = ({ articles }) => {
  return (
    <>
      <Divider orientation="left">
        <PageHeader className="site-page-header" title="AROUND THE GLOBE" />
      </Divider>
      <Row>
        {articles.map(
          (item, key) =>
            item.content && (
              <Col key={key} xs={24} sm={24} md={12} lg={8} xl={8}>
                <Card
                  className="article__card  mx-2 my-2"
                  cover={<img alt="img" src={item.urlToImage} height="225" />}
                  actions={[
                    <LikeOutlined key="like" />,
                    // Redirect the user to /article page and pass values
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
    </>
  );
};

export default OtherNewsComponent;
