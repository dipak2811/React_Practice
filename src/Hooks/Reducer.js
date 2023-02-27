import {useState} from 'react'
// import {useReducer} from 'react';

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

export default function Counter() {

  // const initialState = { count: 0 };
  const [cnt,setCnt]=useState(0);
  // const [state, dispatch1] = useReducer(reducer, initialState);
  const dispatch=(x)=>{
    if(x.type==="increment"){
      setCnt(cnt+1);
    }
    else if(x.type === "decrement"){setCnt(cnt-1);}
  }
  return (
    <>
      {/* Count: {state.count}<br></br> */}
      Count: {cnt}<br></br>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}


















// import { useEffect, useReducer } from "react";

// const ins={type:true,count:10};

// const reducerf = (state,action)=>{
//   if(action.type===true)
//   {
//     return {count:action.count+1};
//   }
//   else{
//     return {count:action.count-1};
//   }
// }

// function Reducer()
// {
//   const [ns,dispa]=useReducer(reducerf,ins);

//   const sett =()=>{
//     dispa({type:false,count:ns.count})
//   }
//   const set =()=>{
//     dispa({type:true,count:ns.count})
//   }
//   return(
//     <>
//       <button onClick={sett}>substract</button>
//       <button onClick={set}>{ns.count}add</button>
//     </>
//   );
// }

// export default Reducer;












