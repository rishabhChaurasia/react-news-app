import React from "react";
import sportsSvg from "../assets/sports.svg";
import { useSelector } from "react-redux";
import NewsPageCard from "../components/NewsPageCard";
import { Box } from "@mui/material";

function SportsPage() {
  const { sportsNews } = useSelector((state) => state.news);
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
          <img src={sportsSvg} alt="" width={"38px"} />
          <p
            style={{
              color: "#0066C3",
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            Sports
          </p>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {sportsNews?.articles?.map((val, index) => {
            return <NewsPageCard key={index} data={val} />;
          })}
        </Box>
      </Box>
    </section>
  );
}

export default SportsPage;
