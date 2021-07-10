import React, { Component, SyntheticEvent } from "react";
import "../Style/Button-AuthSection.css";

type Props = {
  text: string;
};

export class ButtonAuthSection extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  handleButton = (e:React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    
}

  render() {
    return <input className="button-submit" type="submit" value={this.props.text} onClick={this.handleButton}/>;
  }
}
