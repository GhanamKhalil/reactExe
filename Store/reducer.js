
const initialisState=[{id:1,username:'Admin',email:'',Age:'',genre:'',pay:'Maroc',password:'admin'}]

export default function reducer(state=initialisState,action) {

    switch (action.type) {
        case 'Add':
                state=[...state,{...action.personne,id:state[state.length-1].id+1}]
                return state
        case 'delete':
            state=state.filter(u=>u.id!==parseInt(action.id))
            return state
        case 'modifier':
            let index=state.findIndex(u=>u.id===parseInt(action.user.id))
            state[index]=action.user
            return state
        default:
            return state;
    }
    
}