import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './Landing/landing'
import Login from './Components/Login/login'
import Slot from './Components/Slot/slot';
function App() {
  return (
    
     <Router>
       <div className="App">
          <Switch>
            <Route exact path ="/" component={Landing} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/bookslot" component={Slot} />
          </Switch>
       </div>
     </Router>
    
  );
}

export default App;
