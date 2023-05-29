import axios from 'axios'
import React ,{useState} from 'react'
import Forms from './Forms'

function LearnJSON() {
    const [list,setList]=useState([])
    const handleClick=(b)=>{
        const promise=axios.post('http://localhost:4000/user',   //sending data to json server
        { name:'Rakesh',id:10 },
            {       
            headers:{['contect-type']:'application/json' }
        }
        )
        promise.then(response=>{
            console.log(response);
        })
        promise.catch(e=>console.log(e))
        console.log(b);
    }
    const getUser=()=>
    {
axios.get('http://localhost:4000/user').then(users=>{
    //console.log(users);
   setList(users['data'])
    //console.log(users['data']);
})   //getting data from json server
    }
    return (
        <>
        <article><h2>Random Text</h2>
        <button type="button" className='btn' onClick={handleClick}>Post User</button>
        <button type="button" className='btn' onClick={getUser}>Get User</button>
        </article>
        { list.map((x) => {
                        return (
                            <div className='item' style={{border:'2px solid green'}} key={x.id}>
                                <h4>{x.name}    </h4>
                                <p>{x.id}</p>
                                
                            </div>);
                    }
                    )}
        </>
        
    )
}

export default LearnJSON
