import React from "react";
import PropTypes from "prop-types";
import { Form, InputGroup } from "react-bootstrap";
import MainButton from "../Button/Button";

const Search = ({ submitHandle, searchValidation }) => {
  return (
    <>
      <Form onSubmit={submitHandle}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search..."
            name="search"
            className="shadow-none"
            maxLength={40}
            onKeyUp={searchValidation}
          />
          <InputGroup.Append>
            <MainButton type="submit" variant="primary">
              Search
            </MainButton>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </>
  );
};

Search.propTypes = {
  submitHandle: PropTypes.func.isRequired,
  searchValidation: PropTypes.func.isRequired,
};

export default Search;
