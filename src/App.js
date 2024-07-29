import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";

//see console warning

const AppLayout = () => (
  <div
    className="app"
    onScroll={() => {
      console.log("scrolling");
    }}
  >
    <Header />
    <Body />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
