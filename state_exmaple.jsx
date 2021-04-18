import React, { Component } from 'react'
class state_example extends Component
{
    constructor(){
        super()
        this.state={
            msg:"wel come to India",
            count:0,
        }
    }
        render(){
            return (<div><h1>{this.state.msg}</h1><button onClick={()=>this.changes()}>click {this.state.count}</button><button onClick={this.click}>click</button></div>)
        }
        click(){
            alert("I am Event Handleling");
            console.log("i am click");
        }
        changes(){
            this.setState({msg:"Thank for Visite Again",
            count:this.state.count+1,
        })
        }
    
}
export default state_example;