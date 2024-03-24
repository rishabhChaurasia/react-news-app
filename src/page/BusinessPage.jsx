import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { BsShopWindow } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  getBusinessNewsError,
  getBusinessNewsStart,
  getBusinessNewsSuccess,
} from "../redux/slice/newsSlice";
import axios from "axios";
import NewsPageCard from "../components/NewsPageCard";

function BusinessPage() {
  const dispatch = useDispatch();
  const { businessNews } = useSelector((state) => state.news);

  useEffect(() => {
    const getBusinessNews = async () => {
      dispatch(getBusinessNewsStart());
      try {
        const res =
          await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }
        `);
        dispatch(getBusinessNewsSuccess(res.data));
      } catch (error) {
        toast.error(error.message);
        dispatch(getBusinessNewsError(error.message));
      }
    };
    if (!businessNews) {
      getBusinessNews();
    }
  }, [businessNews]);

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
          <BsShopWindow color="#1e66c3" size={"2rem"} />
          <p
            style={{
              color: "#0066C3",
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            Business
          </p>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {businessNews?.articles?.map((val, index) => {
            return <NewsPageCard key={index} data={val} />;
          })}
        </Box>
      </Box>
    </section>
  );
}

export default BusinessPage;
