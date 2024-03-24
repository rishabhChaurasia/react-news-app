import React, { useEffect } from "react";
import politicsSvg from "../assets/politics.svg";
import viewAllSvg from "../assets/viewAll.svg";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import NewsCard from "./NewsCard";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getPoliticalNewsError,
  getPoliticalNewsStart,
  getPoliticalNewsSuccess,
} from "../redux/slice/newsSlice";
import NewsCardSkeleton from "./NewsCardSkeleton";

function Politics() {
  const dispatch = useDispatch();
  const { politicalNews, currentDate, politicalNewsLoading } = useSelector(
    (state) => state.news
  );
  useEffect(() => {
    const getPoliticsCategory = async () => {
      dispatch(getPoliticalNewsStart());
      try {
        const res =
          await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }
        `);
        dispatch(getPoliticalNewsSuccess(res.data));
      } catch (error) {
        toast.error(error.message);
        dispatch(getPoliticalNewsError(error.message));
      }
    };
    const newCurrentDate = new Date().getDate();
    if (!politicalNews || currentDate !== newCurrentDate) {
      getPoliticsCategory();
    }
  }, [politicalNews, currentDate]);

  return (
    <section id="politics">
      <Box
        padding={"2rem 8rem"}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <figure style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={politicsSvg} alt="politics" />
          <figcaption
            style={{
              color: "#0066C3",
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            Politics
          </figcaption>
        </figure>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={viewAllSvg} alt="viewAll" />
          <Link
            to={"/politics"}
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
        {politicalNewsLoading &&
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
            return <NewsCardSkeleton key={index} />;
          })}
        {!politicalNewsLoading &&
          politicalNews?.articles?.slice(0, 10).map((val, index) => {
            return <NewsCard key={index} data={val} />;
          })}
      </Box>
    </section>
  );
}

export default Politics;
