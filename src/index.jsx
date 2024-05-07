import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route,  RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./Root";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import User from "./component/User/User";
import Github  from "./component/Github/Github";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/About",
//         element: <About />,
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       }
//     ],
//   },
// ]);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<Root/>}>
      <Route path=""  element={<Home/>}/>
      <Route path="About"  element={<About/>}/>
      <Route path="Contact"  element={<Contact/>}/>
      <Route path="User/:Userid"  element={<User/>}/>
      <Route path="Github" element={<Github/>}/>


    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
