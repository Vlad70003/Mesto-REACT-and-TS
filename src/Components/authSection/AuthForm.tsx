import React, { Component } from "react";
import "../../Style/FormStyle.css";
import { authenticate } from "../../actions";
import { connect } from 'react-redux';

type typeState = {
  email: string,
  password: string,
}

type typeProps = {
  authenticate:any
}

export class AuthForm extends Component<typeProps, typeState> {

  constructor(props:any){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (e:any) => {
    e.preventDefault();
    this.props.authenticate( this.state.email, this.state.password);
  }

  changeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({email: e.target.value});
  }

  changePass = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({password: e.target.value});
  }

  render() {
    return (
      <form action="" className="auth-form" onSubmit={this.handleSubmit}>
        <h4 className="auth-form__titile">Вход</h4>
        <div className="auth-form__inputs">
          <input
            className="auth-form__input"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.changeEmail}
          />
          <input
            className="auth-form__input"
            type="password"
            placeholder="Пароль"
            value={this.state.password}
            onChange={this.changePass}
          />
        </div>
        <div className="auth-form__button">
          <input className="button-submit" type="submit" value="Войти"/>
        </div>
      </form>
    );
  }
}

export const ConnectAuthForm = connect(
  null,
  { authenticate }
)(AuthForm);