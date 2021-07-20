import React, { Component } from "react";
import "../Style/AuthSection.css";
import { Header } from "../Blocks/Heade-AuthSection";
import { ConnectAuthForm } from "./AuthForm";
import { ConnectRegForm } from "./RegForm";
import { connect } from 'react-redux';

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
            {this.state.form === "authForm" && <ConnectAuthForm />}
            {this.state.form === "regForm" && <ConnectRegForm setForm={this.setForm} />}
          </main>
        </div>
      </section>
    );
  }
}

export const ConnectAuthSection = connect(
	null,
  null
)(AuthSection);