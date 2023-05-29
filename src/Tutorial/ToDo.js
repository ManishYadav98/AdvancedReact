import React, { useState } from 'react'

function ToDo() {
    const [events, setEvents] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [list, addList] = useState([])

    const handler = (e) => {
        e.preventDefault();
        if(events && date && time)
        {const event = { id: new Date().getTime().toString(), events, date,time }
        addList(list => { return [...list, event] })
        console.log(list);}
        else{
            alert("Enter All Details First")
        }
    }

    const removeEvent = (id) => {
        let eventList = list.filter(x => x.id !== id)
        addList(eventList)

    }
    return (
        <>
            <article>
                <h2>To Do List</h2><br></br>
                <img src='todo.jpg' width='400'></img>
                <form className='form' onSubmit={handler}>
                    <div className='form-control'>
                        <label htmlFor="To Do">To Do</label>
                        <input type='text' value={events} id='events' onChange={(e) => { setEvents(e.target.value) }}></input>

                    </div>
                    <div className='form-control'>
                        <label htmlFor="Time">Event Timing</label>
                        <input type='time' value={time} id='time' onChange={(e) => { setTime(e.target.value) }}></input>

                    </div>
                    <div className='form-control'>
                        <label htmlFor="Date">Event Date</label>
                        <input type='date' value={date}  id='date' onChange={(e) => { setDate(e.target.value) }}></input>

                    </div>
                    <button type='submit' className='btn'>Add Events</button>

                </form>
                {
                    list.map((x) => {
                        return (
                            <div className='item' style={{border:'2px solid green'}} key={x.id}>
                                <h3>{x.events}    </h3>
                                <h5>{x.date} {x.time} </h5>
                                <button className='btn' onClick={() => removeEvent(x.id)}>Remove</button>

                            </div>);
                    }
                    )
                }

            </article>
        </>
    )
}

export default ToDo
