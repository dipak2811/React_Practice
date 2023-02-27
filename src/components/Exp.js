import { useState } from "react";
function Exp(props)
{   
    // console.log("jahskdj");
    const [title,setTitle]= useState(props.val.title);
    let title1=props.val.title;
    const clicking = ()=>{
        setTitle("7 habits of highly effected people");
        title1="7 habits of highly effected people";
    }
    return (
        <div>
            <div>{title}</div>
            <div>{title1}</div>
            <button onClick={clicking}>Click</button>
            <div>{props.val.title}</div>
            <div>{props.val.price}</div>
            <div>{props.val.author}</div>
            <br></br>
        </div>
    );
}
export default Exp;