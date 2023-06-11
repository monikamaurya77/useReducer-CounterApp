import React, {useReducer} from 'react';
import './App.css';

const initial = {count:0}

const ReducerFunc = (state,action) =>{
  switch(action.type){
    case "increament":
    return {count:state.count +1};
  case "decreament":
  return{count:state.count -1};
  case "reset":
  return{count:state.count = 0 }
  }
}

function App() {
  
const [state, dispatch]= useReducer(ReducerFunc,initial);
  return (
    <div className="App">
      Count: {state.count}
      <br/>
      <button onClick={()=>dispatch({type:"increament"})}>Increament</button>
      <button onClick={()=>dispatch({type:"decreament"})}>Decreament</button>
      <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  );
}

export default App;
