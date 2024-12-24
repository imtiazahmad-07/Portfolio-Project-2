import { Box, Button, Grid, Grid2, TextField, Typography } from "@mui/material";
import React from "react";
import { FaSearch } from "react-icons/fa";
import img from "../BakeryProducts/BakeryImages/bg.webp";
import ProductCard from "../ProductCard.jsx/ProductCard";
import CartDrawer from "../../Cart/CartDrawer";
import Cart from "../../Cart/Cart";

const BakeryProduct = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Grid>
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
          height: "100vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 item xs={12} md={3}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "600",
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              Get Your Bakery Items Delivered
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", marginBottom: "30px" }}
            >
              Get your favorite bakery items baked and delivered to your
              doorsteps at any time
            </Typography>
            <Box sx={{ position: "relative" }}>
              <TextField
                fullWidth
                placeholder="Search"
                InputProps={{
                  endAdornment: (
                    <FaSearch
                      style={{
                        position: "absolute",
                        right: "0",
                        top: "50%",
                        width: "auto",
                        transform: "translateY(-50%)",
                        fontSize: "25px",
                        color: "white",
                        backgroundColor: "#009F7F",
                        borderRadius: "5px",

                        padding: "14px 30px 14px 40px ",
                      }}
                    />
                  ),
                }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
      <Box>
        <ProductCard />
      </Box>
      <CartDrawer toggleDrawer={toggleDrawer} open={open} />
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
    </Grid>
  );
};

export default BakeryProduct;
