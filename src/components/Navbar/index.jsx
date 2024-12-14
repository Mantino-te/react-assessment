import React from "react";
import { Link } from "react-router-dom";
import {
  House,
  MagnifyingGlass,
  ShoppingCart,
  UserCircle,
  Bell,
  DotsThree,
  ArrowLeft,
} from "phosphor-react";
import "./index.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-link">
            <House size={24} />
            <span>Home</span>
          </Link>
          <Link to="/search" className="navbar-link">
            <MagnifyingGlass size={24} />
            <span>Search</span>
          </Link>
        </div>
        <div className="navbar-title">Marvelous Stores</div>
        <div className="navbar-right">
          <Link to="/cart" className="navbar-link">
            <ShoppingCart size={24} />
            <span>Cart</span>
          </Link>
          <Link to="/account" className="navbar-link">
            <UserCircle size={24} />
            <span>Account</span>
          </Link>
          <Link to="/notifications" className="navbar-link">
            <Bell size={24} />
            <span>Notifications</span>
          </Link>
          <Link to="/menu" className="navbar-link">
            <DotsThree size={24} />
            <span>Menu</span>
          </Link>
          <Link to="/back" className="navbar-link">
            <ArrowLeft size={32} />
            <span>Back</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
