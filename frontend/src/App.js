/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Books from './components/pages/Books';
import {
  Switch,
  Route
} from "react-router-dom";






export default function App() {


  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className= {darkMode ? 'dark-mode' :  'light-mode'}>
        		<div className="switch-checkbox"> 
              <label className="switch">

                <input type="checkbox" onChange={() => setDarkMode(!darkMode)}></input>
                <span className="slider round"></span>
              </label>

        	</div>

    
        <div className="App">
          <div className="App-box header">
            <Header/>
          </div>

      	<Switch>
          <Route exact path="/">
            <div className="App-box content">
              <Home />
            </div>
          </Route>
          
          <Route path="/books">
            <div className="App-box content">
              <Books />
            </div>
          </Route>   
		  </Switch>
      
      </div>

      </div>
    
  );
};
