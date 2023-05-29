import React,{useState} from 'react'

function UseStateExample() {
    let title="random title";
    const handleClick=(b)=>{
        let c=b;
        //console.log(title)
        console.log(b);
    }
    return (
        <div>
            <h2>{title}</h2>
            <button type='button' className='btn' onClick={handleClick(80000)}>Change Title</button>
        </div>
    )
}

export default UseStateExample
