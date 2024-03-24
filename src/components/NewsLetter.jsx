import { Box } from "@mui/material";
import React, { useState } from "react";
import { IoMailUnreadOutline } from "react-icons/io5";

function NewsLetter() {
  const [subscribeMail, setSubscribeMail] = useState("");

  const handleSubmit = () => {
    console.log(subscribeMail);
  };

  return (
    <Box
      sx={{
        color: "#fff",
        padding: "2rem 8rem",
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <h3 style={{ fontWeight: "600" }}>Sign up for newsletter</h3>
        <p style={{ fontSize: "0.9rem" }}>
          Sign up now and be the first to know about exclusive offers, latest
          fashion news & style tips!
        </p>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <label>Email</label>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <input
            type="email"
            value={subscribeMail}
            onChange={(event) => setSubscribeMail(event.target.value)}
            style={{
              width: "45rem",
              padding: "0.7rem 2rem",
              border: "none",
              outline: "none",
              borderRadius: "5px",
              fontWeight: "500",
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#0054a1",
              border: "none",
              outline: "none",
              color: "#fff",
              padding: "0.65rem 1.5rem",
              borderRadius: "5px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            <IoMailUnreadOutline size={"1.3rem"} /> Subscribe
          </button>
        </Box>
      </Box>
    </Box>
  );
}

export default NewsLetter;
