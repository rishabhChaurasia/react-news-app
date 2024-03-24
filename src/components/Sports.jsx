import React, { useEffect } from "react";
import sportsSvg from "../assets/sports.svg";
import { Box } from "@mui/material";
import viewAllSvg from "../assets/viewAll.svg";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  getSportsNewsError,
  getSportsNewsStart,
  getSportsNewsSuccess,
} from "../redux/slice/newsSlice";
import axios from "axios";
import NewsCardSkeleton from "./NewsCardSkeleton";

function Sports() {
  const dispatch = useDispatch();
  const { sportsNews, currentDate, sportsNewsLoading } = useSelector(
    (state) => state.news
  );

  useEffect(() => {
    const getSportsNews = async () => {
      dispatch(getSportsNewsStart());
      try {
        const res =
          await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }
        `);
        dispatch(getSportsNewsSuccess(res.data));
      } catch (error) {
        toast.error(error.message);
        dispatch(getSportsNewsError(error.message));
      }
    };
    const newCurrentDate = new Date().getDate();
    if (!sportsNews || currentDate !== newCurrentDate) {
      getSportsNews();
    }
  }, [sportsNews, currentDate]);

  return (
    <section id="sports">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 8rem",
        }}
      >
        <figure style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={sportsSvg} alt="sportsSvg" />
          <figcaption
            style={{
              color: "#0066C3",
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            Sports
          </figcaption>
        </figure>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={viewAllSvg} alt="viewAll" />
          <Link
            to={"/sports"}
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
          padding: "2rem 8rem",
          rowGap: 3,
          gap: 2,
          placeItems: "center",
        }}
      >
        {sportsNewsLoading &&
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
            return <NewsCardSkeleton key={index} />;
          })}
        {!sportsNewsLoading &&
          sportsNews?.articles?.slice(0, 10).map((val, index) => {
            return <NewsCard key={index} data={val} />;
          })}
      </Box>
    </section>
  );
}

export default Sports;
