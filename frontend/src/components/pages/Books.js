import React from 'react';
import axios from 'axios';
import BooksGrid from '../BooksGrid';


export default class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            category: '',
            year: '',
            books: []
        }

      
        this.handleChange = this.handleChange.bind(this);
        this.handleCategorySubmit = this.handleCategorySubmit.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    handleCategoryChange(event) {
        event.preventDefault();
        this.setState({
            category: event.target.value
        })
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            search: event.target.value
        })
    }



    handleCategorySubmit(event) {
        event.preventDefault();
        const {category} = this.state;
        console.log(category)
        const url = `http://localhost:3000/api/books/subject/${category}`
        axios.get(url).then(res => {
            this.setState({books: res.data})  
        })
        
    }

/*
    componentDidMount() {
        axios.get('http://localhost:3000/api/books/')
        .then(res => {
            this.setState({
                books: res.data
            })
        })
    }  */

    render() {
        const {books} = this.state;

        return (
            <div class="container">
                <main class="main-content"> 
                    <div class="container">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a>
                                    <span>Breeds</span>
						        </div>

                                <h2 class="page-title">Search for dog breeds</h2>
                                <div class="row">
                                    <div class="col-md-7">
        
                                        <form onSubmit={this.handleCategorySubmit}>
                                            <div class="filters">
                                                <select name="#" id="categories" placeholder="Choose Category"   onChange={this.handleCategoryChange}>
                                                    <option value="">Choose category</option>
                                                    <option value="Action">Action</option>
                                                    <option value="Computers">Computers</option>
                                                    <option value="Drama">Drama</option>
                                                    <option value="Fantasy">Fantasy</option>
                                                    <option value="Horror">Horror</option>
                                                    <option value="Adventure">Adventure</option>
                                                </select>

                                                <input type="submit" value="Search" />
                                            
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="wrapper">
                                    {
                                        books.length > 0 && 
                                        <BooksGrid books={books} />
                                    }
                                </div>
                        </div> 
                </main>
            </div>
        )
    }
}