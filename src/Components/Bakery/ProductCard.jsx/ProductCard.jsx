import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Bakeryproducts } from "../BakeryProducts/BakeryProducts";
import { Add } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../Slices/products/productsSlice";

const ProductCard = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
      <Grid item xs={12} md={9}>
        <Grid container spacing={3}>
          {Bakeryproducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Box
                sx={{
                  marginTop: "0px",
                  padding: "20px",
                  borderRadius: "10px",
                  ":hover": {
                    transform: "translateY(-10px)",
                    boxShadow: 10,
                    transition: "transform 0.3s, box-shadow 0.3s",
                  },
                  boxShadow: "1px 1px 10px grey",
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    background: "white",
                    color: "black",
                    borderRadius: "10px",
                    float: "inline-end",
                    "&:hover": {
                      backgroundColor: "#007F5F",
                      color: "white",
                    },
                  }}
                  onClick={() => dispatch(addProduct(product))}
                >
                  <Add size={20} />
                </Button>
                <Link
                  to={`/bakery/bakery-product-detail/${product.id}`}
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
                    sx={{ color: "black", fontWeight: "bold" }}
                  >
                    {product.price}
                  </Typography>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <Typography
                      variant="body1"
                      sx={{
                        marginTop: 1,
                        textDecoration: "none",
                        color: "grey",
                        fontSize: "13px",
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        marginTop: 1,
                        textDecoration: "none",
                        color: "grey",
                        fontSize: "13px",
                      }}
                    >
                      {product.weight}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductCard;
