import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import imageErrorSvg from "../assets/ImageErrorSvg.svg";

function NewsCard({ data }) {
  const description = data?.title || "";
  const maxLengthDesc = description.substring(0, 120);
  return (
    <Paper elevation={2}>
      <Box className="newscard">
        <img
          src={data?.urlToImage || imageErrorSvg}
          width={"100%"}
          height={"169px"}
          style={{ objectFit: "cover" }}

        />
        <Typography variant="subtitle2">{maxLengthDesc}</Typography>
        <Link>Read More</Link>
      </Box>
    </Paper>
  );
}

export default NewsCard;
