// ProductList.js
import React from 'react';
import { Grid } from '@mui/material';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({ products }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
