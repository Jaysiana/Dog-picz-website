import React from 'react';
import {languages} from '../../languages'
import DogList from '../DogList'



export default class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            category: '',
            year: '',
            breed: [],
        }
  
        this.handleCategorySubmit = this.handleCategorySubmit.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    componentWillMount() {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("breeds").innerHTML = `<select >

            
             ${Object.keys(data.message).map(function (breed){
            return `<option>${breed}</option>`
            }).join('')}
            <select/> <input type="submit" value="OK" />`
            document.getElementById("breeds").onchange = this.handleCategoryChange;
        }) 
    }

    handleCategoryChange(event) {
        event.preventDefault();
        this.setState({
            category: event.target.value
        })
    }


    handleCategorySubmit(event) {
        event.preventDefault();
        const {category} = this.state
        fetch(`https://dog.ceo/api/breed/${category}/images`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({breed: data.message})
        })
    }


    render() {
        const {breed} = this.state;

        return (
                <main className="main-content"> 
                    <div className="container">
                                <div className="breadcrumbs">
                                    <a href="/">{languages[this.props.selectedLanguage]["link1"]}</a>
                                    <span>{languages[this.props.selectedLanguage]["link2"]}</span>
						        </div>

                                <h2 className="page-title" >{languages[this.props.selectedLanguage]["h22"]}</h2>
                                
                                        <form onSubmit={this.handleCategorySubmit} >
                                            <div class="filters" id="breeds">
                                            </div>
                                        </form>

                                <div className="page">
                                <div className="row">
                                    <div className="col-md-9">
                                        {breed.length > 0 && <DogList dogs={this.state.breed} />}
                                    </div>
                                </div>
                            </div>
                        </div> 
                </main>
        )
    }
}