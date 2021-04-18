import React,{Component} from 'react';
import {Mycontext} from './context';
export default class Guest extends Component
{
    render()

{
  //  return(<div><h3>Guest: <Mycontext.Consumer>{data=><h4>{data}</h4>}</Mycontext.Consumer></h3></div>)
  return(<div><h3>Guest: <Mycontext.Consumer>
      {({data,handclick})=>(
         <div><h4>name:{data.name}  value: {data.age}</h4>
      <button onClick={handclick}>Count</button></div>)}
      </Mycontext.Consumer></h3></div>)
}

}