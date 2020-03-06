import React, { Component } from 'react';
import Header from '../common/Header';
import Todo from '../components/Todo'
import Footer from '../common/Footer';

var sub1Title="제목1"

class Sub1 extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <Todo title={sub1Title}></Todo>      
                <Footer></Footer>
            </>
        );
    }
}

export default Sub1;    