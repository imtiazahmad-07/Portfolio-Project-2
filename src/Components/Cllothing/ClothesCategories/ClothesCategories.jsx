import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
const ClothesCategories = () => {
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
          <Typography sx={{ flexShrink: 0, marginLeft: "10px" }}>
            Women Dress
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Printed</Typography> <br />
          <Typography>Floral</Typography> <br />
          <Typography>Single Color</Typography>
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
          <Typography sx={{ width: "100%", flexShrink: 0, marginLeft: "10px" }}>
            Outer Wear
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Hoodie</Typography> <br />
          <Typography>Jacket</Typography> <br />
          <Typography>Blazer</Typography> <br />
          <Typography>Waist Coat</Typography>
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
          <Typography sx={{ width: "100%", flexShrink: 0, marginLeft: "10px" }}>
            Pants
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Jeans</Typography> <br />
          <Typography>Chinos</Typography> <br />
          <Typography>Sports</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionDetails>
      <Typography sx={{ width: "100%", flexShrink: 0, marginLeft: "10px" }}>
        Tops
      </Typography>
      </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionDetails>
      <Typography sx={{ width: "100%", flexShrink: 0, marginLeft: "10px" }}>
        Skirts
      </Typography>
      </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionDetails>
      <Typography sx={{ width: "100%", flexShrink: 0, marginLeft: "10px" }}>
        Shirts
      </Typography>
      </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ClothesCategories;
