import Exp from "./Exp";
import Form from "./Form-ip";
import App from "./Form-2"
import Expense from "./Expense"
import { Link } from "react-router-dom";
function Showdata() {
  const book = { title: "7 habits", price: 300, author: "abc" };
  const book1 = { title: "7 ", price: 100, author: "a" };
  const book2 = { title: "habits", price: 200, author: "ab" };
  const passingfunc = (x)=>{
    x++;
    console.log(x);
  }
  return (
    <div>
      <App/>
      <Form></Form>  
      <h1>this is Showdata</h1>
      <Exp val={book} />
      <Exp val={book1} />
      <Exp val={book2} />
      <Expense data={passingfunc} />
      <br></br>
      <Link to='/showdata1'>Click</Link>
    </div>
  );
}

export default Showdata;
