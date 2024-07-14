import React from "react";
import "./App.css";
// import {
//   createBrowserRouter,
//   Route,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";
import Header from "./components/Header/Header";

import Routing from "./Router";

const App = () => {
  
  return (
    <>
      <Routing/>
      
    </>
  );
};

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Header />}>
//       <Route path="/" element={<Home />}></Route>
//       {/* <Route path="/home" element={<Home />}></Route> */}
//       {/* <Route path="/detail/:id" element={<Detail/>}></Route> */}
//     </Route>
//   )
// );

// function App() {
//   return <RouterProvider router={router} />;
// }

export default App;
