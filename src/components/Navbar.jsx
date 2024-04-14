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
import React from "react";
import navbarLogo from "../assets/navbarLogo.svg";
import { navListLink } from "../staticData";
import { Link } from "react-router-dom";

function Navbar() {
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
      </Box>
    </section>
  );
}

export default Navbar;
