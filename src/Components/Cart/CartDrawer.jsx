import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

export default function CartDrawer(props) {
  const {toggleDrawer,open} = props;
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >
      
      <Box>
        <Typography variant='body1'>Cart Items</Typography>
      </Box>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
