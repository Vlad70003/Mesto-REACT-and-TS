import React, { Component } from "react";
import "../Style/FormStyle.css";
import { ButtonAuthSection } from "../Blocks/Button-AuthSection";

export class RegForm extends Component<{ setForm: any }, {}> {
  render() {
    return (
      <form action="" className="reg-form">
        <h4 className="reg-form__titile">Регистрация</h4>
        <div className="reg-form__inputs">
          <input className="reg-form__input" type="email" placeholder="Email" />
          <input
            className="reg-form__input"
            type="password"
            placeholder="Пароль"
          />
        </div>
        <div className="reg-form__button">
          <ButtonAuthSection text="Регистрация" />
        </div>
        <div
          className="reg-form__postscript"
          onClick={() => this.props.setForm("authForm")}
        >
          Вы уже зарегистрированы? Войти
        </div>
      </form>
    );
  }
}
