import * as React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { ShoppingCart } from "lucide-react";
import { BagsProducts } from "../BagsProducts/BagsProducts";

const BagsProductDetail = () => {
  const { id } = useParams();
  const product = BagsProducts.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={3} sx={{ display: "flex", alignItems: "center" }}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{
              width: "100%", 
              maxWidth: "400px", 
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: "20px" }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            {product.name}
          </Typography>
          <Typography variant="h6" color="textSecondary" sx={{ marginTop: "10px" }}>
            {product.weight}
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ marginTop: "10px" }}>
            {product.description}
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "20px", fontWeight: "bold" }}>
            Price: ${product.price}
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "#009F7F",
              color: "white",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
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

export default BagsProductDetail;
