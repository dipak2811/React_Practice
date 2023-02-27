import React,{useState} from 'react';

// don't change the Component name "App"
export default function App() {
    const [ip,setIp]=useState({
        ipval:'',
        pval:'Invalid message'
    });
    const ipchg = async (event)=>{
        setIp({
            ...ip,
            ipval:event.target.value
        })
        if((event.target.value).length>=3)
        {
            setIp((prev)=>{
                return{
                ...prev,
                pval:'Valid message'}
            })
        }
        else{
            setIp((prev)=>{
                return {...prev,
                pval:'Invalid message'}
            })
        }
    }
    const sbh= (event)=>{
        event.preventDefault();
        setIp({
            ...ip,
            ipval:''
        })
    }
    return (
        <form onSubmit={sbh}>
            <label>Your message</label>
            <input type="text" value={ip.ipval} onChange={ipchg} />
            <p>{ip.pval}</p>
            <button type='submit'>submit</button>
        </form>
    );
}