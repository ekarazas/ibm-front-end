import React from "react";
import { Form, InputGroup, Button, Alert } from "react-bootstrap";

const Search = () => {
  return (
    <>
      <Alert variant="danger" className="alert">
        Oh no error
      </Alert>
      <Form>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search..."
            name="search"
            className="shadow-none"
            maxLength={40}
          />
          <InputGroup.Append>
            <Button type="submit" id="basic-addon2" variant="primary">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </>
  );
};

export default Search;
