import React from 'react';
import './App.css';
import { ConnectAuthSection } from "./Components/AuthSection";
import { connect } from 'react-redux';
import {useSelector} from 'react-redux';

function App() {
  return (
    <div className="App">
      <ConnectAuthSection />
    </div>
  );
}



export default connect(
	(state: {isLoggedIn: any}) => ({isLoggedIn: state.isLoggedIn}),
  null
)(App);
