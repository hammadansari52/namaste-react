import React from "react";
import DummyClass from "./DummyClass";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " child constructor");
    this.state = {
      count: 0,
      count2: 1,
    };
  }

  componentDidMount() {
    console.log(this.props.name + " Child componentDidMount");
  }

  render() {
    console.log(this.props.name + " Child render");
    return (
      <div className="user-card">
        <h1>{this.props.name}</h1>
        <h2>IIT Kanpur</h2>
        <h3>Barabanki</h3>
        <h4>IG: __hammad__ansari</h4>
        <h4>Count = {this.state.count}</h4>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase Count
        </button>
        <h4>Count2 = {this.state.count2}</h4>
        <DummyClass name={"First Child of " + this.props.name} />
        <DummyClass name={"Second Child of " + this.props.name} />
        <DummyClass name={"Third Child of " + this.props.name} />
      </div>
    );
  }
}

export default UserClass;
