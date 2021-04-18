import React, { Component }  from 'react';
import User from './User';
export const Mycontext=React.createContext();
export default class context extends Component
{
    state={
        name:"Ram",
        age:30
    };
    handclick=()=>{this.setState({
       // alert()
        age:this.state.age+1
       //age:40
    });};

render()
{

    const contaxtval={data:this.state,handclick:this.handclick};
    return(<Mycontext.Provider value={contaxtval}><User/></Mycontext.Provider>)
}
}
