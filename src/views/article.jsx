import React from "react";
import { PageHeader, Button, Tag, Typography } from "antd";
const { Paragraph } = Typography;

const Article = (props) => {
  console.log(props.location.state);

  const content = (
    <div className="text-center">
      <img
        src={props.location.state.urlToImage}
        alt="img"
        className="w-90"
      ></img>
      <Paragraph className="font-weight-bold m-3  bg-transparent">
        {props.location.state.description}
      </Paragraph>
      <Paragraph className="font-weight-bold m-3 bg-transparent">
        {props.location.state.content}
      </Paragraph>
    </div>
  );
  return (
    <>
      <PageHeader
        title={props.location.state.title}
        className="site-page-header mx-5"
        subTitle={props.location.state.sources}
        tags={
          <Tag>
            Published On -{" "}
            {new Date(props.location.state.publishedAt).toDateString()}
          </Tag>
        }
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
