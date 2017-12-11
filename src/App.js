import React, { Component } from 'react'; 
import './App.css';
import SearchList from './searchlist'
import WatchlistAdd from './watchlistadd'
import Header from './header'
import Bars from './bars'
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
    this.clearList = this.clearList.bind(this);
    this.removeFromWatchlist = this.removeFromWatchlist.bind(this);

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
            // console.log(this.state.watchMovies)
        }

        removeFromWatchlist(i){
          let removeMovie = this.state.watchMovies
          console.log(removeMovie)
          removeMovie.splice(i, 1)
          this.setState({
            watchMovies: removeMovie
          })
        }

        clearList(){
          this.setState({
            watchMovies: []
          })
        }
  render() {
    return (
      <div>
        <Bars />
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
              <div className='clearButton'>
                  <button onClick={() => {this.clearList()}}>Clear List</button>
              </div>
              <div>
                <div>
                  <WatchlistAdd watchMovies={this.state.watchMovies}/>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bars />
      </div>
    );
  }
}

export default App;
