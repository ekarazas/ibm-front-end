import React from "react";
import ReactDOM from "react-dom";
import ArticlesProvider from "./contexts/articlesContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ArticlesProvider>
      <App />
    </ArticlesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
