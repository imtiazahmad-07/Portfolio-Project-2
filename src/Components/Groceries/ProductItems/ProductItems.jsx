import * as React from "react";
import { products } from "./Productdetails";
import FilteredProducts from "./FilteredProducts/FilteredProducts"; // Ensure correct path
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const ProductItems = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
      <Grid container spacing={3} columns={12}>
        {/* Accordion Section (Left side) */}
        <Grid item xs={12} md={3} sx={{ maxWidth: "250px" }}>
          <Box>
            <FilteredProducts />
          </Box>
        </Grid>

        {/* Product Section (Right side) */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    marginTop: "0px",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Link
                    to={`product-detail/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      style={{
                        width: "100%", // Make image full width of the container
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        marginTop: 1,
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "550",
                      }}
                    >
                      {product.name}
                    </Typography>
                  </Link>
                  <p className="text-secondary fw-lighter">{product.weight}</p>
                  <del className="text-secondary fw-lighter">
                    {product.prevPrice}
                  </del>
                  <Box
                    sx={{
                      color: "#009F7F",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                    }}
                  >
                    <p className="text-success fw-bold">{product.price}</p>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: "#009F7F",
                        color: "white",
                        textTransform: "capitalize",
                        borderRadius: "10px",
                        padding: "4px 10px", // Adjust padding for smaller size
                        fontSize: "0.875rem", // Set font size to small (default for small buttons)
                        height: "32px", // Adjust the height if needed
                      }}
                    >
                      <ShoppingBag size={20} />
                      <Typography variant="body1" sx={{margin:"10px"}}>
                        Cart
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductItems;
