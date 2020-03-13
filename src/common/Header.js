import React, { Component } from 'react';

import Nav from './Nav';
import UtilNav from './UtilNav';
class Header extends Component {
    render() {
        return (
            <header>
                <h1>TodoApp</h1>
                <UtilNav></UtilNav>
                <Nav></Nav>
               
            </header>
        );
    }
}

export default Header;