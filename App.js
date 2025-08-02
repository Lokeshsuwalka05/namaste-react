import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter,RouterProvider } from "react-router";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Error from "./src/components/Error";

const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};
const appRouter=createBrowserRouter([
  { 
    path:"/",
    element:<Applayout/>,
    errorElement:<Error/>
  },
  {
    path:"/About",
    element:<About/>

  },
  {
    path:"/Contact",
    element:<Contact/>

  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
