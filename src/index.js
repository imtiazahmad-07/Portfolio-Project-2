import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout"; // Import the layout that includes Navbar
import Groceries from "./Components/Groceries/HomePage.jsx";
import SingleProduct from "./Components/Groceries/ProductItems/SingleProduct/SingleProduct.jsx";
import BakeryProduct from "./Components/Bakery/BakeryProduct/BakeryProduct.jsx";
import BakeryProductDetail from "./Components/Bakery/BakeryProductDetail/BakeryProductDetail.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This will render Navbar and Outlet
    errorElement: <h1>Error 404 Not Found</h1>,
    children: [
      {
        path: "",
        element: <Groceries />, // Main page that will render under the navbar
      },
      {
        path: "product-detail/:id",
        element: <SingleProduct />,
      },
      {
        path: "bakery",
        element: <BakeryProduct />,
      },
      {
        path: "bakery/bakery-product-detail/:id",
        element: <BakeryProductDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    ,
  </React.StrictMode>
);
