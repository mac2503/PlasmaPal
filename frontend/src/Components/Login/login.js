import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './login.css';
import image from '../../img/80.png'
import image2 from '../../img/logo512.png'
import{ Link} from 'react-router-dom'

class Login extends Component{
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render(){
        return(
            <div className="row " id="Login">
                <div className="col s12 m12 l5 center" id="flogin">
                    <div className="row center" id="logincard">
                    <img src={image2} id="icon"/>
                        <h5>Login</h5>
                        <form className="col s12 center">
                        
                        
                        
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate"/>
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate"/>
                                <label for="password">Password</label>
                            </div>
                        </div>
                        
                        <Link to="/"  className="btn waves-effect"> Submit</Link>
                        </form>
                        
                    </div>
                </div>
                <div className="col s12 m12 l7 center" id="seclogin">
                   <img src={image} className="responsive-img" />
                   <h4 className="white-text">Login Here!</h4>
                   <p className="white-text">Just Create an account using your name and email and then<br/> page will be redirected to signin page automatically.</p>
                </div>
            </div>
        );
    }
}

export default Login;