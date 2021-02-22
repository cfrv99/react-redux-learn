import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";

//STORE

//ACTIONS
// const increment = ()=>{
//   return {
//     type:"INCREMENT"
//   }
// }

// const decrement = ()=>{
//   return {
//     type:"DECREMENT"
//   }
// }

// //REDUCERS
// const counter = (state = 0,action)=>{
//   switch(action.type){
//     case 'INCREMENT':
//       return state+1;
//     case "DECREMENT":
//       return state-1;
//     default:
//       return state;
//   }
// }

// let store = createStore(counter);
// //

// store.subscribe(()=>console.log(store.getState()));

// store.dispatch(decrement());

const store = createStore(allReducers);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
