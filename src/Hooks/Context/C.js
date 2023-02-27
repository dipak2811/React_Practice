import React,{useContext} from 'react';
import {userContext} from './Context'
function C(props)
{
    const user=useContext(userContext);
    return (
        <div>
            <div>hello from C</div>
            <div>{user}</div>
            <div>{props.val}</div>
        </div>
    )
}

export default C;
