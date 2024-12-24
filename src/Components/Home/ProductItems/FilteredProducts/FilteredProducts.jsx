import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
const FilteredProducts = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography sx={{ flexShrink: 0 }}>Fruits And Vegetables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Fruits</Typography> <br />
          <Typography>Vegetables</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography sx={{ width:"100%", flexShrink: 0 }}>Meat & Fish</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Fresh Fish</Typography> <br/>
          <Typography>Meat</Typography> 
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width:"100%", flexShrink: 0 }}>Snacks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Nuts and Biscuits</Typography> <br />
          <Typography>Chocolates</Typography> <br />
          <Typography>Crisps</Typography> <br />
          <Typography>Noodles & Pasta</Typography> <br />
          <Typography>Sauce</Typography>  <br />
          <Typography>Soup</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width:"100%", flexShrink: 0 }}>Pet Care</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Cat Food</Typography> <br/>
          <Typography>Dog Food</Typography> <br/>
          <Typography>Accessories</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width:"100%", flexShrink: 0 }}>Home & Cleaning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Air Freshner</Typography> <br />
          <Typography>Cleaning Products</Typography> <br />
          <Typography>Kitchen Accessories</Typography> <br />
          <Typography>Laundry</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width:"100%", flexShrink: 0 }}>Dairy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Milk</Typography> <br/>
          <Typography>Butter</Typography> <br/>
          <Typography>Egg </Typography> <br/>
          <Typography>Yougurt </Typography> <br/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width:"100%", flexShrink: 0 }}>Cooking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Oil</Typography> <br/>
          <Typography>Rice</Typography> <br/>
          <Typography>Salt & Sugar</Typography> <br/>
          <Typography>Spices</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel8"} onChange={handleChange("panel8")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width:"100%", flexShrink: 0 }}>Breakfast</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Bread</Typography> <br />
          <Typography>Cereal</Typography> <br />
          <Typography>Jam</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel9"} onChange={handleChange("panel9")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width:"100%", flexShrink: 0 }}>Beverage</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Coffe</Typography> <br/>
          <Typography>Energy Drinks</Typography> <br/>
          <Typography>Juice</Typography> <br/>
          <Typography>Fizzy Drinks</Typography> <br/>
          <Typography>Tea</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel10"} onChange={handleChange("panel10")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width:"100%", flexShrink: 0 }}>Health & Beauty</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Bath</Typography> <br/>
          <Typography>Cream</Typography> <br/>
          <Typography>Deodrant</Typography> <br/>
          <Typography>Face Care</Typography> <br/>
          <Typography>Oral Care</Typography> <br/>
          <Typography>Shaving Needs</Typography>
        </AccordionDetails>
      </Accordion>
 


      
    </Box>
  );
};

export default FilteredProducts;
