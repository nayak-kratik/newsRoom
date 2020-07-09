import React from "react";
import { PageHeader, Button, Row, Col, Typography } from "antd";
const { Paragraph } = Typography;

const Article = (props) => {
  console.log(props.location.state);

  const content = (
    <div className="text-center individual-article">
      <img
        src={props.location.state.urlToImage}
        alt="img"
        className="w-100 article_img"
      ></img>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-left">
          Source - {props.location.state.sources}
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-right">
          {new Date(props.location.state.publishedAt).toDateString()}
        </Col>
      </Row>
      <Paragraph className="font-weight-bold  bg-transparent">
        {props.location.state.description}
      </Paragraph>
      <Paragraph className="font-weight-bold bg-transparent">
        {props.location.state.content}
      </Paragraph>
    </div>
  );
  return (
    <>
      <PageHeader
        title={props.location.state.title}
        className="individual-article-site-page-header my-3"
        extra={[
          <Button
            key="3"
            onClick={() => {
              window.open(props.location.state.url, "_blank");
            }}
          >
            View Full Article
          </Button>,
        ]}
        onBack={() => window.history.back()}
      >
        {content}
      </PageHeader>
    </>
  );
};
export default Article;
