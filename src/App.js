import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage.component";
import ShopComponent from "./pages/shopPage/Shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ShopComponent />} path="/shop" />
        <Route element={<SignInSignUp />} path="/signin" />
      </Routes>
    </div>
  );
}

export default App;
// should look 4 in section 6
