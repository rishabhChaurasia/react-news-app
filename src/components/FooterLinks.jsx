import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "../staticData";

function FooterLinks() {
  return (
    <Box
      sx={{
        color: "#fff",
        padding: "1rem 8rem",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        rowGap: 5
      }}
    >
      {footerLinks.map((val, index) => {
        return (
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            key={index}
          >
            <h3 style={{ fontWeight: "500", fontSize: "1.2rem" }}>
              {val.categoryTitle}
            </h3>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {val.categoryName.map((val, index) => {
                return (
                  <Link key={index} className="footerLink">
                    {val.name}
                  </Link>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default FooterLinks;
