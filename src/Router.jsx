import React from "react";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Auth from "./Pages/Auth/Auth";
import Cart from "./Pages/Cart/Cart";
import Landing from "./Pages/Landing/Landing";
import Order from "./Pages/Order/Order";
import Payment from "./Pages/Payment/Payment";
import Results from "./Pages/Results/Results";
import Header from "./components/Header/Header";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51Pf6BxRwUI6PTLtE9OU4aRsN1luyZZx6iIPcOQ062KEP2i96T7vSxgjulDXfE8CdfFQgpQh6tb1cM5paEajfz9hY00NBf5MX3l"
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to access your orders "}
              redirect={"/orders"}
            >
              <Order />
            </ProtectedRoute>
          }
        ></Route>

        <Route path="/category/:categoryName" element={<Results />}></Route>
        <Route path="/products/:productId" element={<ProductDetail />}></Route>

        <Route path="/cart" element={<Cart />}></Route>
      </Route>
      <Route
        path="/payments"
        element={
          <ProtectedRoute msg={"you must log in to pay"} redirect={"/payments"}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        }
      ></Route>
      <Route path="/auth" element={<Auth />}></Route>
    </Route>
  )
);

function Routing() {
  return <RouterProvider router={router} />;
}

export default Routing;
