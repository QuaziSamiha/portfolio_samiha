import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mx-6 lg:mx-24 bg-[#dff7e5]">
    <React.StrictMode>
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </React.StrictMode>
  </div>
);
