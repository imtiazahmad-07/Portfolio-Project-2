import * as React from "react";
import { Grid, Typography } from "@mui/material";
import BedIcon from '@mui/icons-material/Bed';
import ChairIcon from '@mui/icons-material/Chair';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import TableBarIcon from '@mui/icons-material/TableBar';
const FilterSection = () => {
  return (
    <Grid container spacing={6} sx={{marginTop:'40px', position:"fixed", top:10, width:'20%' }}>
      <Grid item xs={3} lg={6}  >
        <BedIcon/>
        <Typography variant="body1">Bed</Typography>
      </Grid>
      <Grid item xs={3} lg={6}  >
        <EventSeatIcon/>
        <Typography variant="body1">Chair</Typography>
      </Grid>
      <Grid item xs={3}  lg={6} >
      <ChairIcon/>
      <Typography>Sofa</Typography>
      </Grid>
      <Grid item xs={3} lg={6}  >
        <TableBarIcon/>
        <Typography>Table</Typography>
      </Grid>
    </Grid>
  );
};

export default FilterSection;
