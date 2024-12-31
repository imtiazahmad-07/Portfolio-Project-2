import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "./Assets/Logo-new.webp";
import GroceryMenu from "./Grocery/GroceryMenu";
import PagesMenu from "./PagesMenu/PagesMenu";
import RegisterModal from "./Forms/RegisterModal";
import {
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import JoinModal from "./Forms/JoinModal";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{ backgroundColor: "#fff" }}
      >
        <Toolbar>
          {/* Logo section */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="body1"
              component="div"
              sx={{ marginTop: "10px" }}
            >
              <img src={logo} alt="Logo" style={{ height: "30px" }} />
            </Typography>
          </Box>

          {/* Desktop menu items */}
          {!isMobile && (
            <Grid
              container
              alignItems="center"
              justifyContent="flex-end"
              gap={5}
            >
              <Grid item sx={{ marginTop: "10px", marginRight: "40px" }}>
                <GroceryMenu />
              </Grid>
              <Grid item>
                <Button
                  variant="body1"
                  sx={{ marginTop: "10px", textTransform: "capitalize" }}
                >
                  Shops
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="body1"
                  sx={{ marginTop: "10px", textTransform: "capitalize" }}
                >
                  Offers
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="body1"
                  sx={{ marginTop: "10px", textTransform: "capitalize" }}
                >
                  Contact
                </Button>
              </Grid>
              <Grid item>
                <PagesMenu />
              </Grid>

              {/* Buttons on Desktop */}
              <Grid item>
                <Button sx={{ backgroundColor: "#009F7F" }}>
                  <JoinModal />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    backgroundColor: "#009F7F",
                    color: "white",
                    textTransform: "capitalize",
                  }}
                >
                  <RegisterModal />
                </Button>
              </Grid>
            </Grid>
          )}

          {/* Mobile menu icon */}
          {isMobile && (
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        {/* Drawer content (links like Shops, Offers, etc.) */}
        <List>
          <ListItem button>
            <GroceryMenu />
          </ListItem>
          <ListItem button sx={{ marginLeft: "55px" }}>
            <ListItemText primary="Shops" />
          </ListItem>
          <ListItem button sx={{ marginLeft: "55px" }}>
            <ListItemText primary="Offers" />
          </ListItem>
          <ListItem button sx={{ marginLeft: "55px" }}>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button>
            <PagesMenu />
          </ListItem>
          <ListItem button sx={{ marginLeft: "45px" }}>
            <Button sx={{ backgroundColor: "#009F7F" }}>
              <JoinModal />
            </Button>
          </ListItem>
          <ListItem button sx={{ marginLeft: "15px" }}>
            <Button
              sx={{
                backgroundColor: "#009F7F",
                color: "white",
                textTransform: "capitalize",
              }}
            >
              <RegisterModal />
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
