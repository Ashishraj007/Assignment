import React from "react";
import Navbar from "./Components/Navbar";
import UpcomingTab from "./Pages/UpcomingTab";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import StartInterview from "./Pages/StartInterview";

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <div> <Navbar /> < UpcomingTab /></div>,
  },
    {
    path: "/StartInterview",
    element: <div> <Navbar /> < StartInterview /></div>,
  },
]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
