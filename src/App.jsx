import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/public/AboutPage";
import LoginPage from "./pages/public/LoginPage";
import ContactPage from "./pages/public/Contact";
import NavigationBar from "./pages/public/NavigationBar";
import ProductPage from "./pages/private/ProductPage";
import LogoutPage from "./pages/public/LogoutPage";
import RequireAuth from "./RequireAuth";
import ErrorPage from "./pages/public/ErrorPage";
import SingleProductPage from "./pages/private/SingleProductPage";
import HomePage from "./pages/public/HomePage";

 
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") != null
  );

  const handleLogin = () => {
    localStorage.setItem("token", "login token");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar isAuthenticated={isAuthenticated} /> }>
            <Route path="home" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={<LoginPage onLogin={handleLogin} />} />
            <Route
              path="product"
              element={
                <RequireAuth isAuthenticated={isAuthenticated}>
                  <ProductPage />
                </RequireAuth>
              }
            />
            <Route path="product/:productId" element={<SingleProductPage />} />
            <Route
              path="logout"
              element={<LogoutPage onLogout={handleLogout} />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
