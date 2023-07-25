import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import Login from "./pages/Login";
import AboutCar from "./pages/aboutcar";
import UserView from "./pages/userview"
import CarViews from "./pages/carviews";
import CreateAccount from "./pages/create-account";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import CarComparison from "./pages/carcomparison";


//create your first component
const Layout = () => {
  
  const basename = process.env.BASENAME || "";


  if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") {
    return <BackendURL />;
  }
    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/Login" />
                        <Route element={<UserView />} path="/usermain"/>
                        <Route element={<AboutCar />} path="/about/:theid"/>
                        <Route element={<CarViews />} path="/catalog" />
                        <Route element={<CarComparison/>} path="/compare"/>
                        <Route element={<CreateAccount />} path="/signup" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );

};

export default injectContext(Layout);
