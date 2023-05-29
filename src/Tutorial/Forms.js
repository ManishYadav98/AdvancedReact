import React,{useState} from 'react'
//we want to have input field
//want to have button
//one of the input should accept username
//email
//accept the data and store in some variable
//initial value empty
function Forms() {
    // const [name,setName]=useState('kundan')    // if we will give initial value to name and email it will be printed in texted as it is
    // const [email,setEmail]=useState('kk@gmail')// 
    const [name,setName]=useState('')    //
    const [email,setEmail]=useState('')
    
    const [person,setPerson]=useState([])
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        // var firstname=document.getElementById('firstname').value;   //one way 
        // var emailaddress=document.getElementById('email').value;
        
        if(name && email)
        {
            //const people={name:name,email:email}
            const people={id:new Date().getTime().toString(),name,email}
            console.log(people);
            //person.push(people)
            setPerson(person=>{return [...person,people]})
            console.log(person);
        }
        else{
            alert('Must Enter Fields')
        }
    }
    // const firstName=(event)=>{
    //     setName(event.target.value)   //another way
    // }
    return (
        <>
           <article>
               <form className='form' onSubmit={handleSubmit}>
            
               <div className='form-control'>
                   <label htmlFor='firstName'>Name:</label>
                   <input type='text' id='firstname' name='firstname' value={name} onChange={(e)=>setName(e.target.value)}></input> {/*if you assign value you can change the value without onChange*/}
               </div>
               <div className='form-control'>
                   <label htmlFor='email'>Email:</label>
                   <input type='email' id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
               </div>
               <button type='submit'>Submit</button>
               </form>
               {
                   person.map((people,index)=>{
                   const {id,name,email}=people;
                   return (
                       <div className='item' key={id} >
                           <h4>{name}</h4>
                           <p>{email}</p>
                       </div>
                   );
                   
                })
               }
               {/* {
                   person.map((x)=>{return(<div className="item"><h4 >{x.name}</h4><p>{x.email}</p></div>)})  // another way
               } */}
               
               
           </article>
        </>
    )
}

export default Forms
