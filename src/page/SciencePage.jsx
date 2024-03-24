import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NewsPageCard from "../components/NewsPageCard";
import { GiMaterialsScience } from "react-icons/gi";

function SciencePage() {
  const { scienceNews } = useSelector((state) => state.news);
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
          <GiMaterialsScience size={"2rem"} color="#1e66c3" />
          <p
            style={{
              color: "#0066C3",
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            Science
          </p>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {scienceNews?.articles?.map((val, index) => {
            return <NewsPageCard key={index} data={val} />;
          })}
        </Box>
      </Box>
    </section>
  );
}

export default SciencePage;
