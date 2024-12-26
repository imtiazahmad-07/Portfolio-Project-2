import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { BriefcaseBusiness, Brush, Shirt } from "lucide-react";
import CookieIcon from "@mui/icons-material/Cookie";
import AppleIcon from "@mui/icons-material/Apple";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export default function GroceryMenu() {
  const [item, setItem] = React.useState("Grocery");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <Box sx={{ width: "170px" }}>
      <FormControl sx={{ width: "150px" }}>
        <Select
          sx={{ color: "red" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={item}
          onChange={handleChange}
        >
          <MenuItem
            sx={{
              display: "flex",
              gap: "10px",
              color: "#009F7F",
              textDecoration: "none",
            }}
            value="Grocery"
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#009F7F",
                  textDecoration: "none",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <AppleIcon />
                <Typography>Grocery</Typography>
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem value="Bakery">
            <Link to={"bakery"} style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#009F7F",
                  textDecoration: "none",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <CookieIcon />
                <Typography> Bakery</Typography>
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem value="Makeup">
          <Link to={"makeup-products"} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "#009F7F",
                textDecoration: "none",
                display: "flex",
                gap: "10px",
              }}
            >
              <Brush />
              <Typography>Makeup</Typography>
            </Typography>
          </Link>
          </MenuItem>
          <MenuItem value="Bags">
          <Link to={"bags"} style={{textDecoration:"none"}}>
            <Typography
              sx={{
                color: "#009F7F",
                textDecoration: "none",
                display: "flex",
                gap: "10px",
              }}
            >
              <BriefcaseBusiness />
              <Typography>Bags</Typography>
            </Typography>
            </Link>
          </MenuItem>
          <MenuItem value="Clothing">
          <Link to={'clothing'} style={{textDecoration:'none'}}>
            <Typography
              sx={{
                color: "#009F7F",
                textDecoration: "none",
                display: "flex",
                gap: "10px",
              }}
            >
              <Shirt /> <Typography>Clothing</Typography>
            </Typography>
            </Link>
          </MenuItem>
          <MenuItem value="Furniture">
          <Link to={'furniture'} style={{textDecoration:'none'}}>
            <Typography
              sx={{
                color: "#009F7F",
                textDecoration: "none",
                display: "flex",
                gap: "10px",
              }}
            >
              <EventSeatIcon /> <Typography>Furniture</Typography>
            </Typography>
            </Link>
          </MenuItem>
          <MenuItem value="DailyNeeds">
            <Typography
              sx={{
                color: "#009F7F",
                textDecoration: "none",
                display: "flex",
                gap: "10px",
              }}
            >
              <AppleIcon />
              <Typography>Daily Needs</Typography>
            </Typography>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
