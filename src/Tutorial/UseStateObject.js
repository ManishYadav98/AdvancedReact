import React from 'react'

function UseStateObject() {
    const [person,setperson]=React.useState({
        name:"Star Lord",
        age:50,
        message:'I am a god'
    })
    const [name,setName]=React.useState('Tony Stack')
    const [message,setMessage]=React.useState("i am iron man")
    const [age,setAge]=React.useState(29)
    const changeMsg=()=>{
        //setperson("not anymore") // this woll not change the msg. it will change the person from object to string
       
        // console.log(person.message);
        // person.message="new msg";            //this do not change the value
        // console.log(person.message);
        // setperson(person);

        setperson({...person,message:"new Message"})
    }
    
    const changeText=()=>{
        setMessage("I am Super Hero")
    }
    return (
        <div>
            <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button className='btn' onClick={changeMsg}>Change MSG</button>
            <button className='btn' onClick={changeText}>Change Text Message</button>
            

            </>
        </div>
    )
}

export default UseStateObject
