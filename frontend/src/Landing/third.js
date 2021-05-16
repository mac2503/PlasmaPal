import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './landing.css';
import image from '../img/5556.jpg';

class Third extends Component{
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render(){
        return(
            <div className="row" id="trow">
                <div className="col s12 m12 l6" id="tfcol">
                <h2 className="white-text">Slot Booking!</h2><br/>
                    <p className="white-text">Online chat may refer to any kind of communication over the Internet that offers a real-time transmission of text messages from sender to receiver. Chat messages are generally short in order to enable other participants to respond quickly. Thereby, a feeling similar to a spoken conversation is created, which distinguishes chatting from other text-based online communication forms such</p>
                    <br/><br/><a className="waves-effect waves-light btn white ">Book Slots Now!&nbsp;<i className="material-icons" id="arr">arrow_forward</i></a>
                    
                </div> 
                <div className="col s12 m12 l6 center" id="tscol">
                    <img src={image} className="responsive-img" />
                </div>  
                 
            </div>
            
        );
    }
}

export default Third;