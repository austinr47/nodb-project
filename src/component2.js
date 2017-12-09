import React, { Component } from 'react';
import './App.css';

class Component2 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        // {console.log(this.props.watchMovies)}
        const watchArr = this.props.watchMovies.map((elem, i) => {
        return (
            <div key={i}>
            <div className='data'>
                <p>Title: {elem.Title}</p>
                <p>Year: {elem.Year}</p>
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
export default Component2;