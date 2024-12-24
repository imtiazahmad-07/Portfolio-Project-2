import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { increaseQuantity, decreaseQuantity } from "../../Slices/products/productsSlice";
export default function CartDrawer(props) {
  const { items } = useSelector((state) => state.products);
  const { toggleDrawer, open } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 450 }} role="presentation">
          <Typography variant="h5">Cart Items</Typography>
          <Typography>
            {items?.map((item) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "between",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "between",
                      alignItems: "center",
                    }}
                  >
                    <img
                      width="100px"
                      src={item?.imageUrl}
                      alt={item?.imageUrl}
                    />
                    <span>
                      {item?.name?.length >= 15
                        ? `${item.name.slice(0, 15)}...`
                        : item?.name}
                    </span>
                  </Box>
                  <ButtonGroup aria-label="Basic button group" size="small">
                    <Button onClick={()=>dispatch(decreaseQuantity(item))}>
                      <RemoveIcon />
                    </Button>
                    <Button>{item?.quantity}</Button>
                    <Button onClick={()=>dispatch(increaseQuantity(item))}>
                      <AddIcon />
                    </Button>
                  </ButtonGroup>
                  <span>{item?.price}</span>
                </Box>
              );
            })}
          </Typography>
        </Box>
      </Drawer>
    </div>
  );
}
