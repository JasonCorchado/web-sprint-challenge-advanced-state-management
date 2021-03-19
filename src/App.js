import React, { Component } from "react";
import { connect } from 'react-redux';
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchInfo } from './actions/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


class App extends Component {

  componentDidMount() {this.props.fetchInfo()};

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList smurfs = {this.props.smurfs} isLoading = {this.props.isLoading}/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    smurfs:[ ...state.smurfs],
    error: state.error
  };
};

export default connect(mapStateToProps, {fetchInfo})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.