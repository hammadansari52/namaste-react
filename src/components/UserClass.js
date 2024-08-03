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
      <div className="m-6 inline-block border border-black rounded-sm p-8">
        <img src={this.state.userInfo.avatar_url} className="rounded-full w-56 m-4" ></img>
        <h1 className="font-bold">{this.state.userInfo.name}</h1>
        <h2>IIT Kanpur</h2>
        <h3>{this.state.userInfo.location}</h3>
        <h4><span className="font-bold">IG</span>: __hammad__ansari</h4>
      </div>
    );
  }
}

export default UserClass;
