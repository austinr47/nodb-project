import React, { Component } from 'react';
import './App.css';

class SearchList extends Component {
    constructor(props) {
        super(props)
        this.state ={
            userInput: 'aa',
        }
    }

      render() {
          const movieArr = this.props.movies.map((elem) =>{
                return(  
                    <div key={elem.imdbID}>
                        <div className='data'>
                            <p>Title: {elem.Title}</p>
                            <p>Year: {elem.Year}</p>
                            <button onClick={() => this.props.addToWatchlist(elem.imdbID, elem.Title, elem.Year)}>Add to Watchlist</button>
                            <hr className='data'/>
                        </div>
                    </div>
                )}
        )

        return (
            <div className='searchbox'>
                <div className='watch2'>
                    Search Movies
                </div>
                <div className='mumbble'>
                    <input className='textField' placeholder='Title' onChange={(event) => {this.setState({userInput: event.target.value})}} />
                    <button onClick={() => {this.props.getMovies(this.state.userInput)}}>Get Movies</button>
                    {movieArr}
                </div>
          </div>
        );
      }
    }
    
    export default SearchList;
    