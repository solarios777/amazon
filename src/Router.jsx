import React from "react";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Auth from "./Pages/Auth/Auth";
import Cart from "./Pages/Cart/Cart"
import Landing from "./Pages/Landing/Landing"
import Order from "./Pages/Order/Order"
import Payment from "./Pages/Payment/Payment"
import Results from "./Pages/Results/Results"
import Header from "./components/Header/Header"
import ProductDetail from "./Pages/ProductDetail/ProductDetail"
// import Login from "./Pages/Auth/AuthTry";



    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/payments" element={<Payment />}></Route>
            {/* <Route path="/auth" element={<Auth />}></Route> */}

            <Route path="/category/:categoryName" element={<Results />}></Route>
            <Route
              path="/products/:productId"
              element={<ProductDetail />}
            ></Route>

            <Route path="/cart" element={<Cart />}></Route>
          </Route>
          <Route path="/auth" element={<Auth/>}></Route>
        </Route>
      )
    );

function Routing() {
        return <RouterProvider router={router} />;
    }

export default  Routing
