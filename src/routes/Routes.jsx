// routes/Routes.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Search from "../components/Search";
import Cart from "../features/Cart/components/Cart";
import Account from "../features/Account/components/Account";
import Notifications from "../features/Notifications/components/notifications";
import Menu from "../features/Menu/components/Menu";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/menu" element={<Menu />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
