import React from 'react';
import './App.css';
import { ConnectAuthSection } from "./Components/AuthSection";
import { connect } from 'react-redux';
import {useSelector} from 'react-redux';

function App(props:any) {
  return (
    <div className="App">
      {!props.isLoggedIn && <ConnectAuthSection /> }
    </div>
  );
}



export default connect(
	(state: {isLoggedIn: any}) => ({isLoggedIn: state.isLoggedIn}),
  null
)(App);
