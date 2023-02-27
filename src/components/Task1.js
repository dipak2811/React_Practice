import React from 'react';

import Todo from './Todo';

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function Task1() {
    return (
    DUMMY_TODOS.map((e,ind)=>
    <ul key={ind}><Todo data1={e}/></ul>
    ))
}
