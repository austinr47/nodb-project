import React, { Component } from 'react';
import './App.css';
import Component1 from './component1'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://www.northpennymca.org/content/wp-content/uploads/2017/04/Movie-Night.jpg' className="App-logo" alt="logo" />
              <h1 className="App-title">MOVE NIGHT PLANNER!!!</h1>
            </header>
        <div className='movie-data'>
          <Component1 />
        </div>
      </div>
    );
  }
}

export default App;
