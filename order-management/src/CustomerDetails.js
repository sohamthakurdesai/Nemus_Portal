import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Address from './Address';
import PopupButton from './PopupButton';

class CustomerDetails extends React.Component {

    constructor(){
        super();
        this.state = {
            customerName: "",
            shippingAddress: "",
            isShippingBillingSame: false,
            billingAddress: "",
            emailAddress: "",
            contactNumber: "",
        }
    }

    render(){
        return(
            <div>
                <h3>Customer Sign-up</h3>
                <fieldset>
                    <legend>Customer Details</legend>
                        Customer Name*:
                        <br/><input className="customer-details" type="text" id="customerName" name="customerName" align= "right" onChange={e=> this.handleChange(e)}/>
                        <br/><br/>
                        <PopupButton id="address" description = "Add address" popUpComponent={Address} popUpFunction= {this.saveFromPopup.bind(this)}/>
                        <br/>
                        Shipping Address*:
                        <br/><textarea resize="none" readOnly="readonly" className="customer-address" type="text" id="shippingAddress" name="shippingAddress" value={this.state.shippingAddress} 
                        onChange={e=> this.handleChange(e)}/>
                        <br/>
                        <input type="checkbox" id="issShippingBillingSame" name="isShippingBillingSame"  onChange={e=> this.handleChange(e)}/>    Billing address same as Shipping Address
                        <br/>
                        Billing Address*:
                        <br/><textarea readOnly="readonly" className="customer-address" type="text" id="billingAddress" name="billingAddress" value={this.state.billingAddress} onChange={e=> this.handleChange(e)}/>
                        <br/>
                        Email Address*:
                        <br/><input className="customer-details" type="email" id="emailAddress" name="emailAddress" align= "right" onChange={e=> this.handleChange(e)}/>
                        <br/>
                        Contact Number*: 
                        <br/><input className="customer-details" type="number" id="contactNumber" name="contactNumber" align= "right" onChange={e=> this.handleChange(e)}/>
                </fieldset>
            </div>
        )
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    saveFromPopup (){
        this.setState(
            {
                shippingAddress: "input value",
                billingAddress: "input value",
            }
        )
    }
 }

 export default CustomerDetails;