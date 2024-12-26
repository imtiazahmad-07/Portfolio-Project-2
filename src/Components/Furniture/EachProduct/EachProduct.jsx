//Product Detail 

import * as React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { ShoppingCart } from "lucide-react";
import { ProductDetails } from "../Products/ProductDetails";

const EachProduct = () => {
  const { id } = useParams();
  const product = ProductDetails.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Box sx={{ padding: "10px" }}>
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: "20px" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {product.name}
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ marginTop: "10px" }}
          >
            {product.weight}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginTop: "10px" }}
          >
            {product.description}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h6"
              sx={{
                marginTop: "30px",
                fontWeight: "bold",
                color: "#009F7F",
                fontSize: "30px",
              }}
            >
              {product.price}
            </Typography>
            <Typography
              variant="del"
              sx={{
                marginTop: "48px",
                marginLeft: "30px",
                color: "grey",
              }}
            >
              <del>{product.prevPrice}</del>
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              marginTop: "30px",
              backgroundColor: "#009F7F",
              color: "white",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              padding: "20px 50px",
            }}
          >
            <ShoppingCart />
            <Typography sx={{ marginLeft: "20px" }}>
              Add to Shopping Cart
            </Typography>
          </Button>
          <Typography sx={{ marginTop: "40px", display: "flex" }}>
            <Typography> Category</Typography>
            <Button
              sx={{
                marginTop:"-5px",
                marginLeft:"20px",
                color:"#009F7F" ,
                ":hover": { backgroundColor: "#009F7F", color:"white" },
              }}
            >
              {" "}
              {product.category}{" "}
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EachProduct;
