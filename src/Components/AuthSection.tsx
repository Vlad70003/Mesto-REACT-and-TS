import React, { Component } from "react";
import "../Style/AuthSection.css";
import { Header } from "../Blocks/Header";
import { AuthForm } from "./AuthForm";
import { RegForm } from "./RegForm";

export class AuthSection extends Component<{}, { form: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      form: "authForm"
    };
  }

  setForm = (form: string): void => {
    this.setState({ form: form });
  };

  render() {
    return (
      <section className="authSection">
        <div className="authSection__wrapper">
          <Header form={this.state.form} setForm={this.setForm} />
          <main className="authSection__main">
            {this.state.form === "authForm" && <AuthForm />}
            {this.state.form === "regForm" && <RegForm setForm={this.setForm} />}
          </main>
        </div>
      </section>
    );
  }
}
