import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './landing.css';
import image from '../img/3.jpg'

class Fifth extends Component{
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render(){
        return(
            <div className="row" id="parallax">
                <div id="parbody">
                <h3>Precautions</h3>
                <p>1. You Must be 18 years of age in order to be a plasma donor</p>
                <p>2. If you are eligible for donating plasma only if you weigh more than 110 pounds.</p>
                <p>3. Remember that you should not donate plasma more frequently than recommended.</p>
                <p>4. Find an authorized center for donating plasma.</p>
                </div>
                 
            </div>
            
        );
    }
}

export default Fifth;