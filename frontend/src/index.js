import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import FoodPage from "./pages/FoodPage";
import "./i18n"

const root = ReactDOM.createRoot(document.getElementById("root"));

export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/" element={<Header />} />
          <Route path="/foodPage" element={<FoodPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <Suspense fallback="Loading...">
      <Main />
    </Suspense>
  </React.StrictMode>
);
