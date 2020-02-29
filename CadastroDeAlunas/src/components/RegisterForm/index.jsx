import React from "react";
import { FormInput } from "../FormInput";
import { SubmitButton } from "../SubmitButton";

export class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
      email: "",
      cpf: "",
      phone: ""
    };
  }

  handleChange = (name, value) => this.setState({ [name]: value });

  validateEmail = email => email.includes("@") && email.includes(".");

  handleSubmitForm = event => {
    console.log("Estou aqui no handler do submit")
    //event.preventDefault();
    const { name, city, email, cpf, phone } = this.state;
    if (!this.validateEmail(email)) {
      return alert("Por favor insira um e-mail válido.");
    }
    if (!name || !city || !email || !cpf || !phone) {
      return alert("Por favor, preencha todos os campos");
    }
    this.onSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
  }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <FormInput
          label="Nome completo"
          value={this.state.name}
          handleChange={this.handleChange}
          name="name"
        />
        <FormInput
          label="Cidade"
          value={this.state.city}
          handleChange={this.handleChange}
          name="city"
        />
        <FormInput
//        inputType="E-mail"
          label="E-mail"
          placeholder="email@email.com"
          value={this.state.email}
          handleChange={this.handleChange}
          name="email"
        />
        <FormInput
          label="CPF"
          placeholder="000.000.000-00"
          value={this.state.cpf}
          handleChange={this.handleChange}
          name="cpf"
        />
        <FormInput
          label="Telefone"
          placeholder="(xx) xxxxx-xxxx"
          value={this.state.phone}
          handleChange={this.handleChange}
          name="phone"
        />
        <SubmitButton
        onClick={this.onSubmit} 
        type="button"
        />
      </form>
    );
  }
}
