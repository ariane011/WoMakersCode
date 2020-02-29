import React from "react";
import "materialize-css/dist/css/materialize.min.css";

export const SubmitButton = ({
  
  onSubmit,
  type

}) =>  {

    return (
      <button className="btn waves-effect waves-light" onClick={onSubmit} type={type}>Inscrever</button>
    );
}