
//  props as Method 


import { render } from '@testing-library/react'
import React, { Component } from 'react'
class method_as_props extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            parentName:"AA"}
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent()
    {
        alert("hello" ${this.state.parentName})
    }
    render()
    {
        return(<div></div>)
    }
}