import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Accordion, AccordionSummary, Typography } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LaptopIcon from '@mui/icons-material/Laptop';
import BackpackIcon from '@mui/icons-material/Backpack';
import CasesIcon from '@mui/icons-material/Cases';
const BagsCategories = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
        <BusinessCenterIcon/>
          <Typography sx={{ flexShrink: 0, marginLeft:"10px" }}>Hand Bags</Typography>
        </AccordionSummary>
        
      </Accordion>

      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
        <LaptopIcon/>
          <Typography sx={{ width:"100%", flexShrink: 0, marginLeft:"10px" }}>Laptop Bags</Typography>
        </AccordionSummary>
       
      </Accordion>

      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
        <BackpackIcon/>
          <Typography sx={{ width:"100%", flexShrink: 0, marginLeft:"10px" }}>Shoulder Bags</Typography>
        </AccordionSummary>
      
      </Accordion>
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
        <CasesIcon/>
          <Typography sx={{ width:"100%", flexShrink: 0, marginLeft:"10px" }}>Purse</Typography>
        </AccordionSummary>
      </Accordion>
    
 


      
    </Box>
  );
};

export default BagsCategories;
