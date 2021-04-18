import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class FormHandle extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            username:"",
            comment:"",
            topic:""
        }
    }
    handleUserNameChange=event=>this.setState({
        username:event.target.value
    })
    handleCommentChange=event=>this.setState({
        comment:event.target.value
    })
    handleTopicChange=event=>this.setState({
        topic:event.target.value
    })
handsub=event=>{//alert("Name: "+this.state.username+" Comment: "+this.state.comment+" Topics: "+this.state.topic)
    ReactDOM.render(
        "Name: "+this.state.username+" Comment: "+this.state.comment+" Topics: "+this.state.topic,
        document.getElementById('root')
      );
    event.preventDefault();
}
render()
{
   return(<div><form onSubmit={this.handsub}><br></br>Name: <input type="text" value={this.state.username} onChange={this.handleUserNameChange}/><br></br>Comment: <input type="text" value={this.state.comment} onChange={this.handleCommentChange} /><br></br>Topic: <input type="text" value={this.state.topic} onChange={this.handleTopicChange} /><br></br><input type="submit" value="Submit" /></form></div>)
//return (<div></div>)
}
}
export default FormHandle;