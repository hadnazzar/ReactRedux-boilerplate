import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import { changeEmail } from '../actions'; 

const Home = ({email, changeEmail}) => {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>{email}</div>
          <input onChange={(e) => changeEmail(e.target.value)}></input>
        </header>
      </div>
  );
}

const mapStateToProps = (state) => {
  const { profile } = state
  return { email: profile.email }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeEmail }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
