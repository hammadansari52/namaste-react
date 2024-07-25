import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Namaste React Using JSX component</h1>;

//JSX

console.log(Title)

const Heading = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title />
    <h1>This is a functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
