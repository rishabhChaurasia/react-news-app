import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NewsPageCard from "../components/NewsPageCard";
import politicsSvg from "../assets/politics.svg";

function PoliticsPage() {
  const { politicalNews } = useSelector((state) => state.news);
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
          <img src={politicsSvg} alt="politics" />
          <p
            style={{
              color: "#0066C3",
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            Politics
          </p>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {politicalNews?.articles?.map((val, index) => {
            return <NewsPageCard key={index} data={val} />;
          })}
        </Box>
      </Box>
    </section>
  );
}

export default PoliticsPage;
