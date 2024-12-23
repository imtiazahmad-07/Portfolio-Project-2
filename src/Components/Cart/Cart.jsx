import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { ShoppingCart } from "lucide-react";
import { Typography } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -6,
    top: -20,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    background: "white",
  },
}));

export default function Cart() {
  return (
    <IconButton aria-label="cart">
      <ShoppingCart color="white" />
      <StyledBadge badgeContent={4}></StyledBadge> 
      <Typography variant="body1" color="white" marginLeft={"10px"}>
         Items
      </Typography>
    </IconButton>
  );
}
