import React from 'react';
import ReactDOM, { render } from 'react-dom';
import CountrySelect from './CountrySelect';
import CustomerDetails from './CustomerDetails';

class Address extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            countries: "",
            fullName: "",
            mobileNumber: "",
            pinCode: "",
            flatNo: "",
            floor: "",
            buildingName: "",
            locality: "",
            landmark: "",
            city: "",
            state: "",
            addressType: "",
        };
      }

    render(){
        return(
            <form>
                <b><i>Country</i></b><br/>
                <CountrySelect value={this.state.countries} onChange={e=> this.handleChange(e)}/>
                <br/><b><i>Full name</i></b><br/>
                <input type="text" id="fullName" name="fullName" value={this.state.fullName} onChange={e=> this.handleChange(e)}/>
                <br/><b><i>Mobile number</i></b><br/>
                <input type="number" id="mobile" name="mobileNumber" value={this.state.mobileNumber} onChange={e=> this.handleChange(e)}/>
                <br/><b><i>Pincode</i></b><br/>
                <input type="number" id="pin" name="pinCode" value={this.state.pinCode} onChange={e=> this.handleChange(e)}/>
                <br/><b><i>Flat/House No.</i></b><br/>
                <input type="text" id="flatNo" name="flatNo" value={this.state.flatNo} onChange={e=> this.handleChange(e)}/>
                <br/><b><i>Floor</i></b><br/>
                <input type="number" min="0" max="200" id="floor" name="floor" value={this.state.floor} onChange={e=> this.handleChange(e)}/>
                <br/><b><i>Building Name/Wing</i></b><br/>
                <input type="text" id="buildingName" name="buildingName" value={this.state.buildingName} onChange={e=> this.handleChange(e)}/>
                <br/><b><i>Colony/Street/Locality</i></b><br/>
                <input type="text" id="locality" name="locality" value={this.state.locality} onChange={e=> this.handleChange(e)}/>
                <br/><b><i>Landmark</i></b><br/>
                <input type="text" id="landmark" name="landmark" value={this.state.landmark} onChange={e=> this.handleChange(e)}/>
                <br/><b><i>City</i></b><br/>
                <input type="text" id="city" name="city" value={this.state.city} onChange={e=> this.handleChange(e)}/>
                <br/><b><i>State</i></b><br/>
                <input type="text" id="state" name="state" value={this.state.state} onChange={e=> this.handleChange(e)}/>
                <br/><b><i>Address Type</i></b><br/>
                <select id="addressType" name="addressType" value={this.state.addressType} onChange={e=> this.handleChange(e)}>
                    <option value="Ship">Shipping Address</option>
                    <option value="Bill">Billing Address</option>
                </select>
                <br/><br/>
            </form>
        );
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    
}

export default Address;