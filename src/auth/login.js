import React, { Component } from 'react';
import '../styles/signin.scss';
import LogoPic from '../static/images/mlrballs.png';
//import { NavLink as Link } from 'react-router-dom';
import axios from 'axios';


class SignIn extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            username: "",
            password: "",
            signinErrors: "",
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const {
            username,
            password,
        } = this.state;
        
        axios
            .post("http://localhost:3000/sessions", {
                user: {
                    username: username,
                    password: password,
                }
            },
            { withCredentials: true }
            ).then(response => {
                if (response.data.logged_in) {
                    this.props.handleSuccessfulSignIn (response.data);
                }
            }).catch(error => {
                console.log("login error", error)
            });
        event.preventDefault();
    }

    render() {
        return(
            <div className='login'>
                <div className='login-logo'>
                    <img src={LogoPic} alt="rugbyballs"/>
                </div>
                
                <div className='login-page'>
                    <div className='login-page__top'>
                        <form onSubmit = {this.handleChange}>
                        <input 
                            type='username' 
                            name='username' 
                            placeholder='Username'
                            value={this.state.username}
                            required onChange={this.handleChange}/>
                        </form>
                    </div>

                    <div className='login-page__middle'>
                        <form onSubmit = {this.handleSubmit}>
                        <input 
                            type='password' 
                            name='password' 
                            placeholder='Password'
                            value={this.state.password} 
                            required onChange={this.handleChange}/>
                        </form>
                    </div>

                    <div className='login-page__button'> 
                        <button onClick={this.handleSubmit}>Log In</button>  
                    </div>

                    <nav className='register'> 
                        <a href="/signup">Need to register an account?</a>
                    </nav>
                </div>
            </div>
        )
    }
}

export default SignIn;