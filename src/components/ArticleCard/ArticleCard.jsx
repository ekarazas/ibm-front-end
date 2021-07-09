import React from "react";
import { Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ArticleCard = ({ image, title, description, publishedAt }) => {
  return (
    <Col md={6} lg={4}>
      <Card bg="white" className="mb-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="description">{description}</Card.Text>
          <Card.Subtitle className="text-muted">{publishedAt}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticleCard;
