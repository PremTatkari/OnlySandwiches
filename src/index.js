import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import FoodPage from "./pages/FoodPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/foodPage" element={<FoodPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
