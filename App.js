import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { lazy,Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Error from "./src/components/Error";
import { Outlet } from "react-router";
import RestaurantMenu from "./src/components/RestaurantMenu";

const Grocery=lazy(()=>{
  return import("./src/components/Grocery");
})

const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path:"/Restaurants/:resid",
        element:<RestaurantMenu/>
      },
      {
        path:"/Grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
