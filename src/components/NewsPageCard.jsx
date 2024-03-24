import { Box, Tooltip, Zoom } from "@mui/material";
import React from "react";
import imageErrorSvg from "../assets/ImageErrorSvg.svg";
import { Link } from "react-router-dom";
import { IoLinkOutline } from "react-icons/io5";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { calculateTimeDifference } from "../helpers/helpers";

function NewsPageCard({ data }) {
    const newsPostedOn = calculateTimeDifference(data?.publishedAt)
  return (
    <Box
      sx={{
        background: "#f2f2f2",
        width: "100%",
        borderRadius: "17px",
        overflow: "hidden",
        padding: "0.8rem",
        display: "flex",
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <img
          src={data?.urlToImage || imageErrorSvg}
          width={"300px"}
          style={{ borderRadius: "16px" }}
        />
        <p style={{ width: "20rem", fontSize: "1rem", fontWeight: "500" }}>
          {data?.title}
        </p>
        <p style={{ fontSize: "0.8rem", fontWeight: "600", color: "#7f7f7f" }}>
        {newsPostedOn}
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <p style={{ fontWeight: "600", fontSize: "1.4rem" }}>
          {data?.source?.name}
        </p>
        <p style={{ fontWeight: "500", fontSize: "0.9rem", color: "#7f7f7f" }}>
          {data?.author || "Anonymous"}
        </p>
        <p style={{ fontWeight: "500", fontSize: "1rem" }}>
          {data?.description}
        </p>
        <p style={{ fontWeight: "400", fontSize: "0.9rem" }}>
         {data?.content}
        </p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            gap: 1,
          }}
        >
          <Tooltip title="Original source" TransitionComponent={Zoom}>
            <a
              href={data?.url}
              style={{
                padding: "5px 20px",
                display: "flex",
                alignItems: "center",
                gap: 5,
                borderRadius: "18px",
                background: "rgba(0,0,0,0.1)",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              <IoLinkOutline size={"1.2rem"} /> Visit Original Source
            </a>
          </Tooltip>
          <Tooltip title="Detail Page" TransitionComponent={Zoom}>
            <Link
              style={{
                padding: "5px 20px",
                display: "flex",
                alignItems: "center",
                gap: 5,
                borderRadius: "18px",
                background: "rgba(0,0,0,0.1)",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              <LiaExternalLinkAltSolid size={"1.2rem"} /> Read in Detail
            </Link>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}

export default NewsPageCard;
