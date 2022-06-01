import React, { Component } from 'react'; //useState, useEffect
import './App.scss';
import  { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import history from './history';

// linked pages
import Home from './pages/index'; //index.js
import Main from './pages/main';
import Product from './components/ProductPage/Product';
import Cart from './components/ProductPage/Cart';
import ContactUs from './pages/contactus';
import SignUp from './pages/signup';
import Login from './auth/login';
import SignOut from './auth/logout';
import CheckOut from './components/checkout/checkout';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleUnsuccesfulLogin = this.handleUnsuccesfulLogin.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignIn() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }
  
  handleUnsuccesfulLogin() {
    this.setState ({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleSignOut() {
    this.setState ({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }
  
  checkLoginStatus() {
    return axios
      .get("https://therugbyshop.simplecodesolutions.com/phprestapi/index.php/user/authenticate", 
        { withCredentials: true })
          .then(response => {

            const loggedIn = response.data.logged_in;
            const loggedInStatus = this.state.loggedInStatus;

            if (loggedIn && loggedInStatus === "LOGGED_IN") {
              return loggedIn;
            } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
              this.setState ({
                loggedInStatus: "LOGGED_IN"
              });
            } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
              this.setState({
                loggedInStatus: "NOT_LOGGED_IN"
              });
            }
          })
          .catch(error => {
            console.log("Error", error);
          });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

      render() {
        return(
        <BrowserRouter history={history}>
          <Home />
        <Routes>
          {/* <Route
               exact path='/'
                render={props => (
                  <Main 
                    {...props}
                    handleSignIn={this.handleSignIn}
                    handleSignOut={this.handleSignOut}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
                /> */}
          <Route path='/' element={<Main />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<Login />} />
          {/* <Route
                exact path='/'
                render={props => (
                  <SignOut
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
            )}
          /> */}
          <Route path='/' element={<SignOut />} />
        </Routes>
      </BrowserRouter>   
    );
  }
}

export default App;
