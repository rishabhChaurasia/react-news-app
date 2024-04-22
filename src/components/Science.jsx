import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { GiMaterialsScience } from "react-icons/gi";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import OverlayImgCard from "./OverlayImgCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import {
  getScienceNewsError,
  getScienceNewsStart,
  getScienceNewsSuccess,
} from "../redux/slice/newsSlice";
import imageErrorSvg from "../assets/ImageErrorSvg.svg";

function Science() {
  const dispatch = useDispatch();
  const { scienceNews, currentDate } = useSelector((state) => state.news);
  useEffect(() => {
    const getScience = async () => {
      dispatch(getScienceNewsStart());
      try {
        const res =
          await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }
        `);
        dispatch(getScienceNewsSuccess(res.data));
      } catch (error) {
        toast.error(error.message);
        dispatch(getScienceNewsError(error.message));
      }
    };
    const newCurrentDate = new Date().getDate();

    if (!scienceNews || currentDate !== newCurrentDate) {
      getScience();
    }
  }, [scienceNews, currentDate]);

  return (
    <section id="heritageAndArchitecture">
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(62,128,188,1) 0%, rgba(145,186,223,1) 69%, rgba(145,186,223,1) 100%)",
          padding: "1rem 2rem",
          width: "80rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <figure
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              color: "#fff",
              fontSize: "1.3rem",
            }}
          >
            <GiMaterialsScience size={"2rem"} />
            <figcaption>Science</figcaption>
          </figure>
          <Link
            to={"/science"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontWeight: "600",
              color: "#fff",
            }}
          >
            View all <HiArrowLongRight />
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mt: 3,
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "25rem",
              display: "grid",
              placeItems: "center",
              gap: 2,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            {scienceNews?.articles?.slice(0, 4).map((val, index) => {
              return <OverlayImgCard key={index} data={val} />;
            })}
          </Box>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
              {scienceNews?.articles?.map((val, index) => {
                return (
                  <SwiperSlide
                    style={{
                      width: "30rem",
                      position: "relative",
                      height: "25rem",
                      borderRadius: "5px",
                      overflow: "hidden",
                    }}
                    key={index}
                  >
                    <img
                      src={val?.urlToImage || imageErrorSvg}
                      alt="carso image"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        background: "rgba(0,0,0,0.4)",
                        color: "#fff",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                          transform: "translateY(17rem) translateX(2rem)",
                          width: "25rem",
                          textAlign: "start",
                        }}
                      >
                        <Typography variant="h5">
                          {val?.author || "Anonymous"}
                        </Typography>
                        <Typography variant="body2">{val?.title}</Typography>
                      </Box>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default Science;
