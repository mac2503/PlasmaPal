import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './landing.css';
import image from '../img/6262.jpg'
class First extends Component{
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render(){
        return(
            <div className="row" id="frow">
                <div className="col s12 m12 l6" id="ffcol">
                    <h1>Healthcare<br/> that departs <br/>from the status!</h1>
                    <p>lorem   sknkdf klaskllk klmklasklfs lkamlkma ,a lkamlkfam klafmk</p>
                </div>  
                <div className="col s12 m12 l6" id="fscol">
                    <img src={image} className="responsive-img" />
                </div>  
            </div>
            
        );
    }
}

export default First;