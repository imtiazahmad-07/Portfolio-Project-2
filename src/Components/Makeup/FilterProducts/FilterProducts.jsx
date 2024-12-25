import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
const FilterProducts = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>Face</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Blusher</Typography> <br />
          <Typography>Foundation</Typography>
          <Typography>Face Powder</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>Eye</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Eye Shadow</Typography> <br />
          <Typography>Glitter</Typography>
          <Typography>Mascara</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>Lips</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lip Glos</Typography> <br />
          <Typography>Lipstick</Typography> <br />
          <Typography>Lip Kit</Typography>
        </AccordionDetails>
      </Accordion>

      <Typography sx={{ width: "100%", flexShrink: 0, marginLeft:"15px", marginTop:'10px' }}>Accesssories</Typography>

      <Typography sx={{ width: "100%", flexShrink: 0, marginLeft:"15px", marginTop:'10px' }}>Shaving Needs</Typography>

      <Typography sx={{ width: "100%", flexShrink: 0, marginLeft:"15px", marginTop:'10px' }}>Oral Care</Typography>

      <Typography sx={{ width: "100%", flexShrink: 0, marginLeft:"15px", marginTop:'10px' }}>Facial Care</Typography>

      <Typography sx={{ width: "100%", flexShrink: 0, marginLeft:"15px", marginTop:'10px' }}>Deodorant</Typography>

      <Typography sx={{ width: "100%", flexShrink: 0, marginLeft:"15px", marginTop:'10px' }}>Bath & Oil</Typography>

      
    </Box>
  );
};

export default FilterProducts;
