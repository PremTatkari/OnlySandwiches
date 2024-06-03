import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Cart from "./pages/Cart";
import FoodPage from "./pages/FoodPage";
import "./i18n"
import AddFood from "./pages/AddFood";
import UpdateFood from "./pages/UpdateFood";

const root = ReactDOM.createRoot(document.getElementById("root"));

export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/foodPage/:id" element={<FoodPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/addFood" element={<AddFood />} />
          <Route path="/updateItem/:id" element={<UpdateFood />} />
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
