import React from "react";
import MainButton from "./Button";

export default {
  title: "Components/Buttons",
  component: MainButton,
};

export const PrimaryButton = () => {
  return (
    <>
      <MainButton type="submit" variant="primary">
        Search
      </MainButton>
    </>
  );
};
