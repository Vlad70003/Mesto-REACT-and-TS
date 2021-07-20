import React, {Component} from "react";
import { connect } from "react-redux";

export function MainSection() {
    return(
        <section className="main-section"></section>
    )
}

export const ConnectMainSection = connect(
    null,
    null
)(MainSection);