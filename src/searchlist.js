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
        //   console.log(this.props.movies)
          const movieArr = this.props.movies.map((elem, i) =>{
                return(  
                    <div key={i}>
                        <div className='data'>
                            <p>Title: {elem.Title}</p>
                            <p>Year: {elem.Year}</p>
                            <button onClick={() => this.props.addToWatchlist(i)}>Add to Watchlist</button>
                            <hr className='data'/>
                        </div>
                    </div>
                )}
        )

        return (
            <div>
                <div>
                    <input placeholder='Title' onChange={(event) => {this.setState({userInput: event.target.value})}} />
                    <button onClick={() => {this.props.getMovies(this.state.userInput)}}>Get Movies</button>
                    {movieArr}
                </div>
          </div>
        );
      }
    }
    
    export default SearchList;
    