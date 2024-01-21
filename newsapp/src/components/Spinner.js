import React, { Component } from "react";
// import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        {/* <img src={require('C:\\Users\\rushi\\OneDrive\\Desktop\\REACT APPS\\newsapp\\src\\Spinner-5.gif')} alt="loading" /> */}
        <img
          src={require("C:\\Users\\RISHIKESH J\\Desktop\\newsapp\\newsapp\\src\\Spinner-5.gif")}
          alt="loading"
        />
        {/* {console.log("spinner is working")} */}
      </div>
    );
  }
}
