import React, { Component } from 'react';
//import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import axios from 'axios';
import '../../styles/checkout.scss'

class CheckOut extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            email: "",
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
            firstName,
            lastName,
            address,
            city,
            state,
            zip,
            phone_number,
            email
        } = this.state;
        
        axios
            .post("http://localhost:3001/", {
                information: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    address: address,
                    city: city,
                    state: state,
                    zip: zip,
                    phone_number: phone_number,
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
        <div className='checkout'>              
            <div className='checkout-page'>
                <div className='row'>
                    <div className='col-md'>
                        <div className='checkout-page__firstName'>
                            <div className='Form'>
                            <form onSubmit = {this.handleSubmit}>
                            <input type='First Name' 
                                name='First Name' 
                                placeholder='First Name'
                                value={this.state.firstName}
                                required onChange={this.handleChange}/>
                            </form>
                            </div>
                        </div>
                    </div>
                                
                    <div className='col-md'>
                        <div className='checkout-page__lastName'>
                            <form onSubmit = {this.handleSubmit}>
                            <input type='Last Name' 
                                name='Last Name' 
                                placeholder='Last Name'
                                value={this.state.lastName}
                                required onChange={this.handleChange}/>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-md'>
                        <div className='checkout-page__address'>
                            <form onSubmit = {this.handleSubmit}>
                            <input type='Adddress' 
                                name='Address' 
                                placeholder='Address'
                                value={this.state.firstName}
                                required onChange={this.handleChange}/>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md'>
                        <div className='checkout-page__City'>
                            <form onSubmit = {this.handleSubmit}>
                            <input type='city' 
                                name='city' 
                                placeholder='City'
                                value={this.state.city}
                                required onChange={this.handleChange}/>
                            </form>
                        </div>
                    </div>
                               
                    <div className='col-md'>
                        <div className='checkout-page__state'>
                            <form onSubmit = {this.handleSubmit}>
                            <input type='state' 
                                name='state' 
                                placeholder='State' 
                                value={this.state.state}
                                required onChange={this.handleChange}/>
                            </form>
                        </div>
                    </div>
                

                    <div className='col-md'>
                        <div className='checkout-page__zip'>
                            <form onSubmit = {this.handleSubmit}>
                            <input type='zip' 
                                name='zip' 
                                placeholder='Zip'
                                value={this.state.zip}
                                required onChange={this.handleChange}/>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-md'>
                        <div className='checkout-page__phone_number'>
                            <form onSubmit = {this.handleSubmit}>
                            <input type='phone number' 
                                name='phone_number' 
                                placeholder='Phone Number'
                                value={this.state.phone_number}
                                required onChange={this.handleChange}/>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md'>
                        <div className='checkout-page__email'>
                            <form onSubmit = {this.handleSubmit}>
                            <input type='email' 
                                name='email' 
                                placeholder='Email'
                                value={this.state.email} 
                                required onChange={this.handleChange}/>
                            </form>
                        </div>
                    </div>
                </div>        
            </div>

            <div className='checkout-page__button'>
                <button onClick={this.handleSubmit}>Place Order</button>
            </div>
        </div>
        )
    }
}
export default CheckOut;