import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function App() {
  const counter=useSelector((state:any)=>state.counter)
  const dispatch =useDispatch();
  const increment=()=>{
    dispatch({type:'INC'})
  }
  const decrement=()=>{
    dispatch({type:'DEC'})
  }

  const incByVal=(value: any)=>{
    dispatch({type:'INC BY Value',payload:value})
  }

  const decByVal=(value: any)=>{
    dispatch({type:'DEC BY Value',payload:value})
  }
  return (
    <div className="App">
      <h1>Counter App by Redux</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>
        increment
      </button>
      <button onClick={decrement}>
        decrement
      </button>
      <button onClick={()=>incByVal(10)}>
        INC BY VAL
      </button>
      <button onClick={()=>decByVal(4)}>
        DEC BY VAL
      </button>
    </div>
  );
}

export default App;
