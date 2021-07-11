import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import MainButton from "../Button/Button";

import Search from "./Search";

export default {
  title: "Components/Forms",
  component: Search,
};

export const SearchField = () => {
  return (
    <>
      <Form>
        <InputGroup>
          <Form.Control
            placeholder="Search..."
            name="search"
            className="shadow-none"
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
