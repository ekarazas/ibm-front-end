import React from "react";
import { Button } from "react-bootstrap";

const MainButton = ({ type, variant, children }) => {
  return (
    <>
      <Button type={type} variant={variant}>
        {children}
      </Button>
    </>
  );
};

export default MainButton;
