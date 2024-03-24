import { Box } from "@mui/material";
import React from "react";
import NewsPageCard from "../components/NewsPageCard";
import { useSelector } from "react-redux";
import cameraSvg from "../assets/Camera.svg";

function EntertainmentPage() {
  const { entertainmentNews } = useSelector((state) => state.news);
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
          <img src={cameraSvg} alt="" width={"38px"} />
          <p
            style={{
              color: "#0066C3",
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            Entertainment
          </p>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          
          {entertainmentNews?.articles?.map((val, index) => {
            return <NewsPageCard key={index} data={val} />;
          })}
        </Box>
      </Box>
    </section>
  );
}

export default EntertainmentPage;
