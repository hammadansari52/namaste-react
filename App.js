const heading = React.createElement(
  "h1",
  { id: "heading", x: "abc" },
  "Hello World From React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
