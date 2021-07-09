import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const ArticlesContext = createContext();

const ArticlesProvider = ({ children }) => {
  const [data, setData] = useState();
  const [originalData, setOriginalData] = useState();

  useEffect(() => {
    fetch(
      "https://gnews.io/api/v4/top-headlines?token=a42b047b9e20a6842f78677d8d05ecce&lang=en"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.articles);
        setOriginalData(data.articles);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ArticlesContext.Provider value={{ data, setData, originalData }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
