import React from 'react';
import axios from 'axios';
import BooksGrid from './BooksGrid';
import DogList from './DogList'

export default class Home extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            books: [],
            darkMode: 'light',
            dogs: [],
        }
    }


    /*
    componentDidMount() {
        axios.get('api.thedogapi.com/v1/images/search?limit=9')
        .then(res => {
            this.setState({
                books: res.data
            })
            console.log(res)
        })
    }  */


    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/image/random/18")
        .then((res) => res.json())
        .then((data) => {
            this.setState({dogs: data.message})
            console.log( data.message)
        })
    }
        


    render(){
        const {books} = this.state;
    


        return(


        <div class="container">
            <main class="main-content">
				<div class="container">
					<div class="page">
                        <h2 class="page-title">Here are some random cute dogs:</h2>
						<div class="row">
							<div class="col-md-9">
                            <DogList dogs={this.state.dogs}/>
							</div>					
						</div> 
					</div>
				</div> 
			</main>
        </div>
            
    )}
}