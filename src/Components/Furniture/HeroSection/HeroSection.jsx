// Main Page

import React from "react";
import Cart from "../../Cart/Cart";
import CartDrawer from "../../Cart/CartDrawer";
import Button from "@mui/material/Button";
import AllProducts from "../AllProducts/AllProducts";


const HeroSection = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div>
      {/* { Items} */}
      <AllProducts />
      {/* Cart drawer */}
      <CartDrawer toggleDrawer={toggleDrawer} open={open} />
      {/* Cart Button */}
      <Button
        sx={{
          position: "fixed",
          top: "50%",
          right: "0",
          padding: "10px 10px",
          backgroundColor: "#009F7F",
          borderRadius: "10px 0 0 10px ",
        }}
        onClick={toggleDrawer(true)}
      >
        <Cart />
      </Button>
    </div>
  );
};

export default HeroSection;
