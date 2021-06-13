import React, {useState} from 'react';
import '../css/header.css';
import {Link} from "react-router-dom";





export default function Header() {



	//const [darkMode, setDarkMode] = useState(false);
    return(
		<header class="site-header">
			<div class="container">

		
			<ul>
					<a href="/"  id="branding"> 
					<img src="images/doglogo.png" alt="" class="logo"/>
					<div class="logo-copy">
							<h1 class="site-title">Dog Picz</h1>
							<small class="site-description">For you to explore dog breeds</small>
						</div>
					</a>
				<div class="main-navigation">
					<button type="button" class="menu-toggle">
						<i class="fa fa-bars"></i>
					</button>

					<ul class="menu">
						<li class="menu-item">
							<Link to="/">Home</Link>
						</li>
						
						<li class="menu-item">
							<Link to="/books">Breeds</Link>
						</li>
					</ul>
				</div>

			</ul>
		  </div>
		</header>
	)	
};
