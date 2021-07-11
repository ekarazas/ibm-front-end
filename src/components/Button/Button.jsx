import React from "react";
import PropTypes from "prop-types";
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

MainButton.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "dark", "light"]),
};

MainButton.defaultProps = {
  type: "button",
  variant: "primary",
};

export default MainButton;
