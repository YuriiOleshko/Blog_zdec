import React, { Component } from 'react';
import './App.css';
import {Switch, Route, withRouter} from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Мessage from './Мessage/Мessage';



class App extends Component {


  render() {
    return (
      <div className="App">
 
       <Switch>
         <Route exact path='/Blog_zdec/' component={MainPage}/>
       
         <Route path={`/Blog_zdec/post/:id`} component={Мessage}/> 
         
       </Switch>
      </div>
    
                  
    )
  }
}


export default   withRouter (App);