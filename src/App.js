import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage.component";
import ShopComponent from "./pages/shopPage/Shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }, []);
  return (
    <div>
      <Header currentUser={currentUser} />
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
