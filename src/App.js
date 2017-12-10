import React, { Component } from 'react'; 
import './App.css';
import SearchList from './searchlist'
import WatchlistAdd from './watchlistadd'
import Header from './header'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
        movies: [],
        userInput: 'aa',
        watchMovies: [],
    }
    this.getMovies = this.getMovies.bind(this);
    this.addToWatchlist = this.addToWatchlist.bind(this);

}
        getMovies(str) {
          // console.log(str)
            axios.get(`http://www.omdbapi.com/?s=${str}&apikey=97ad0e64`).then(response => {
                // console.log(response.data);
                this.setState({
                    movies: response.data.Search
                })
            })
        } 
        
        addToWatchlist(i){
          let newMovies = this.state.watchMovies
          newMovies.push(this.state.movies[i])
            this.setState({
                watchMovies: newMovies
            })
            console.log(this.state.watchMovies)
        }
  render() {
    return (
      <div>
        <Header />
        <div className='main'>
          <div className='body'>
            <div className='movieData'>
              <SearchList getMovies={this.getMovies} addToWatchlist={this.addToWatchlist} movies={this.state.movies}/> 
            </div>
            <div className='watchMe'> 
              <div>
                  My Awesome Watchlist
              </div>
              <div>
                  <button className='button'>Clear List</button>
              </div>
              <div className='clearList'>
                <div>
                  <WatchlistAdd watchMovies={this.state.watchMovies}/>
                </div> 
                <div>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
