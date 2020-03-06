import React, { Component } from 'react'; 

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state={
            inputData:''
        }
    }
    
    inputChangeEvent=(e)=>{
        let {target:{name,value}} = e;
        this.setState({
            [name]:value
        })
    }

    submitEvent=(e)=>{
        e.preventDefault()
        alert("전송")  //비동기전송
    }



    render() {
        return (
            <form onSubmit={this.submitEvent}>
                <input 
                    type="text" 
                    name="inputData"
                    value={this.state.inputData} 
                    onChange={this.inputChangeEvent}
                />
                <input type="submit" value="입력"/>
            </form>
        );
    }
}

export default TodoForm;