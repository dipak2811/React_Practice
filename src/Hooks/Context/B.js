import C from './C'
import React,{useContext} from 'react';
import {userContext} from './Context'
function B(prop)
{
    const user=useContext(userContext);
    return (
        <div>
            <div>hello from B</div>
            <div>{user}</div>
            <C val={prop.value} />
        </div>
    
    )
}


export default B;