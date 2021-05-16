import React,{Component} from 'react';
import {Link, BrowserRouter} from 'react-router-dom';

import './slot.css';
import Appbar from '../../Landing/appbar';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import image1 from '../../img/college1.jpg'
import image2 from '../../img/college3.jpg'
import donate from '../../img/5.jpg'

class Slot extends Component{
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render(){
        return(
            <div className="Slot">
                <Appbar />
                    <div class="container center" id="cont1">
                        <img src={donate} className="img1 responsive-img" />
                    </div>
                    
                        <form className="col s12  center">
                            <div className="row" id="formrow">
                                <div className="col s4">

                                </div>
                                <div className="input-field col s4">
                                    <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                                    <label for="icon_prefix2">Search location here!</label>
                                    <a className="btn">Search</a>
                                </div>
                            </div>
                        </form>
                    
                    <div className="row" id="secondrow">
                        <div className="col s12 m6 l3">
                            <div class="card z-depth-3">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="activator" src={image1} />
                                    <span class="card-title">GCS Medical College</span>
                                </div>
                                <div class="card-content">
                                    <p><i className="material-icons tiny">location_on</i>&nbsp;Swadeshi Mill Comp, Naroda Road, Ahmedabad</p>
                                    
                                    
                                </div>
                                <div class="card-action">
                                        <a href="#modal1" className="modal-trigger" >Book a SLot Now!</a>
                                        
                                    </div>
                                
                            </div>
                        </div>
                        <div className="col s12 m6 l3">
                            <div class="card z-depth-3" id="card2">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="activator" id="card2img" src={image2} />
                                    <span class="card-title">AIIMS Medical College</span>
                                </div>
                                <div class="card-content">
                                    <p><i className="material-icons tiny">location_on</i>&nbsp;New Delhi, 110011, Sarita Vihar, Lane no. 4 </p>
                                    
                                    
                                </div>
                                <div class="card-action">
                                        <a href="#modal1" className="modal-trigger" >Book a SLot Now!</a>
                                        
                                    </div>
                                
                            </div>
                        </div>
                        <div className="col s12 m6 l3">
                            <div class="card z-depth-3">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="activator" src={image1} />
                                    <span class="card-title">GCS Medical College</span>
                                </div>
                                <div class="card-content">
                                    <p><i className="material-icons tiny">location_on</i>&nbsp;Swadeshi Mill Comp, Naroda Road, Ahmedabad</p>
                                    
                                    
                                </div>
                                <div class="card-action">
                                        <a href="#modal1" className="modal-trigger" >Book a SLot Now!</a>
                                        
                                </div>
                                <div id="modal1" class="modal">
                                    <div class="modal-content center">
                                        <h4>Slot Booking Form</h4>
                                        <p>You need to fill this form to proceed further!</p>

                                        <div class="row">
                                            <form class="col s12">
                                            <div class="row">
                                                <div class="input-field col s6">
                                                <input  id="first_name" type="text" class="validate" />
                                                <label for="first_name">First Name</label>
                                                </div>
                                                <div class="input-field col s6">
                                                <input id="last_name" type="text" class="validate" />
                                                <label for="last_name">Last Name</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="input-field col s6">
                                                <input  id="disabled" type="text" class="validate" />
                                                <label for="disabled">Blood Group</label>
                                                </div>
                                            
                                                <div class="input-field col s6">
                                                <input  id="age" type="text" class="validate" />
                                                <label for="age">Age</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="input-field col s6">
                                                <input  id="location" type="text" class="validate" />
                                                <label for="location">Location</label>
                                                </div>
                                            
                                                <div class="input-field col s6">
                                                <input  id="contact" type="text" class="validate" />
                                                <label for="contact">Contact</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="input-field col s6">
                                                <input id="date" className="datepicker" type="text" />
                                                <label for="date">Date</label>
                                                </div>
                                            
                                                <div class="input-field col s6">
                                                <input id="time" type="text" class="timepicker" />
                                                <label for="time">Time</label>
                                                </div>
                                            </div>
                                            
                                            </form>
                                        </div>
                                    </div>
                                    <div class="modal-footer center" id="footmodal">
                                        <a href="#!" class="modal-close waves-effect waves-green btn center">Submit</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                    </div>

            </div>
        );
    }
}

export default Slot;