import React, { Component } from "react";
import "../Style/FormStyle.css";
import { ButtonAuthSection } from "../Blocks/Button-AuthSection";

export class AuthForm extends Component {
  render() {
    return (
      <form action="" className="auth-form">
        <h4 className="auth-form__titile">Вход</h4>
        <div className="auth-form__inputs">
          <input
            className="auth-form__input"
            type="email"
            placeholder="Email"
          />
          <input
            className="auth-form__input"
            type="password"
            placeholder="Пароль"
          />
        </div>
        <div className="auth-form__button">
          <ButtonAuthSection text="Войти" />
        </div>
      </form>
    );
  }
}
