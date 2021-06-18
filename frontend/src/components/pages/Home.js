import React from 'react';
import DogList from '../DogList'
import {languages} from '../../languages'

export default class Home extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            books: [],
            darkMode: 'light',
            dogs: [],
        }

    }

    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/image/random/30")
        .then((res) => res.json())
        .then((data) => {
            this.setState({dogs: data.message})
        })
    }
        
    render(){
        return(


  
            <main className="main-content">
				<div className="container"  id="dogpics">
					<div className="page">
                        <h2 className="page-title">{languages[this.props.selectedLanguage]["h2"]}</h2>
						<div className="row">
							<div className="col-md-9">
                            <DogList dogs={this.state.dogs}/>
							</div>					
						</div> 
					</div>
				</div> 
			</main>
     
            
    )}
}