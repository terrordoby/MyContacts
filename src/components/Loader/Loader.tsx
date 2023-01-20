import React from "react";
import ReactDOM from "react-dom";
import {  Overlay } from "./styles";

interface ILoaderProps {
  isLoading: boolean
}

const Loader = (props: ILoaderProps) => {
  if(!props.isLoading) {
    return null;
  }
  return (
    ReactDOM.createPortal(
      <Overlay>
        <div className="loader"></div>
      </Overlay>,
      document.getElementById("loader")!
    )
  );
};

export default Loader;
