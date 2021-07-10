import React from "react";
import { Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ArticleCard = ({ image, title, description, publishedAt, url }) => {
  // Clicked article logging
  const logClickedArticle = () => {
    window.open(url, "_blank");

    fetch("http://localhost:8080/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, image, description, publishedAt, url }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  return (
    <Col md={6} lg={4} className="mb-3">
      <Card bg="white" className="h-100" onClick={logClickedArticle}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="description">{description}</Card.Text>
          <div className="flexible"></div>
        </Card.Body>
        <Card.Footer className="text-muted">{`${publishedAt.slice(
          0,
          10
        )} ${publishedAt.slice(11, 16)}`}</Card.Footer>
      </Card>
    </Col>
  );
};

export default ArticleCard;
