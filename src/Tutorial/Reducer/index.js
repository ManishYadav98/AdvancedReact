import React,{useState,useReducer} from 'react'
import Modal from './modal'
import {data} from "../Data"
import {reducer} from './Reducer'
const defaultState={
    people:data,
    isModalOpen:false,
    modelContent:'Hello World'

}
function Index() {
    const [name,setName]=useState('')
    // const [people,setPeople]=useState(data)  //used without reducer
    // const [showModal,setModal]=useState(true)
  const [state,dispatch]=useReducer(reducer,defaultState) //here we defined reducer

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        if(name){
           //setPeople([...people,{id:new Date().getTime().toString(),name}]) //we have created a program where we are takinh value from user and displaying the same
        const newItem={id:new Date().getTime().toString(),name};
        dispatch({type:"ADD_ITEM",payload:newItem});
        setName("");
        }
        else{
                //dispatch({type: 'NO_VALUE'});
                dispatch({type:'NO_VALUE'})
        }
    }
    const closeModal=()=>{
        dispatch({type:'CLOSE_MODAL'})
    }
    return (
        <>
        {state.isModalOpen && (<Modal closeModal={closeModal} modalContent={state.modelContent}/>)}
        <form onSubmit={handleSubmit} className='form'>
            <div>
                <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            </div>
            <button type='submit' className='btn'>Submit</button>
        </form>
        {
            state.people.map(x=>{
                return <>
                <div className="item" key={x.id}><h4>{x.name}
                </h4>
                <button type='button' className='btn' onClick={()=>{
                    dispatch({type:"REMOVE_ITEM",payload:x.id})
                }}>Remove</button></div>
                </>
            })
        }
        
        </>
    )
}

export default Index
