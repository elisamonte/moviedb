import React, { Component } from 'react';
import moviesList from '.App.js';

class Sort extends Component {
  constructor (props){
    super(props)
    this.toggleSortTitle = this.toggleSortTitle.bind(this)
    this.state= {
      moviesList: [],
      isAFirst: true
    }
  }

  sortByTitle (){
    const {moviesList} = this.setState
    let newMoviesList = newMoviesList
    if (this.state.isAFirst){
      newMoviesList = moviesList.sort((a,b)=> a.title > b.title)
    } else{
      newMoviesList = moviesList.sort((a,b))=> a.title < b.title)
    }
    this.setState({
      isAFirst: !this.state.isAFirst,
      moviesList: newMoviesList
    })
  }

  toggleSortTitle (event){
    console.log("hope this works")
    this.sortByTitle()
  }

  componentWillMount (){
    const moviesList = moviesList
    this.setState({
      isAFirst: true,
      moviesList: moviesList
    })
  }
  render(){

    return(

    )
  }


}

export default Sort;
