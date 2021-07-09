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

  //search functionality
  const submitHandle = (e) => {
    e.preventDefault();
    const searchInput = e.target.elements.search.value.trim().toLowerCase();
    if (searchInput.length <= 40) {
      articlesContext.setData(
        articlesContext.data
          .filter((article) =>
            article.title.toLowerCase().includes(searchInput)
          )
          .slice(0, 9)
      );
      const keywords = searchInput;
      fetch("http://localhost:8080/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keywords }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
  };

  // searchValidation
  const [searchValid, setSearchValid] = useState(true);

  const searchValidation = (e) => {
    const pattern = "^[a-zA-Z0-9/s]*$";
    setSearchValid(
      e.target.value.length !== 0
        ? e.target.value.match(pattern)
          ? true
          : false
        : true
    );

    const key = e.keyCode;
    if (key === 8 || key === 46) {
      articlesContext.setData(articlesContext.originalData);
    }
  };

  return (
    <>
      <header>
        <h1>GNews</h1>
      </header>
      <Container fluid="md">
        {searchValid === false && (
          <Alert variant="danger">Use letters and numbers only</Alert>
        )}
        <Search
          submitHandle={submitHandle}
          searchValidation={searchValidation}
        />
        {data && data.length === 0 && (
          <Alert variant="secondary">There is no articles at the moment</Alert>
        )}
        <Row>
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
