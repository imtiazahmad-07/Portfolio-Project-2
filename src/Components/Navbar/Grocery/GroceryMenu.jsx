import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Apple,
  Armchair,
  BriefcaseBusiness,
  Brush,
  Cookie,
  Shirt,
} from "lucide-react";
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
          sx={{ color: "#009F7F" }}
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
            <Link to={"/"} style={{ textDecoration: "none" }} >
              <Typography sx={{ color: "#009F7F"}}>
                <Apple /> Grocery
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem sx={{ display: "flex", gap: "10px" }} value="Bakery">
            <Link to={"bakery"} style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#009F7F", textDecoration: "none" }}>
                <Cookie /> Bakery
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem
            sx={{ display: "flex", gap: "10px", color: "#009F7F" }}
            value="Makeup"
          >
            {" "}
            <Brush /> Makeup
          </MenuItem>
          <MenuItem
            sx={{ display: "flex", gap: "10px", color: "#009F7F" }}
            value="Bags"
          >
            {" "}
            <BriefcaseBusiness /> Bags
          </MenuItem>
          <MenuItem
            sx={{ display: "flex", gap: "10px", color: "#009F7F" }}
            value="Clothing"
          >
            {" "}
            <Shirt /> Clothing
          </MenuItem>
          <MenuItem
            sx={{ display: "flex", gap: "10px", color: "#009F7F" }}
            value="Furniture"
          >
            {" "}
            <Armchair /> Furniture
          </MenuItem>
          <MenuItem
            sx={{ display: "flex", gap: "10px", color: "#009F7F" }}
            value="DailyNeeds"
          >
            {" "}
            <Apple />
            Daily Needs
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
