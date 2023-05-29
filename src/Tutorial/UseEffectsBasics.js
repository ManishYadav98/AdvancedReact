import React ,{useState,useEffect} from 'react'

function UseEffectsBasics() {
    const [value,setValue]=useState(0);
   //hook cannot be call conditionally
   // we can use conditional statement inside the hook.

    //example
    //    if(value>2)
    //    {
    //    useEffect(()=>
    //    { 
        
    //        console.log('call useeffects');
    //        document.title=`New Messages(${value})` ;
    //        document.getElementById('id').innerHTML="UseEffects "+ value // useeffect have one side effect that is doenot change the value
    //    })}
        useEffect(()=>
        { 
            if(value>=2)
            {
            console.log('call useeffects');
            document.title=`New Messages(${value})` ;
            document.getElementById('id').innerHTML="UseEffects "+ value // useeffect have one side effect that is doenot change the value
        }},[value])  //help to keep the value updated immediately as previous it store initial value
    
    
    console.log('render component')
    return (
        <div>
            <h2 >Lets Learn about UseEffect and its basics</h2>
            <h2 id='id'>UseEffects </h2>
            <h1>{value}</h1>
            <button className='btn' onClick={()=>{setValue(value+1)}}>Change</button>
        </div>
    )
}

export default UseEffectsBasics
