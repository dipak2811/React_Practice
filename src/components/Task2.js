import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// don't change the Component name "App"
export default function App() {
    const [isDeleting, setIsDeleting] = useState(false);
    
    function deleteHandler() {
        setIsDeleting(true);
    }
    
    function proceedHandler() {
    setIsDeleting(false);
}

    
return (
  <div>
    {isDeleting ? <div id="alert">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button onClick={proceedHandler}>Proceed</button>
    </div> : ''}
    <button onClick={deleteHandler}>Delete</button>
    <Link to='/Task2/Task1'>Task1</Link>
  </div>    
);
}