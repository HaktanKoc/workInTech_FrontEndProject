import React from "react";
import logo from '../assets/iteration-1-images/logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Teknolojik Yemekler" />
      </div>
      <Router>
        <Route className="nav">
          <Link to="/">Anasayfa</Link>
          <Link to="/order">Sipariş Oluştur</Link>
        </Route>
      </Router>
    </header>
  );
}

export default Header;