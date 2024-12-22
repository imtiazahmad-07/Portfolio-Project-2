import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";  // Import the layout that includes Navbar
import Groceries from "./Components/Groceries/Groceries";
import ProductDescription from "./Components/Groceries/ProductItems/ProductDescription";
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
        element: <ProductDescription/>,  // Product detail page (example)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
