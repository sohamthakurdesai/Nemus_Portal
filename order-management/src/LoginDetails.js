import React from 'react';
import ReactDOM, { render } from 'react-dom';

class LoginDetails extends React.Component {

    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        return(
             <form align="centre">
             <label>
             User Name*: 
             <br/><input className="login-details" type="text" name="UserName" align= "right"/>
             </label>
             <br/>
             <label>
             Password*:
             <br/><input className="login-details" type="password" name="Password" align= "right"/>
             </label>
             </form>
        );
    }
}

export default LoginDetails;