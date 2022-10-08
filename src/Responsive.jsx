import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { NavLink } from "react-router-dom";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="container-fluid">
      <div className="row navbar">
        <div className="col-12 navbar">
          <div className="container-fluid navbar">
            <AppBar position="static" color="error">
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <span className="a0">∀/S</span>
                  </Typography>

                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  >
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      <NavLink className="nav-link menu" to="/" end>
                        Home
                      </NavLink>
                      <NavLink
                        exact="true"
                        className="nav-link menu"
                        to="/about"
                      >
                        About
                      </NavLink>
                      <NavLink
                        exact="true"
                        className="nav-link menu"
                        to="/photos"
                      >
                        Photos
                      </NavLink>
                      <NavLink
                        exact="true"
                        className="nav-link menu"
                        to="/service"
                      >
                        Services
                      </NavLink>
                      <NavLink
                        exact="true"
                        className="nav-link menu"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </Menu>
                  </Box>
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href=""
                    sx={{
                      mr: 2,
                      display: { xs: "flex", md: "none" },
                      flexGrow: 1,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <span className="a0">∀/S</span>
                  </Typography>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    <NavLink className="nav-link" to="/" end>
                      Home
                    </NavLink>
                    <NavLink exact="true" className="nav-link" to="/about">
                      About
                    </NavLink>
                    <NavLink exact="true" className="nav-link" to="/photos">
                      Photos
                    </NavLink>
                    <NavLink exact="true" className="nav-link" to="/service">
                      Services
                    </NavLink>
                    <NavLink exact="true" className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </Box>

                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          alt="Remy Sharp"
                          src="https://pps.whatsapp.net/v/t61.24694-24/307488386_5438414969527683_8159344223766747151_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVz1C-75A3fZWmkGnhQ-bAnClJo4Q2Rzk-8pLrVxIP5VZQ&oe=6345E386"
                        />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <a
                        className="nav-link profile"
                        href="https://instagram.com/arsalan.0.9?igshid=YmMyMTA2M2Y="
                      >
                        Profile
                      </a>
                    </Menu>
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResponsiveAppBar;
