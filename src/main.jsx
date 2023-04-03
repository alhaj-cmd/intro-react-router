import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Firstpage from "./components/Firstpage/Firstpage";
import Friend from "./components/Friends/Friend";
import FriendDtl from "./components/FriendDtl/FriendDtl";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>
//   },
//   {
//     path:'/about',
//     element:<About></About>
//   }, 
//   {
//     path:'/contact',
//     element:<Contact></Contact>
//   }
// ]);
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path:"/",
        element:<Firstpage></Firstpage>
      },
      {
        path:'/friend',
        element:<Friend></Friend>,
        loader:() =>  fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:friendId',
        element:<FriendDtl></FriendDtl>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
     {
      path:"about",
      element:<About></About>
     },
     {
      path:"contact",
      element:<Contact></Contact>
     }
  ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);