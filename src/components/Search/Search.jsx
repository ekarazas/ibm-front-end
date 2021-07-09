import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const Search = () => {
  return (
    <>
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
