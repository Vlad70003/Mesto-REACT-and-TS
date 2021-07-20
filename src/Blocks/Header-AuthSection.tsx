import React, { Component } from "react";
import "../Style/AuthSection.css";
import logotype from '../img/logotype.svg';

type Props = {
  form: string;
  setForm: any;
};

export class HeaderAuthSection extends Component<Props, {}> {
  render() {
    return (
      <header className="header">
        <img src={logotype} alt="logotype" />
        {this.props.form === "authForm" && (
          <button
            className="authSection__header-button"
            onClick={() => this.props.setForm("regForm")}
          >
            Регистрация
          </button>
        )}
        {this.props.form === "regForm" && (
          <button
            className="authSection__header-button"
            onClick={() => this.props.setForm("authForm")}
          >
            Войти
          </button>
        )}
      </header>
    );
  }
}
