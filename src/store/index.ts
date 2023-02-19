import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice =createSlice({
    name:"counter",
    initialState:{counter:0},
    reducers:{
        increment(state){
            state.counter+=1
        },
        decrement(state){
            state.counter-=1
        },
        incByValue(state,action){
            state.counter+=action.payload
        },
        decByValue(state,action){
            state.counter-=action.payload
        }
    }

})

export const actions = counterSlice.actions

export const store = configureStore({
    reducer:counterSlice.reducer
})