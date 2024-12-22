import * as React from "react";
import { useParams } from "react-router-dom";
import { products } from "./Productdetails"; // Assuming your product data is here
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Use Grid (not Grid2)
import { Button, Typography } from "@mui/material";
import { ShoppingCart } from "lucide-react";

const ProductDescription = () => {
  // Using React Router's useParams hook to get the product ID from the URL
  const { id } = useParams(); // id is the product ID from the URL

  // Find the product based on the id
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>; // Show a message if no product is found
  }

  return (
    <Box >
      <Grid container spacing={3}>
        {/* Left side: Product Image */}
        <Grid item xs={12} md={6}>
          <img
            src={product.imageUrl} // Make sure product.img contains the correct path
            alt={product.name}
            style={{ width: "70%" }}
          />
        </Grid>

        {/* Right side: Product Details */}
        <Grid item xs={12} md={6} sx={{ margin: "10px" }}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="h6" color="textSecondary">
            {product.weight}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {product.description}
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Price: ${product.price}
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "#009F7F",
              color: "white",
              textTransform: "capitalize",
            }}
          >
            <ShoppingCart className="me-2" />
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDescription;
