import React from "react";
import "materialize-css/dist/css/materialize.min.css";

export const SubmitButton = ({
  
  value,
  type

}) =>  {

    return (
      <div id="button">
          <input className="btn waves-effect waves-light" type={type} value={value} />
      </div>
    );
}