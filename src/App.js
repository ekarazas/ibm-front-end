import React, { useState, useContext, useEffect } from "react";
import { Container, Row, CardGroup, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Search from "./components/Search/Search";
import ArticleCard from "./components/ArticleCard/ArticleCard";

import { ArticlesContext } from "./contexts/articlesContext";

const App = () => {
  const articlesContext = useContext(ArticlesContext);

  const [data, setData] = useState();

  useEffect(() => setData(articlesContext.data), [articlesContext.data]);

  return (
    <>
      <header>
        <h1>GNews</h1>
      </header>
      <Container fluid="md">
        <Search />
        <Row>
          {data && data.length === 0 && (
            <Alert variant="secondary">
              There is no articles at the moment
            </Alert>
          )}
          <CardGroup>
            {data &&
              data.map((article) => (
                <ArticleCard
                  key={article.url}
                  image={article.image}
                  title={article.title}
                  description={article.description}
                  publishedAt={article.publishedAt}
                  url={article.url}
                />
              ))}
          </CardGroup>
        </Row>
      </Container>
    </>
  );
};

export default App;
