import React from "react"; 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ytClone from "./assets/yt-clone.mp4";
import loginform from "./assets/loginform.mp4"


export const MyContext = React.createContext();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyContext.Provider value={{ 
      ytClone,   
      loginform,
    }}>
      <App />
    </MyContext.Provider>
  </StrictMode>
);
