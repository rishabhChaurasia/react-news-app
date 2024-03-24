import { Box } from "@mui/material";
import React from "react";
import imageErrorSvg from "../assets/ImageErrorSvg.svg";

function TrendCard({ data }) {
  const description = data?.title || "";
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        borderRadius: "6px",
        overflow: "hidden",
      }}
    >
      <img
        src={data?.urlToImage || imageErrorSvg}
        alt="trendCardImg"
        width={"80px"}
        height={"55px"}
        style={{ objectFit: "cover" }}
      />
      <p style={{ fontWeight: "500" }}>{description}</p>
    </Box>
  );
}

export default TrendCard;
