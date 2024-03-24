import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NewsPageCard from "../components/NewsPageCard";
import trendSvg from "../assets/Trend.svg";

function TrendPage() {
  const { latestNews } = useSelector((state) => state.news);
  return (
    <section>
      <Box
        sx={{
          padding: "2rem 20rem",
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={trendSvg} alt="latestSvg" width={"40px"} />
          <p
            style={{
              color: "#0066C3",
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            Trending
          </p>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {latestNews?.articles?.map((val, index) => {
            return <NewsPageCard key={index} data={val} />;
          })}
        </Box>
      </Box>
    </section>
  );
}

export default TrendPage;
