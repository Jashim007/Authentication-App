import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.js";

const Header = () => {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="header h-[60px] w-95/100 flex items-center bg-slate-500">
        <div className="app_name w-1/2 ml-8 text-white text-xl font-Ubuntu">
          Firebase Google Authentication
        </div>
        <div className="signin_btn w-1/2 mx-15 text-white flex justify-end mx-8">
          {user?.displayName ? (
            <Link
              className="p-2 text-white font-bold border border-2 rounded-md active:scale-95"
              onClick={handleSignOut}
            >
              Sign Out
            </Link>
          ) : (
            <Link
              to="/signin"
              className="p-2 text-white font-bold border border-2 rounded-md active:scale-95"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
