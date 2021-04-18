import { render } from '@testing-library/react';
import React from 'react'
function Namelist()
{
    const name=['ram','rahim','ramesh'];
    const person=[{
        id:1,
        name:"Laxman",
        age:30
    },
{
    id:2,
    name:"Shiv",
    age:45

}]
const personList=person.map(person=>(<h1>I am {person.name}</h1>))
render()
{
    return (<div>{personList}</div>)
}
}
export default Namelist;