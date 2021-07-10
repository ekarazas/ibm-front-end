import React, { createContext, useState, useEffect } from "react";

export const ArticlesContext = createContext();

const ArticlesProvider = ({ children }) => {
  const [data, setData] = useState();
  const [originalData, setOriginalData] = useState();

  //Loading state
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://gnews.io/api/v4/top-headlines?token=a42b047b9e20a6842f78677d8d05ecce&lang=en"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.articles);
        setOriginalData(data.articles);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ArticlesContext.Provider
      value={{ data, setData, originalData, isLoading }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
