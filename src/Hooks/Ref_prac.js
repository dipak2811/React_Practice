import { useRef } from "react";

function Ref_practice(){
    const nameIp=useRef();
    const ageIp=useRef();
    const submithnd = (event)=>{
        event.preventDefault();
        console.log(nameIp.current.value);
        console.log(ageIp.current.value);
        nameIp.current.value='';
        ageIp.current.value='';
    }
    return (
        <div>
            <form onSubmit={submithnd}>
            <input ref={nameIp} placeholder={'Enter Name'} />
            <input ref={ageIp} placeholder={'Enter Age'} />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Ref_practice;

