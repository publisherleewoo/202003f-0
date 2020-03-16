import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            id:'',
            pwd:''
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
        axios.post('/user/login',param)
            .then(r=>{
                console.log(r.data)
                localStorage.setItem('token',r.data.token)
            }).catch(err=>console.log(err))
    }


    render() {
        return (
            <form onSubmit={this.onSubmitHanlder}>
                 <p>id: <input type="text" name="id" onChange={this.onChangeHandler}></input> </p>
                 <p>ps: <input type="password" name="pwd" onChange={this.onChangeHandler}></input></p>
                 <p><input type="submit" value="가입" /></p>
            </form>
        );
    }
}

export default Login;