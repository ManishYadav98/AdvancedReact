import React ,{useState} from 'react'

function UseStateCounter() {
    
    const [value,setValue]=useState(0)
    const IncreaseValue=()=>
    {

        setValue(value+1)
    }
    const DecreaseValue=()=>
    {
        setValue(value-1)
    }
    const complexIncrease=()=>{
        setTimeout(()=>{
                setValue(value+1)
        },2000)
    }
    const complexDecrease=()=>{
        // setTimeout(()=>{              //another way
        //         setValue(value-1)
        // },2000)

        setTimeout(()=>
        {
            setValue((pre)=>pre-1)     
        },1000)
    }
    const stopwatch=(i)=>{
        setInterval(()=>{
           //setValue(value+1)  //not works
            
           //setValue((pre)=>pre+1) not work with intervals

           setValue(i+1)
        },1000)
    }
    return (
        <>
            <section style={{margin:'4rem 0'}}>
                <h2>A regular Counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={DecreaseValue}>Decreace</button>
                <button className='btn' onClick={IncreaseValue}>Increace</button>
                <button className='btn' onClick={()=>{setValue(0)}}>Reset</button>
            </section>
            <section style={{margin:'4rem 0'}}>
                <h2>A more complex Counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={complexIncrease}>Increase Later</button>
                <button className='btn' onClick={complexDecrease}>Decrease Later</button>
                <button className='btn' onClick={()=>stopwatch(value)}>Stopwatch</button>
                
            </section>
        </>
    )
}

export default UseStateCounter
