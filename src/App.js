import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router';
import Home from './Component/Home';
import About from './Component/Signup';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Userhome from './Component/Userhome';
import Bookdesc from './Component/Bookdesc';
import Logout from './Component/Logout';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
function App() {
  return (
    <>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/Signup" exact component={About}/>
    <Route path="/Login" exact component={Login}/>   
    <Route path="/userhome" exact component={Userhome}/>   
    <Route path="/bookdesc/:book_id" exact component={Bookdesc}/>   
    <Route path="/logout" exact component={Logout}/> 
    </Switch>
    </>
  );
}

export default App;
