import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Zoom,
} from "@mui/material";
import React, { useState } from "react";
import navbarLogo from "../assets/navbarLogo.svg";
import { navListLink } from "../staticData";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoutSvg from "../assets/LogoutSvg.svg";
import { authUserLogout } from "../redux/slice/authSlice";
import toast from "react-hot-toast";
import { persistor } from "../redux/store";

function Navbar() {
  const { authUser } = useSelector((state) => state.auth);

  const [profileMenu, setProfileMenu] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // persistor.purge();
    dispatch(authUserLogout());
    setProfileMenu(false);
    toast.success("Logout Successful");
  };

  return (
    <section className="navbarComp">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.8rem 5rem",
        }}
      >
        <Link to={"/"}>
          <img src={navbarLogo} alt="navBarLogo" />
        </Link>
        <Box
          sx={{
            display: "flex",
            gap: 5,
          }}
        >
          {navListLink.map((val, index) => {
            return (
              <Link
                to={val.link}
                key={index}
                style={{ color: "#000", fontWeight: "500", fontSize: "0.9rem" }}
              >
                {val.name}
              </Link>
            );
          })}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
          {authUser ? (
            <Box>
              <Tooltip title="Profile Setting" TransitionComponent={Zoom}>
                <IconButton onClick={() => setProfileMenu(true)}>
                  <Avatar src={authUser?.photoURL} alt="perofilePic" />
                </IconButton>
              </Tooltip>
              <Menu
                open={profileMenu}
                onClose={() => setProfileMenu(false)}
                anchorOrigin={{ horizontal: "right", vertical: "top" }}
                sx={{ transform: "translateX(-5rem) translateY(4rem)" }}
                slotProps={{
                  paper: {
                    elevation: 1,
                  },
                }}
              >
                <MenuItem
                  sx={{ fontWeight: "500", fontSize: "0.9rem" }}
                  onClick={handleLogout}
                >
                  <ListItemIcon>
                    <img src={LogoutSvg} alt="logoutLogo" width={"20px"} />
                  </ListItemIcon>
                  Sign out
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Link
              to={"/login"}
              style={{
                background: "#0054a1",
                color: "#fff",
                borderRadius: "7px",
                padding: "0.8rem 2rem",
                fontWeight: "500",
              }}
            >
              Log in
            </Link>
          )}
        </Box>
      </Box>
    </section>
  );
}

export default Navbar;
