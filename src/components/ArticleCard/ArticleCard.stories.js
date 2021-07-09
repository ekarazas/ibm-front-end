import React from "react";
import { Row } from "react-bootstrap";
import "../../App.scss";
import ArticleCard from "./ArticleCard";

export default {
  title: "Components/ArticleCard",
  component: ArticleCard,
};

export const MainArticleCard = () => {
  return (
    <Row>
      <ArticleCard
        image="https://www.siliconrepublic.com/wp-content/uploads/2020/03/BOO_3353_2.jpg"
        title="Nick Leeder appointed as latest head of Google Ireland"
        publishedAt="2020-03-23 13:58"
        description="Google has announced that Nick Leeder will replace Fionnuala  announced that Nick Leeder will replace Fionnuala  announced that Nick Leeder will replace Fionnuala Meehan as the head of its Irish operation starting in April."
      />
    </Row>
  );
};
