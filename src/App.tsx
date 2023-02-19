import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actions } from './store/index';
function App() {
  const counter=useSelector((state:any)=>state.counter)
  const dispatch =useDispatch();
  const increment=()=>{
    dispatch(actions.increment())
  }
  const decrement=()=>{
    dispatch(actions.decrement())

  }

  const incByVal=(value: any)=>{
    dispatch(actions.incByValue(10))
  }

  const decByVal=(value: any)=>{
    dispatch(actions.decByValue(4))
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
