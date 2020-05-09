import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const WithSpinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default WithSpinner;
