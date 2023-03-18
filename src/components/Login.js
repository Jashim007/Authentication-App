import React from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <>
      <div className="text">Sign In</div>
      <div className="btn p-5 text-white font-bold bg-slate-400">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </>
  );
};

export default Login;
