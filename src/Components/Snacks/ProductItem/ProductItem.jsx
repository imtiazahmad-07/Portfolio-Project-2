// ProductItem.js
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Box sx={{ marginTop: "0px", padding: "20px", borderRadius: "10px", boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)" }}>
      
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
        />
        <Typography variant="body1" sx={{ marginTop: 1, color: "black", fontWeight: "550" }}>
          {product.name}
        </Typography>
      <p className="text-secondary fw-lighter">{product.weight}</p>
      <del className="text-secondary fw-lighter">{product.prevPrice}</del>
      <Box sx={{ color: "#009F7F", display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <p className="text-success fw-bold">{product.price}</p>
        <Button variant="contained" size="small" sx={{ backgroundColor: "#009F7F", color: "white", borderRadius: "10px", padding: "4px 10px", fontSize: "0.875rem" }}>
          <ShoppingBag size={20} />
          <Typography variant="body1" sx={{ margin: "10px" }}>Cart</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ProductItem;
