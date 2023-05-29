import React,{useEffect,useState} from 'react'
import {data} from '../Data'
import {Link,useParams} from 'react-router-dom'
function Person() {
    
    const {id}=useParams()
    const [name,setName]=useState("Default Name")
    useEffect(()=>{
        const newName=data.find(x=>x.id===parseInt(id))
        setName(newName.name)
    },[])
    console.log(id);
    return (
        <div><h3>Welcome {name}</h3>
            <a href='/people'><button className='btn'>Back to People</button></a>
        </div>
    )
}

export default Person
