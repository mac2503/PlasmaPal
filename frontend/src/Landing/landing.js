import React,{Component} from 'react';
import Appbar from './appbar';
import First from './first';
import Second from './second';
import Third from './third';
import Fourth from './fourth';
import Fifth from './fifth';
import Footer from './footer'

class Landing extends Component{
    render(){
        return(
            <div className="Landing">
                <Appbar />
                <First />
                <Second />
                <Third />
                <Fourth />
                <Fifth />
                <Footer />
            </div>
        );
    }
}

export default Landing;