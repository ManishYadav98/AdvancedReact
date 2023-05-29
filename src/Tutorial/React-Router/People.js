import React,{useState} from 'react'
import {data} from '../Data'
import {Link} from 'react-router-dom'

function People() {
    const [people,setPeople]=useState(data)
    return (
        <div>
            <h1> People Page</h1>
            {people.map(x=>{
                return (
                    <div key={x.id} className='item'>
                            <h4>{x.name}</h4>
                            <Link to={`/person/${x.id}`}> Learn More</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default People
