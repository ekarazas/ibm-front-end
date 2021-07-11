import React from "react";
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

export default Search;
