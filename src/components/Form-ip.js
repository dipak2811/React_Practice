import { useState } from "react";

const Form = ()=>{
    const [userip,setUserip]=useState({
        pnamechg:'',
        pagechg:'',
        pidchg:'',
        pctcchg:''
    })
    const pnamechg = (event)=>{
        setUserip((prev)=>{
            return {...prev,
            pnamechg:event.target.value
            }
        })
    }
    const pagechg = (event)=>{
        setUserip((prev)=>{
            return {...prev,
            pagechg:event.target.value
            }
        })
    }
    const pidchg = (event)=>{
        setUserip((prev)=>{
            return {...prev,
            pidchg:event.target.value
            }
        })
    }
    // const pctcchg = (event)=>{
    //     setUserip((prev)=>{
    //         return {...prev,
    //         pctcchg:event.target.value
    //         }
    //     })
    // }
    const pctcchg = (event)=>{
        setUserip({...userip,
            pctcchg:event.target.value
        })
    }
    return (
        <div>
            <form>
                <input type={'text'} placeholder={'person name'} onChange={pnamechg} />
                <label>{userip.pnamechg}</label>
                <input type={'text'} placeholder={'person age'} onChange={pagechg} />
                <label>{userip.pagechg}</label>
                <input type={'text'} placeholder={'person ID'} onChange={pidchg} />
                <label>{userip.pidchg}</label>
                <input type={'text'} placeholder={'person contact'} onChange={pctcchg} />
                <label>{userip.pctcchg}</label>
            </form>
        </div>
    );
}

export default Form;