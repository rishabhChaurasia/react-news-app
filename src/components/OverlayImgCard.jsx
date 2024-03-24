import React from "react";
import { Box } from "@mui/material";
import imageErrorSvg from "../assets/ImageErrorSvg.svg";

function OverlayImgCard({ data }) {
  const title = data?.title || "";
  const maxLengthTitle = title.substring(0, 50);
  return (
    <Box
      sx={{
        cursor: "pointer",
        position: "relative",
        height: "11.9rem",
        overflow: "hidden",
        transition: "0.5s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <img
        src={data?.urlToImage || imageErrorSvg}
        width={"310px"}
        height={"190px"}
        style={{ objectFit: "cover", borderRadius: "5px" }}
      />
      <div
        className="overlayImgCard"
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          left: "0",
          bottom: "0",
          backgroundColor: "rgba(0,0,0,0.5)",
          borderRadius: "5px",
          color: "white",
        }}
      >
        <h4 style={{ transform: "translateY(8rem) translateX(1rem)" }}>
          {maxLengthTitle}
        </h4>
      </div>
    </Box>
  );
}

export default OverlayImgCard;
