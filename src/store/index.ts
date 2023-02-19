import { act } from 'react-dom/test-utils'
import {createStore} from 'redux'

const reduceFn=(state={counter:0},action:any)=>{

    switch(action.type){
        case 'INC': return {...state,counter:state.counter+1}
        case 'DEC': return {...state,counter:state.counter-1}
        case 'INC BY Value':return {...state,counter:state.counter+action.payload}
        case 'DEC BY Value': return  {...state,counter:state.counter-action.payload}
    }
    return state

}
const store=createStore(reduceFn)

export default store