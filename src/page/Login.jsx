import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import {
  authUserFailure,
  authUserStart,
  authUserSuccess,
} from "../redux/slice/authSlice";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import toast from "react-hot-toast";

function Login() {
  const dispatch = useDispatch();
  const { authLoading } = useSelector((state) => state.auth);

  const handleGoogleLogin = async () => {
    dispatch(authUserStart());
    try {
      const res = await signInWithPopup(auth, provider);
      dispatch(authUserSuccess(res.user));
      toast.success("Login Successful");
    } catch (error) {
      console.log(error.message);
      dispatch(authUserFailure(error.message));
      toast.error("Login Failed");
    }
  };

  return (
    <section className="loginPage">
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          width: "15rem",
          height: "12rem",
          borderRadius: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button className="loginBtn" onClick={handleGoogleLogin}>
          {authLoading ? (
            <CircularProgress size={18} />
          ) : (
            <>
              Sign in with <FcGoogle size={"1.5rem"} />
            </>
          )}
        </button>
      </Box>
    </section>
  );
}

export default Login;
