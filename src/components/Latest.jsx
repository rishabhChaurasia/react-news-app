import { Box, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import latestSvg from "../assets/Latest.svg";
import trendSvg from "../assets/Trend.svg";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendCard from "./TrendCard";
import Overlay from "./Overlay";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getLatestNewsError,
  getLatestNewsStart,
  getLatestNewsSuccess,
} from "../redux/slice/newsSlice";
import toast from "react-hot-toast";
import imageErrorSvg from "../assets/ImageErrorSvg.svg";

function Latest() {
  const dispatch = useDispatch();
  const { latestNews, currentDate, latestNewsLoading } = useSelector(
    (state) => state.news
  );

  useEffect(() => {
    const googleLatestNews = async () => {
      dispatch(getLatestNewsStart());
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }`
        );
        dispatch(getLatestNewsSuccess(res.data));
      } catch (error) {
        toast.error(error.message);
        dispatch(getLatestNewsError(error.message));
      }
    };
    const newCurrentDate = new Date().getDate();
    if (!latestNews || currentDate !== newCurrentDate) {
      googleLatestNews();
    }
  }, [latestNews, currentDate]);

  return (
    <section id="latest">
      <Box
        sx={{
          padding: "2rem 8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box width={"50rem"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img src={latestSvg} alt="latestSvg" />
            <p
              style={{
                color: "#0066C3",
                fontSize: "1.3rem",
                fontWeight: "500",
              }}
            >
              Latest
            </p>
          </Box>
          <Box mt={5}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {!latestNewsLoading &&
                latestNews?.articles?.map((val, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img
                        src={
                          val?.urlToImage === null
                            ? imageErrorSvg
                            : val?.urlToImage
                        }
                        style={{ objectFit: "cover" }}
                        alt="carsolul image"
                      />
                      <Overlay>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            transform: "translateY(20rem) translateX(2rem)",
                            width: "25rem",
                          }}
                        >
                          <Typography variant="h5">{val?.author}</Typography>
                          <Typography variant="body2">{val?.title}</Typography>
                        </Box>
                      </Overlay>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "0 1rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <img src={trendSvg} alt="trendLogo" width={"40px"} />
              <p
                style={{
                  color: "#0066C3",
                  fontWeight: "500",
                  fontSize: "1.5rem",
                }}
              >
                Trending
              </p>
            </Box>
            <Link
              to={"/trend"}
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

          {latestNewsLoading &&
            [0, 1, 2, 3, 4, 5].map((index) => {
              return (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  width={400}
                  height={60}
                />
              );
            })}

          {!latestNewsLoading &&
            latestNews?.articles?.slice(0, 6).map((val, index) => {
              return <TrendCard key={index} data={val} />;
            })}
        </Box>
      </Box>
    </section>
  );
}

export default Latest;
