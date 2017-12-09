import React, { Component } from 'react'; 
import './App.css';
import Component1 from './component1'
import Component2 from './component2'
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
            this.setState({
                watchMovies: this.state.watchMovies.push(this.state.movies[i])
            })
            console.log(this.state.watchMovies)
        }
  render() {
    return (
      <div>
        <div className='main main1'>
        <div className='header'>
          <header className='App-header App'>
            <img src='https://www.northpennymca.org/content/wp-content/uploads/2017/04/Movie-Night.jpg' className="App-logo" alt="logo" />
                <h1>MOVE NIGHT PLANNER!!!</h1>
          </header>
        </div>
        </div>
        <div className='main'>
          <div className='body'>
            <div className='movieData'>
              <Component1 getMovies={this.getMovies} addToWatchlist={this.addToWatchlist} movies={this.state.movies}/> 
            </div>
            <div className='watchMe'> 
              My Awesome Watchlist
              <div className='clearList'>
                <button className='button'>Clear List</button>
                {/* <Component2 watchMovies={this.state.watchMovies}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
