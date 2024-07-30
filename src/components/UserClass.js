import React from "react";
import DummyClass from "./DummyClass";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + " child constructor");
    this.state = {
        userInfo: {
            name: "none",
            location: "none",
            avatar_url: ""
        }
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child componentDidMount");
    const data = await fetch("https://api.github.com/users/hammadansari52");
    const json = await data.json();
    // console.log(json);
    this.setState({userInfo: json});
    // console.log(this.state.userInfo);
  }

  componentWillUnmount(){
    console.log("components will unmount called")
  }

  render() {
    // console.log(this.props.name + " Child render");
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} className="user-img"></img>
        <h1>{this.state.userInfo.name}</h1>
        <h2>IIT Kanpur</h2>
        <h3>{this.state.userInfo.location}</h3>
        <h4>IG: __hammad__ansari</h4>
      </div>
    );
  }
}

export default UserClass;
