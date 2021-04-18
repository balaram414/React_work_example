import React, { Component } from 'react'
class condition_rendering extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            isLoggedIn:true
        }

    }
    render()
    {
        if(this.state.isLoggedIn)
        {
            return(<div>Wel come </div>)
        }
        else
        return(<div> log out</div>)
    }
}
export default condition_rendering;