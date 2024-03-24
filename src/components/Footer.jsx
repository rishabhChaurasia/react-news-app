import { Box, Tooltip, Zoom } from "@mui/material";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NewsLetter from "./NewsLetter";
import FooterLinks from "./FooterLinks";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          paddingTop: "1rem",
        }}
      >
        <Tooltip title="GitHub" TransitionComponent={Zoom}>
          <a
            href="https://github.com/rishabhChaurasia?tab=repositories"
            className="footerLogoLink"
          >
            <FaGithub />
          </a>
        </Tooltip>
        <Tooltip
          title="Instagram"
          TransitionComponent={Zoom}
          className="footerLogoLink"
        >
          <a href="https://www.instagram.com/ryuga_og/">
            <FaInstagram />
          </a>
        </Tooltip>
        <Tooltip
          title="Twitter"
          TransitionComponent={Zoom}
          className="footerLogoLink"
        >
          <a href="https://twitter.com/iamRishabh_333">
            <FaXTwitter />
          </a>
        </Tooltip>
      </Box>

      <NewsLetter />
      <FooterLinks />
      <Box
        sx={{
          color: "#f2f2f2",
          textAlign: "center",
          fontSize: "0.8rem",
          pb: "1rem",
        }}
      >
        <p>&copy; {year} All Rights Reserved</p>
      </Box>
    </footer>
  );
}

export default Footer;
