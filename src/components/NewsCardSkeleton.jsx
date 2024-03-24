import { Box, Paper, Skeleton, Typography } from "@mui/material";
import React from "react";
import imageErrorSvg from "../assets/ImageErrorSvg.svg";

function NewsCardSkeleton() {
  return (
    <Paper elevation={2}>
      <Box
        className="newscard"
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      >
        <img
          src={imageErrorSvg}
          width={"100%"}
          height={"169px"}
          style={{ objectFit: "cover" }}
        />
        {[0, 1, 2, 3].map((index) => {
          return (
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={215}
              height={15}
              key={index}
            />
          );
        })}
      </Box>
    </Paper>
  );
}

export default NewsCardSkeleton;
