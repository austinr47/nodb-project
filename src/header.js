import React, { Component } from 'react';
import './App.css';
import HeaderMedia from './headermedia'


class Header extends Component {

    render() {
        return (
<div className='main main1'>
    <div className='header'>
        <header className='App-header App'>
            <HeaderMedia />
        </header>
    </div>
</div>
        )
    }
}

export default Header;