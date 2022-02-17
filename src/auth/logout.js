import React, { Component } from 'react';
import axios from 'axios';
import SignIn from './login';

export default class SignOut extends Component {
    constructor(props) {
      super(props);
      
      this.handleSignIn = this.handleSignIn.bind(this);
      this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSuccessfulAuth(data) {
      this.props.handleSignIn(data);
      this.props.history.push("/");
    }
  
  checkLogoutClick() {
    axios
      .delete("https://localhost:3000/logout", { withCredentials: true })
        .then(response => {
            this.props.handleSignOut();
      })
      .catch(error => {
        console.log("signout error", error);
      });
  }
  
  render() {
    return (
      <div>
        <SignIn handleSignIn={this.handleSignIn} />
        <SignOut handleSignOut={this.handleSignOut} />
      </div>
    )
  }
}
