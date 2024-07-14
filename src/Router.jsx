import React from "react";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import SignUp from "./Pages/Auth/SignUp"
import Cart from "./Pages/Cart/Cart"
import Landing from "./Pages/Landing/Landing"
import Order from "./Pages/Order/Order"
import Payment from "./Pages/Payment/Payment"

import Header from "./components/Header/Header"


    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Header/>}>
                <Route path="/" element={<Landing/>}></Route>
                <Route path="/auth" element={<SignUp />}></Route>
                <Route path="/order" element={<Order />}></Route>
                <Route path="/payment" element={<Payment/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>

            </Route>
        )
    );

    function Routing() {
        return <RouterProvider router={router} />;
    }

export default  Routing
