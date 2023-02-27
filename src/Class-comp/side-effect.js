import React from "react";

class FriendStatus extends React.Component {
  state={
    count:0
  }
  componentDidMount() {
    console.log("component mounted");
  }
  componentWillUnmount() {
    console.log("component unmounted");
  }

  componentDidUpdate(prevProps,prevStates) {
    console.log("component updated");
    console.log(prevStates);
  }
  hdlclk=()=>{
    this.setState({count:this.state.count+1});
  }
  render() {
    return (
      <div><button onClick={this.hdlclk}>Clicled {this.state.count}</button></div>
    )
  }
}

export default FriendStatus;
