import React from "react";

class DummyClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " componentDidMount");
  }

  render() {
    console.log(this.props.name + " render");
    return (
      <div>
        <h1>Dummy Component</h1>
      </div>
    );
  }
}

export default DummyClass;
