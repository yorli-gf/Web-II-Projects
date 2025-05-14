import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import RecipeDetail from "../Pages/RecipeDetail";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
