import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage.component";
import ShopComponent from "./pages/shopPage/Shop.component";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ShopComponent />} path="/shop" />
      </Routes>
    </div>
  );
}

export default App;
