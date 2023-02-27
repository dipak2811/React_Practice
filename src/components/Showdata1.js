import React from "react";
import Exp1 from "./Exp1";
class Showdata1 extends React.Component{
    book={title:"7 habits",price:300,author:"abc"};
    book1={title:"7 ",price:100,author:"a"};
    book2={title:"habits",price:200,author:"ab"};
    render(){
        return (<>
            <h1>
            this is Showdata1
            </h1>
            <Exp1 val={this.book} />
            <Exp1 val={this.book1} />
            <Exp1 val={this.book} />
            </>
        );
    }
}
export default Showdata1;