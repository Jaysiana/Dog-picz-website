
import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Breeds from './components/pages/Breeds';
import {Switch,Route} from "react-router-dom";
import DarkMode from '../src/components/darkmode'





export default function App() {

  const [language, setLang] = useState(
    localStorage.getItem("lang") ?
      localStorage.getItem("lang") : 'en'
  );

  const setLang2 = (childData) =>{
    setLang(childData)
  }

  return (

    <div >
      <div className="container3">
          <div className="switch-checkbox"> 
              <label className="switch">
                <DarkMode />
                <span className="slider round"></span>
              </label>
        	</div>
      
      </div>
        <div className="App">
          <div className="App-box header">
            <Header setLanguage={setLang2}/>
          </div>

      	<Switch>
          <Route exact path="/">
            <div className="App-box content">
              <Home selectedLanguage={language}/>
            </div>
          </Route>
          
          <Route path="/breeds">
            <div className="App-box content">
              <Breeds selectedLanguage={language}/>
            </div>
          </Route>   
		  </Switch>
      
      </div>

      </div>
    
  );
};
