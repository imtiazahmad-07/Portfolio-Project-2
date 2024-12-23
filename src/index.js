import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";  // Import the layout that includes Navbar
import Groceries from "./Components/Groceries/Groceries";
import SingleProduct from "./Components/Groceries/ProductItems/SingleProduct/SingleProduct.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // This will render Navbar and Outlet
    errorElement:<h1>Error 404 Not Found</h1>,
    children: [
      {
        path: "",
        element: <Groceries />,  // Main page that will render under the navbar
      },
      {
        path: "product-detail/:id",
        element: <SingleProduct/>,  
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
