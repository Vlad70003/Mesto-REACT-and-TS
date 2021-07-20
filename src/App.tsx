import React from 'react';
import './App.css';
import { ConnectAuthSection } from "./Components/authSection/AuthSection";
import { ConnectMainSection } from './Components/mainSection/MainSection';
import { connect } from 'react-redux';


function App(props:any) {
  return (
    <div className="App">
      {!props.isLoggedIn && <ConnectAuthSection /> }
      {props.isLoggedIn && < ConnectMainSection />}
    </div>
  );
}



export default connect(
	(state: {isLoggedIn: any}) => ({isLoggedIn: state.isLoggedIn}),
  null
)(App);
