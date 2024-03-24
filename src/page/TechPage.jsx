import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  getTechNewsError,
  getTechNewsStart,
  getTechNewsSuccess,
} from "../redux/slice/newsSlice";
import axios from "axios";
import NewsPageCard from "../components/NewsPageCard";
import { Box } from "@mui/material";
import { MdSatelliteAlt } from "react-icons/md";

function TechPage() {
  const dispatch = useDispatch();
  const { techNews, currentDate } = useSelector((state) => state.news);

  useEffect(() => {
    const getTechNews = async () => {
      dispatch(getTechNewsStart());
      try {
        const res =
          await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }
        `);
        dispatch(getTechNewsSuccess(res.data));
      } catch (error) {
        toast.error(error.message);
        dispatch(getTechNewsError(error.message));
      }
    };
    const newCurrentDate = new Date().getDate();
    if (!techNews || currentDate !== newCurrentDate) {
      getTechNews();
    }
  }, [techNews, currentDate]);

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
          <MdSatelliteAlt size={"2rem"} color="#1e66c3" />
          <p
            style={{
              color: "#0066C3",
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            Technology
          </p>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {techNews?.articles?.map((val, index) => {
            return <NewsPageCard key={index} data={val} />;
          })}
        </Box>
      </Box>
    </section>
  );
}

export default TechPage;
