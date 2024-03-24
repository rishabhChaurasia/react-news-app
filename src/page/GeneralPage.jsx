import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import {
  getGeneralNewsError,
  getGeneralNewsStart,
  getGeneralNewsSuccess,
} from "../redux/slice/newsSlice";
import { Box } from "@mui/material";
import NewsPageCard from "../components/NewsPageCard";
// import { GiMaterialsScience } from "react-icons/gi";
import { MdLocalFlorist } from "react-icons/md";

function GeneralPage() {
  const dispatch = useDispatch();
  const { generalNews, currentDate } = useSelector((state) => state.news);

  useEffect(() => {
    const getGeneralNews = async () => {
      dispatch(getGeneralNewsStart());
      try {
        const res =
          await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }
        `);
        dispatch(getGeneralNewsSuccess(res.data));
      } catch (error) {
        toast.error(error.message);
        dispatch(getGeneralNewsError(error.message));
      }
    };
    const newCurrentDate = new Date().getDate();
    if (!generalNews || currentDate !== newCurrentDate) {
      getGeneralNews();
    }
  }, [generalNews, currentDate]);

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
          <MdLocalFlorist size={"2rem"} color="#1e66c3" />
          <p
            style={{
              color: "#0066C3",
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            General
          </p>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {generalNews?.articles?.map((val, index) => {
            return <NewsPageCard key={index} data={val} />;
          })}
        </Box>
      </Box>
    </section>
  );
}

export default GeneralPage;
