import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReactDom from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
// import { Card, CardImg, CardTitle, CardText, CardDeck,
//  CardSubtitle, CardBody } from 'reactstrap';

class App extends Component {



  constructor(){
    super();
    this.toggle = this.toggle.bind(this);
    this.state= {
      moviesList: [],
      dropdownOpen: false
    };
  }

  toggle(){
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  componentWillMount(){
    axios.get('http://localhost:3001/api/movies').then(response => {
      this.setState({ moviesList: response.data.results });
    })
  }

  render() {

    console.log(this.state.moviesList);
    const { rating } = this.state;
    const picURL= 'http://image.tmdb.org/t/p/original'
    const movies= this.state.moviesList.map((movie, index)=> {

      return(
      //Display movies within cards after calling from movieDB
        <div className="card-deck">
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" src={`${picURL}${movie.poster_path}`} alt="movie poster"/>
                <h5 className="card-title">{movie.title}</h5>
                <StarRatingComponent
                name="rate2"
                editing={false}
                renderStarIcon={() => <span>★</span>}
                starCount={10}
                value ={movie.vote_average}
                />
                <p className="card-rating">Viewer Rating: <b>{movie.vote_average}</b></p>
                <h6 className="card-overview">{movie.overview}</h6>
              </div>
            </div>
        </div>
      );
    });
    return (
      <div>

        <header>
          <div className="container">
            <img className="logo" src= "tmdblogo.png" alt="logo"/>
            <nav>
              <ul>
                <li><a href="#">DISCOVER</a></li>
                <li><a href="#">MOVIES</a></li>
                <li><a href="#">TV SHOWS</a></li>
                <li><a href="#">PEOPLE</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <body className="App">

          <input className="search" placeholder="Search for a movie, tv show, person..."/>
          <div className="container">
          <h4 className="body-header">Popular Movies</h4>
          </div>
          <div>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                Sort
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Sort Movies</DropdownItem>
                <DropdownItem>By Title</DropdownItem>
                <DropdownItem>By Rating </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

        { movies }

        </body>
      </div>



    );
  }
}

export default App;
