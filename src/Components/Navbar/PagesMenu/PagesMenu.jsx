import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PagesMenu() {
  // Set the initial value to the first option, "Flash Sale"
  const [item, setItem] = React.useState("Pages");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "50px",
        marginRight: "30px",
        marginLeft: "40px",
        borderWidth: "0",
      }}
    >
      <FormControl sx={{ width: "100px" }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={item}
          onChange={handleChange}
          sx={{
            // Remove the border and the arrow
            border: "none", // Remove the border
            
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none", // Ensure the outline border is removed
            },
          }}
        >
          <MenuItem value="Pages"> Pages </MenuItem>
          <MenuItem value="Flash Sale"> Flash Sale </MenuItem>
          <MenuItem value="Manufacturers/Publishers">
            Manufacturers/Publishers
          </MenuItem>
          <MenuItem value="Authors">Authors</MenuItem>
          <MenuItem value="FAQ">FAQ</MenuItem>
          <MenuItem value="Terms & Conditions">Terms & Conditions</MenuItem>
          <MenuItem value="COustomer Refund Policy">
            Customer Refund Policy
          </MenuItem>
          <MenuItem value="Vendor Refund Policy">Vendor Refund Policy</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
