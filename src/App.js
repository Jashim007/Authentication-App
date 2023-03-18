import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Account from "./components/Account";
import Protected from "./components/Protected";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <Outlet />
      </AuthContextProvider>
    </>
  );
};
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/account",
        element: (
          <Protected>
            <Account />
          </Protected>
        ),
      },
    ],
  },
]);

export default App;
