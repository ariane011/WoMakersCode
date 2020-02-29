import React from "react";
import { RegisterForm } from "../RegisterForm";
import "materialize-css/dist/css/materialize.min.css";

export const FormPage = () => (
  <div className="container">
    <h3>Cadastro de alunas</h3>
    <RegisterForm />
  </div>
);