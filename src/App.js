import React, { Component } from 'react'; 
import './App.css';
import SearchList from './searchlist';
import WatchlistAdd from './watchlistadd';
import Header from './header';
import Bars from './bars';
import ButtonClear from './clearlist';
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
    this.changeToWatched = this.changeToWatched.bind(this);

}
        getMovies(str) {
            axios.get(`http://www.omdbapi.com/?s=${str}&apikey=97ad0e64`).then(response => {
                this.setState({
                    movies: response.data.Search
                })
            })
        } 
        
        addToWatchlist(i, t, y){
            axios.post('http://localhost:3005/api/watchlist', {ID: i, Title: t, Year: y}).then(response => {
              this.setState({
                watchMovies: response.data
              })
            })
          }

          clearList(){
            axios.delete('http://localhost:3005/api/watchlist').then(response => {
              this.setState({
                watchMovies: response.data
              })
            })
          }
          
        removeFromWatchlist(i){
          axios.delete(`http://localhost:3005/api/watchlist/${i}`).then(response => {
            this.setState({
              watchMovies: response.data
          })      
          })
        }

        changeToWatched(i){
          console.log(i)
          axios.put(`http://localhost:3005/api/watchlist/${i}`).then(response => {
            console.log(response)
            this.setState({
              watchMovies: response.data
          })      
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
                  <ButtonClear clearList={this.clearList}/>
              </div>
              <div>
                <div>
                  <WatchlistAdd changeToWatched={this.changeToWatched} watchMovies={this.state.watchMovies} removeFromWatchlist={this.removeFromWatchlist} getMovies={this.getMovies} addToWatchlist={this.addToWatchlist} movies={this.state.movies}/>
                </div>  
              </div>
              <div className='clearButton'>
                  <ButtonClear clearList={this.clearList}/>
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



//not interested button for a .delete
//watched button for a .put
