export const reducer=(state,action)=>{
    if(action.type==='ADD_ITEM'){
        const newPeople=[...state.newPeople,action.payload]
        return {
            ...state,
            people:newPeople,
            isModalopen:true,
            modalContent:'item Added',
        }}
        if(action.type==='NO_VALUE')
        {
            return{
                ...state,
                isModalopen:true,
                modalContent:'Please enter value',
            }
        }
        if(action.type==="CLOSE_MODAL"){
            return{
                ...state,
                isModalopen:false,}

        }
        if(action.type==="REMOVE_ITEM")
        {
           const newPerson=state.people.filter((x)=>x.id !==action.payload)
           return{
               ...state, people:newPerson
           }

        }
        throw new Error("No matching Action type")
    
}