import React, { useEffect } from "react";
import { Box } from "@mui/material";
import cameraSvg from "../assets/Camera.svg";
import viewAllSvg from "../assets/viewAll.svg";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import NewsCard from "./NewsCard";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  getEntertainmentNewsError,
  getEntertainmentNewsStart,
  getEntertainmentNewsSuccess,
} from "../redux/slice/newsSlice";
import axios from "axios";
import NewsCardSkeleton from "./NewsCardSkeleton";

function Entertainment() {
  const dispatch = useDispatch();
  const { entertainmentNews, currentDate, entertainmentNewsLoading } =
    useSelector((state) => state.news);

  useEffect(() => {
    const getEntertainmentNews = async () => {
      dispatch(getEntertainmentNewsStart());
      try {
        const res =
          await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }
        `);
        dispatch(getEntertainmentNewsSuccess(res.data));
      } catch (error) {
        toast.error(error.message);
        dispatch(getEntertainmentNewsError(error.message));
      }
    };
    const newCurrentDate = new Date().getDate();
    if (!entertainmentNews || currentDate !== newCurrentDate) {
      getEntertainmentNews();
    }
  }, [entertainmentNews, currentDate]);
  return (
    <section id="entertainment">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 8rem",
        }}
      >
        <figure style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={cameraSvg} alt="cameraSvg" />
          <figcaption
            style={{
              color: "#0066C3",
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            Entertainment
          </figcaption>
        </figure>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={viewAllSvg} alt="viewAll" />
          <Link
            to={"/entertainment"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontWeight: "600",
            }}
          >
            View all <HiArrowLongRight />
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          placeItems: "center",
          padding: "2rem 8rem",
          rowGap: 3,
          gap: 2,
        }}
      >
        {entertainmentNewsLoading &&
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
            return <NewsCardSkeleton key={index} />;
          })}
        {!entertainmentNewsLoading &&
          entertainmentNews?.articles?.slice(0, 10).map((val, index) => {
            return <NewsCard key={index} data={val} />;
          })}
      </Box>
    </section>
  );
}

export default Entertainment;
