import React, { Component, SyntheticEvent } from "react";
import "../Style/Button-AuthSection.css";
import { connect } from 'react-redux';

type Props = {
  text: string;
};

export class ButtonAuthSection extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  handleButton = (e:React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if(this.props.text === 'Войти'){

    }
}

  render() {
    return <input className="button-submit" type="submit" value={this.props.text} onClick={this.handleButton}/>;
  }
}

export const ConnectButtonAuthSection = connect(
  null,
  null
)(ButtonAuthSection);