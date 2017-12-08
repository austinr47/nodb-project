import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Component1 extends Component {
    constructor(props) {
        super(props)
        this.state ={
            movies: [],
            picture: '',
            title: '',
            
        }
    }
    
      componentDidMount(){
        axios.get('http://www.omdbapi.com/?s=the+blind+side&apikey=97ad0e64').then(response => {
          console.log(response.data.Search);
          this.setState({
              movies: response.data.Search
          })
        })
      }
      render() {
          const movieArr = this.state.movies.map((elem) =>{
                return(  
                <div key = {elem}>
                    <p>{elem.Title}</p>
                </div>
                )}
        )
        return (
            <div className='result-panel'>
            <div>
                {/* <input /> */}
            </div>
            <div>
                {movieArr}
            </div>
          </div>
        );
      }
    }
    
    export default Component1;
    