import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './landing.css';
import image from '../img/2.jpg'

class Second extends Component{
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render(){
        return(
            <div className="row" id="srow">
                <div className="col s12 m12 l6 center" id="sscol">
                    <img src={image} className="responsive-img"/>
                </div> 
                <div className="col s12 m12 l6" id="sfcol">
                    <h2 className="white-text">Chat Here!</h2><br/>
                    <p className="white-text">Online chat may refer to any kind of communication over the Internet that offers a real-time transmission of text messages from sender to receiver. Chat messages are generally short in order to enable other participants to respond quickly. Thereby, a feeling similar to a spoken conversation is created, which distinguishes chatting from other text-based online communication forms such</p>
                    <br/><br/><a className="waves-effect waves-light btn white ">Go to Chat Page Now!&nbsp;<i className="material-icons" id="arr">arrow_forward</i></a>
                </div>  
                 
            </div>
            
        );
    }
}

export default Second;