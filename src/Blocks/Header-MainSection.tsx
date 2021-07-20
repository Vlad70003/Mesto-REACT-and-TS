import React, { Component } from "react";
import { logOut }  from '../actions';
import "../Style/AuthSection.css";
import logotype from '../img/logotype.svg';
import { connect } from 'react-redux';
let storage = localStorage;
let email = JSON.parse(storage["userLogin"]);


type PropsType = {
  readonly logOut: any,
};


export class HeaderMainSection extends Component<PropsType, {}> {

  hanndleLogOt = () => {
    this.props.logOut();
  }

  render() {
    return (
      <header className="header">
        <div className="header__left-side">
          <img src={logotype} alt="logotype" />
        </div>
        <div className="header__right-side">
          <div className="email">{email[0]}</div>
          <div className="log-out" onClick={this.hanndleLogOt}>Выйти</div>
        </div>
      </header>
    );
  }
}

export const ConnectHeaderMainSection = connect(
  null,
  { logOut }
)(HeaderMainSection)