import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {listAdd} from './actions';
export const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state=>state.counter);
    const stateList = useSelector(state=>state.listState);
    const handleAddState = ()=>{
        const payload = {
            name:"murad"
        }
        dispatch(listAdd(payload))
    }
    console.log(stateList)
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleAddState}>Add</button>
        </div>
    )
}
