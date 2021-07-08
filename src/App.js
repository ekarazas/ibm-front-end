import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Search from "./components/Search/Search";

const App = () => {
  return (
    <>
      <header>
        <h1>GNews</h1>
      </header>
      <Container fluid="md">
        <Search />
      </Container>
    </>
  );
};

export default App;
