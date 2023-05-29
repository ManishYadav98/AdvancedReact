import React ,{useState} from 'react'
//use stae is a named import so we must must have the curly braces
function UseStateBasic() {
    const [day,setDay]=useState("Today is a Rainy Day");
    const [Time,setDay2]=useState("Today is a Good Time")
    console.log(useState('Neeraj'));
    const handleClick=()=>
    {
        if(day==='Today is a bright and beautiful Day')
        {
            setDay('"Today is a Rainy Day"')
            setDay2('Today is Good Time')
        }
        else{
        setDay("Today is a bright and beautiful Day")
        setDay2('Today is Beautiful Time')}
    }
    return (
        <div>
            <><h1>{day}</h1>
            <h1>{Time}</h1>
            <button type='button' className='btn' onClick={handleClick}>change my day</button>
            </>
        </div>
    )
}

export default UseStateBasic
