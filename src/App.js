import { useSelector,useDispatch } from "react-redux";
import {increment,decrement,test} from "./actions"
import { Counter } from "./Counter";
function App() {

  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(test(25))}>Test</button>
      <h1>{counter}</h1>

      <hr/>
      <hr/>
      <Counter/>
    </div>
  );
}

export default App;
