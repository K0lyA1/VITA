import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import NotFound from "./NotFound";
import Users from "./Users";
import Home from "./Home";
import User from "./User";

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "users",
      element: (
        <>
          Пользователи:
          <Outlet />
        </>
      ),
      children: [
        {
          path: "",
          element: <Users />,
        },
        {
          path: ":id",
          element: <User />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
}
