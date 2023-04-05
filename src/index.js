import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   
      <AppProvider>
         <App />
      </AppProvider>
   
);

//remove react strictmode for now. i dont want duplicate values showing up in  the console