import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage.component";
import ShopComponent from "./pages/shopPage/Shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

function App({ setUser }) {
  React.useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setUser(userAuth);
      }
    });
  }, []);
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

const mapDispathToProps = (dispatch) => ({
  setUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispathToProps)(App);
// should look 4 in section 6
