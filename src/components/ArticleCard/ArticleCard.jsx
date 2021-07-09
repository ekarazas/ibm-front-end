import React from "react";
import { Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ArticleCard = ({ image, title, description, publishedAt }) => {
  return (
    <Col md={6} lg={4} className="mb-3">
      <Card bg="white" className="h-100">
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
