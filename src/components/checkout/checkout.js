import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class CheckOut extends Component {
  
    render() {
        return(
            <div className="container">
            <h3>Thank you for your purchase!</h3>

            <Link to='/'>
                    <Button onClick={this.handleSubmit}>Close</Button>
                </Link>

            </div>
        )
    }
}
export default CheckOut;