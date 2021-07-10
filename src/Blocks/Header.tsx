import React, { Component } from "react";
import "../Style/AuthSection.css";

type Props = {
  form: string;
  setForm: any;
};

export class Header extends Component<Props, {}> {
  render() {
    return (
      <header className="authSection__header">
        <div className="authSection__header-logo">Mesto</div>
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
