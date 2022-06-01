import React, { Component } from 'react';
import '../styles/signup.scss';
import LogoPic from '../static/images/mlrballs.png';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import axios from 'axios';

class SignUp extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            username: "",
            password: "",
            confirm_password: "",
            email: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            team: "",
            signupErrors: "",
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const {
            username,
            password,
            confirm_password,
            email,
            firstname,
            lastname,
            address,
            city,
            state,
            zip,
            phone_number,
            team
        } = this.state;
        
        axios
            .post("https://therugbyshop.simplecodesolutions.com/phprestapi/api.php/createUser", {
                user: {
                    username: username,
                    password: password,
                    confirm_password: confirm_password,
                    firstname: firstname,
                    lastname: lastname,
                    eamil: email,
                    address: address,
                    city: city,
                    state: state,
                    zip: zip,
                    phone_number: phone_number,
                    team: team,
                }
            },
            { withCredentials: true }
            ).then(response => {
                console.log("signup res", response);
            }).catch(error => {
                console.log("signup error", error)
            })
        event.preventDefault();
    }

    render() {
        return(
        <div className='signup'>
            <div className='signup-logo'>
                <img src={LogoPic} alt="rugbyballs"/>
            </div>
                
            <div className='signup-page'>
                <div className='signup-page__username'>
                    <form onSubmit = {this.handleSubmit}>
                    <input type='username' 
                        name='username' 
                        placeholder='Username'
                        value={this.state.username}
                        required onChange={this.handleChange}/>
                    </form>
                </div>

                <div className='signup-page__password'>
                    <form onSubmit = {this.handleSubmit}>
                    <input type='password' 
                        name='password' 
                        placeholder='Password' 
                        value={this.state.password}
                        required onChange={this.handleChange}/>
                    </form>
                </div>

                <div className='signup-page__confirm_password'>
                    <form onSubmit = {this.handleSubmit}>
                    <input type='password' 
                        name='confirm_password' 
                        placeholder='Confirm Password'
                        value={this.state.confirm_password}
                        required onChange={this.handleChange}/>
                    </form>
                </div>

                <div className='signup-page__email'>
                    <form onSubmit = {this.handleSubmit}>
                    <input type='email' 
                        name='email' 
                        placeholder='Email'
                        value={this.state.email} 
                        required onChange={this.handleChange}/>
                    </form>
                </div>

                <div className='signup-page__firstname'>
                    <form onSubmit = {this.handleSubmit}>
                    <input type='firstname' 
                        name='firstname' 
                        placeholder='First Name'
                        value={this.state.firstname} 
                        required onChange={this.handleChange}/>
                    </form>
                </div>
                <div className='signup-page__lastname'>
                    <form onSubmit = {this.handleSubmit}>
                    <input type='lastname' 
                        name='lastname' 
                        placeholder='Last Name'
                        value={this.state.lastname} 
                        required onChange={this.handleChange}/>
                    </form>
                </div>

                <div className='signup-page__address'>
                    <form onSubmit = {this.handleSubmit}>
                    <input type='address' 
                        name='address' 
                        placeholder='Address'
                        value={this.state.address} 
                        required onChange={this.handleChange}/>
                    </form>
                </div>

                <div className='signup-page__City'>
                    <form onSubmit = {this.handleSubmit}>
                    <input type='city' 
                        name='city' 
                        placeholder='City'
                        value={this.state.city}
                        required onChange={this.handleChange}/>
                    </form>
                </div>

                <div className='signup-page__state'>
                    <form onSubmit = {this.handleSubmit}>
                    <input type='state' 
                        name='state' 
                        placeholder='State' 
                        value={this.state.state}
                        required onChange={this.handleChange}/>
                    </form>
                </div>

                <div className='signup-page__zip'>
                    <form onSubmit = {this.handleSubmit}>
                    <input type='zip' 
                        name='zip' 
                        placeholder='Zip'
                        value={this.state.zip}
                        required onChange={this.handleChange}/>
                    </form>
                </div>

                <div className='signup-page__phone_number'>
                    <form onSubmit = {this.handleSubmit}>
                    <input type='phone number' 
                        name='phone_number' 
                        placeholder='Phone Number'
                        value={this.state.phone_number}
                        required onChange={this.handleChange}/>
                    </form>
                </div>

                <div className='signup-page__team'>
                    <form onSubmit = {this.handleSubmit}>
                    <input type='team' 
                        name='team' 
                        placeholder='Team'
                        value={this.state.team} 
                        required onChange={this.handleChange}/>
                    </form>
                </div>
            </div>

            <div className='signup-page__button'>
                <Link to='/product'>
                    <Button onClick={this.handleSubmit}>Register</Button>
                </Link>
            </div>
        </div>
        )
    }
}
            

export default SignUp;