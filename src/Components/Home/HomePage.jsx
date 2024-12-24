import { Box, Grid2, TextField } from "@mui/material";
import React from "react";
import img from "./assets/image.webp";
import Typography from "@mui/material/Typography";
import { FaSearch } from "react-icons/fa";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import Cart from "../Cart/Cart";
import ProductItems from "./ProductItems/ProductItems";
import CartDrawer from "../Cart/CartDrawer";
import Button from "@mui/material/Button";

const HomePage = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div>
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
          <Grid2 item xs={12} md={8}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "600", textAlign: "center" }}
            >
              Groceries Delivered in 90 Minutes
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center" }}
              className="my-4"
            >
              Get your healthy foods & snacks delivered at your doorsteps all
              day everyday
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
      {/* Image Carousel */}
      <Box>
        <ImageCarousel />
      </Box>
      {/* {Product Items} */}
      <Box>
        <ProductItems />
      </Box>
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
        <Cart/>
      </Button>
    </div>
  );
};

export default HomePage;
