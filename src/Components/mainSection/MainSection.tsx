import React, {Component} from "react";
import '../../Style/MainSection.css';
import { ConnectHeaderMainSection } from '../../Blocks/Header-MainSection';
import { connect } from "react-redux";

export function MainSection() {
    return(
        <section className="main-section">
            <div className="main-section__wrapper">
                < ConnectHeaderMainSection />
            </div>
        </section>
    )
}

export const ConnectMainSection = connect(
    null,
    null
)(MainSection);