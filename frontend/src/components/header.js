import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {languages} from '../languages'





class Header extends Component{


	constructor(props){
        super(props);
        this.state = {
            selectedLang: localStorage.getItem("lang")
              ? localStorage.getItem("lang")
              : "en",
          };
        this.change = this.change.bind(this)
    }


	change(option){
        localStorage.setItem('lang', option.target.value);

        this.props.setLanguage(localStorage.getItem("lang"));
        this.setState({selectedLang: option.target.value});
       
    }



	//const [darkMode, setDarkMode] = useState(false);
    render(){

		const lang = localStorage.getItem('lang') || 'en';
		return (
		<header className="site-header">
			<div className="container3">

				<div className="container3">
					<select className="select-lang" onChange={this.change} value={lang}>
							<option value="en" id="langoption">English</option>
							<option value="ru" id="langoption">Русский</option>
							<option value="ee" id="langoption">Eesti</option>
					</select>

				</div>
				
				

			

		
			<ul>
					<a href="/"  id="branding"> 
					<img src="images/doglogo.png" alt="" class="logo"/>
					<div className="logo-copy">
							<h1 className="site-title">{languages[this.state.selectedLang]["h1"]}</h1>
							<small className="site-description">{languages[this.state.selectedLang]["small"]}</small>
						</div>
					</a>
				<div className="main-navigation">

					<ul className="menu">
						<li className="menu-item">
							<Link to="/">{languages[this.state.selectedLang]["link1"]}</Link>
						</li>
						
						<li className="menu-item">
							<Link to="/breeds">{languages[this.state.selectedLang]["link2"]}</Link>
						</li>
					</ul>
				</div>

			</ul>
		  </div>
		</header>

		)}
};

export default Header;
