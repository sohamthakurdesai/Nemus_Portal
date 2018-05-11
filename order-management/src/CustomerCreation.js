import React from 'react';
import ReactDOM, { render } from 'react-dom';
import CustomerDetails from './CustomerDetails';
import LoginDetails from './LoginDetails';
import Address from './Address';

class CustomerCreation extends React.Component {

    constructor(){
        super();
        this.state = {
            confirmPassword: "",
        }
    }

    render(){
        return (
            <div className="container">
            <h2><i>Books-Coffee-Cat Repeat</i></h2>
            <fieldset>
                <CustomerDetails/>
                <fieldset>
                    <legend>Login Details</legend>
                    <LoginDetails/>
                    <label>
                    Confirm Password*: 
                    <br/><input className="login-details" type="password" name="CustomerName" align= "right" name="confirmPassword"/>
                    </label>
                </fieldset>
                <input type = "submit"/>
                <button type = "button" onClick={this.handleButtonClick}>Cancel</button>
            </fieldset>
            </div>
        );
    }

    handleButtonClick(){
        alert("Operation Cancelled.");
    }
}

export default CustomerCreation;