import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout"
import BakeryProduct from "./Components/Bakery/BakeryProduct/BakeryProduct.jsx";
import BakeryProductDetail from "./Components/Bakery/BakeryProductDetail/BakeryProductDetail.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./Components/Home/HomePage.jsx";
import SingleProduct from "./Components/Home/ProductItems/SingleProduct/SingleProduct.jsx";
import Makeup from "./Components/Makeup/Makeup.jsx";
import UniqueProduct from "./Components/Makeup/UniqueProduct/UniqueProduct.jsx";
import BagsProduct from "./Components/Bags/BagsProduct/BagsProduct.jsx";
import BagsProductDetail from "./Components/Bags/BagsProductDetail/BagsProductDetail.jsx";
import ClothesCards from "./Components/Cllothing/ClothesCard/ClothesCards.jsx";
import ClothProductDetail from "./Components/Cllothing/ClothProductDetail/ClothProductDetail.jsx";
import HeroSection from "./Components/Furniture/HeroSection/HeroSection.jsx";
import EachProduct from "./Components/Furniture/EachProduct/EachProduct.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    errorElement: <h1>Error 404 Not Found</h1>,
    children: [
      {
        path: "",
        element: <HomePage />, 
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
      {
        path:"makeup-products",
        element:<Makeup/>
      },
      {
        path:"makeup-products/makeup-product-detail/:id",
        element:<UniqueProduct/>
      },
      {
        path:"bags",
        element:<BagsProduct/>
      },
      {
        path:"bags/product-detail/:id",
        element:<BagsProductDetail/>
      },
      {
        path:"clothing",
        element:<ClothesCards/>
      },
      {
        path:"clothing/product-detail/:id",
        element:<ClothProductDetail/>
      },
      {
        path:"furniture",
        element:<HeroSection/>
      },
      {
        path:"furniture/product-detail/:id",
        element:<EachProduct/>
      }
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
