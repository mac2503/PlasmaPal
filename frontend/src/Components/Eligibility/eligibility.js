import React, {Component}  from 'react';
import {Link} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './eligibility.css';
import Appbar from '../../Landing/appbar';

class Eligibility extends Component{
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render(){
        return(
            <div className="Eligibility">
                <Appbar />
                <div className="row container" id="firstrow">
                    <div className="col s6 blue white-text  " id="efrow">
                        <h5>Eligibility Form Critiria</h5><br/>
                        <p>Donor safety, as well as the safety of the therapies made from plasma donations is of primary importance. You will need to visit a plasma collection center to determine if you are eligible to donate.
                            In general:</p><ul><li>1. Plasma donors should be at least 18 years old</li><li>2. Plasma donors should weigh at least 110 pounds or 50 kilograms</li>
                            <li>3. Must pass a medical examination</li>
                            <li>4. Complete an extensive medical history screening</li>
                            <li>5. Test non-reactive for transmissible viruses including hepatitis and HIV</li>
                            <li>6. Follow a recommended diet including 50 to 80 grams of daily protein</li>
                            </ul>
                            <p>Because the need for plasm This is important to help ensure the quality and safety of the therapies that patients need to treat life-threatening diseases plasm This is important to help ensure the quality and safety of the therapies that patients need to treat life-threatening diseases plasm This is important to help ensure the quality and safety of the therapies that patients need to treat life-threatening diseases.</p>
                    </div>
                    <div className="col s6   z-depth-2" id="esrow">
                       <div className="container"  id="escont"  >
                        <div className="row">
                            <h5>Your Eligibility Form</h5>
                            <br/>
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12" id="input-field">
                                    <input  id="first_name" placeholder="Age" type="number" className="validate"  />
                                    {/* <label for="first_name">Age</label> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12" id="input-field">
                                    <input id="last_name" placeholder="Covid Negative since how many days" type="text" className="validate" />
                                    {/* <label for="last_name"></label> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12" id="input-field">
                                    <input  id="disabled" type="text" placeholder="Weight" className="validate" />
                                    {/* <label for="disabled">Weight</label> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12" id="input-field">
                                    <input  id="age" placeholder="Health Issues If any" type="text" className="validate" />
                                    {/* <label for="age">Health Issues If any</label> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="file-field input-field">
                                    <div class="btn">
                                        <span>File</span>
                                        <input type="file" />
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" />
                                    </div>
                                    
                                    </div>
                                </div>
                                <div className="row center">
                                    <a className="btn">Check</a>
                                </div>
                                </form>

                            </div>

                       </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Eligibility;