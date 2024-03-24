import React from "react";
import { Box } from "@mui/material";
import NewsPageCard from "../components/NewsPageCard";
import { useSelector } from "react-redux";
import { FaEnvira } from "react-icons/fa6";

function HealthPage() {
  const { healthNews } = useSelector((state) => state.news);
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
          <FaEnvira size={"2rem"} color="#1e66c3" />
          <p
            style={{
              color: "#0066C3",
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            Health
          </p>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {healthNews?.articles?.map((val, index) => {
            return <NewsPageCard key={index} data={val} />;
          })}
        </Box>
      </Box>
    </section>
  );
}

export default HealthPage;
