import React from "react";
import { RegisterForm } from "../RegisterForm";
import "materialize-css/dist/css/materialize.min.css";
import './style.css'

export const FormPage = () => (
  <div className="principal">
    <div className="container">
        <div id="banner">
          <h2 className="subtitulo">Cadastro de alunas</h2>
    </div>
      <RegisterForm />
    </div>
  </div>
);