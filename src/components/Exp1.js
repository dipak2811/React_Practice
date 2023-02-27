import React from "react";
class Exp1 extends React.Component {
  state = {title:this.props.val.title};
  clicking = () => {
    this.setState({title:"7 habits of highly effective people"});
  };
  render() {
    return (
      <div>
        <div>{this.state.title}</div>
        <button onClick={this.clicking}>Click</button>
        <div>{this.props.val.title}</div>
        <div>{this.props.val.price}</div>
        <div>{this.props.val.author}</div>
        <br></br>
      </div>
    );
  }
}
export default Exp1;
