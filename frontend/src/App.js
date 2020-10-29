import React from 'react';
import {useState} from 'react';
import './App.css';
import {Button,Typography,TextField} from '@material-ui/core'
import Form from './component/Form';
import Greet from './component/Greet';
import Register from './component/Register';

import { Route ,BrowserRouter as Router,Switch,Link} from 'react-router-dom'
function App(){
    const [token , setToken] = useState('');
    const [dis , setDis] = useState(false);
    const userlogin = (tok)=>{
      console.log(tok)
        setToken(tok)
      }
  return (

    <Router>
    <div className="App">
    <Typography variant ="h4"><Link to =  "/register">Register</Link></Typography>

    <Switch>
      <Route exact path = "/" render={() => <Form userlogin = {userlogin}/>}/>
      <Route exact path = "/greet" render={() => <Greet token = {token}/>}/>
      <Route excat path ="/register" component = {Register}/>
    </Switch>
    <br></br>

    <center>
    <br></br>

    </center>
    </div>

    </Router>
  );
}


export default App;
