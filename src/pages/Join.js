import React, { Component } from 'react';
import axios from 'axios';


class Join extends Component {
    constructor(props){
        super(props)
        this.state={
            id:'',
            name:'',
            pwd:'',
        }
    }

    onSubmitHanlder=(e)=>{
        e.preventDefault()
        this.postApi(this.state);
        
    }
    onChangeHandler=(e)=>{
        let target = e.target
        this.setState({
            [target.name]:target.value
        })
    }
    
    postApi=(param)=>{
        axios.post('/user/join',param)
            .then(r=>{
                console.log(r)
            }).catch(err=>console.log(err))
    }


    render() {
        return (
            <form onSubmit={this.onSubmitHanlder}>
                 <p>id: <input type="text" name="id" onChange={this.onChangeHandler}></input> </p>
                 <p>name: <input type="text" name="name" onChange={this.onChangeHandler}></input> </p>
                 <p>ps: <input type="password" name="pwd" onChange={this.onChangeHandler}></input></p>
                 <p><input type="submit" value="가입" /></p>
            </form>
        );
    }
}

export default Join;