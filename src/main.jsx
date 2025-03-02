import React from "react"; 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";


export const MyContext = React.createContext();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyContext.Provider value={{ 
      ytClone: "/yt-clone.mp4",   
      loginform: "/loginform.mp4"
    }}>
      <App />
    </MyContext.Provider>
  </StrictMode>
);
