import React, { Component } from "react";
import "../../Style/FormStyle.css";
import { connect } from 'react-redux';

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
        <input className="button-submit" type="submit" value="Регистрация"/>
          <div
          className="reg-form__postscript"
          onClick={() => this.props.setForm("authForm")}
        >
          Вы уже зарегистрированы? Войти
        </div>
        </div>
      </form>
    );
  }
}

export const ConnectRegForm = connect(
  null,
  null
)(RegForm);