import React,{useEffect,useState } from "react";
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
import UserContext from "./src/utills/UserContext";

const Grocery=lazy(()=>{
  return import("./src/components/Grocery");
})

const Applayout = () => {
  const [userName,setUserName]=useState("default user");
  useEffect(()=>{
     //Make a api call to get username and password
     const data={
       name:"Lokesh Suwalka"
     }
     setUserName(data.name);
  },[])
  return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
      <div className="App">
        <Header />
        <Outlet/>
      </div>
    </UserContext.Provider>
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
 

