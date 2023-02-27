import React from 'react';
import B from './B'
export const userContext=React.createContext();

function A()
{
    return (
        <div>
            <div>hello from A</div>
            <userContext.Provider value={'md'}>
                <B value={'dipak'} />
            </userContext.Provider>
        </div>
    )

}

export default A;


