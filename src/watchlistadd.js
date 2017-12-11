import React, { Component } from 'react';
import './App.css';

class WatchlistAdd extends Component {

    render() {
        const watchArr = this.props.watchMovies.map((elem) => {
        return (
            <div key={elem.ID}>
            <div className='data'>
                <p>Title: {elem.Title}</p>
                <p>Year: {elem.Year}</p>
                <p>Watched: {elem.Watched.toString()}</p>
                <button onClick={() => this.props.changeToWatched(elem.ID)}>Watched</button>
                <button onClick={() => this.props.removeFromWatchlist(elem.ID)}>Remove</button>
                <hr className='data'/>
            </div>
        </div>)
        })
        return(
            <div>
                <div>
                    {watchArr}
                </div>
            </div>
        )
    }
}
export default WatchlistAdd;