import HomePage from "./pages/homePage/HomePage.component";
import { Route, Routes } from "react-router-dom";

const HatPages = () => {
  return <h1>hats page</h1>;
};

function App() {
  return (
    <div>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<HatPages />} path="/hats" />
      </Routes>
    </div>
  );
}

export default App;
