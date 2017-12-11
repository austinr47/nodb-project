import React, { Component } from 'react';
import './App.css';

const ButtonClear= (props) => {
    return (<button onClick={() => {props.clearList()}}>Clear List</button>)
}

export default ButtonClear;