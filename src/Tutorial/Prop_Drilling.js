import React,{useState} from 'react'
import {data} from './Data'
import Person from './React-Router/Person';
function Prop_Drilling() {
    const [people,setPeople]=useState(data);
    const removePerson=(id)=>{
        setPeople(people=>{
            return people.filter((person)=>person.id!==id)
        })
    }
    return (
        <>
            <section>
                <h3>Prop Drilling</h3>
                <List mypeople={people} rp={removePerson}></List>

            </section>
        </>
    )
}
const List=(props)=>{
    return <>
{
    props.mypeople.map((people)=>{
        return <SinglePerson key={people.id} per={people} remove={props.rp}/>
    })
}
    </>
}
const SinglePerson=(props)=>{

return <div className='item'>
    <h4>{props.per.name}</h4>
    <button onClick={()=>props.remove(props.per.id)}>Remove</button>
</div>
}
export default Prop_Drilling
