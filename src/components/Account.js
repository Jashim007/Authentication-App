import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext.js";

const Account = () => {
  const { user, logOut } = UserAuth();
  const [counter, setCounter] = useState(0);
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const userName = user?.displayName ? user.displayName : "User";
  return (
    <>
      <div className="w-[300px] m-auto">
        <h1 className="text-center text-2xl font-bold pt-12">Account</h1>
        <div className="text-center text-2xl  pt-12">
          <p>Welcome {userName}</p>
        </div>
        <button
          className="border py-2 px-5 mt-10 mx-auto"
          onClick={handleSignOut}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Account;
