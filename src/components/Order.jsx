import React from "react";
import logo from "../assets/iteration-1-images/logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Order.css";

function Order() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Teknolojik Yemekler" className="logo" />
        <Router>
          <nav className="nav">
            <Link to="/">Ana Sayfa</Link>
            <span>-</span>
            <Link to="/">Seçenekler</Link>
            <span>-</span>
            <Link to="/">Sipariş Oluştur</Link>
          </nav>
        </Router>
      </header>
      <div className="order-header">
        <h2>Position Absolute Acı Pizza</h2>
        <p>
          Frontend Dev olarka hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza domates, peynir ve genellikle çeşitli
          malzemelerle kaplanmış, daha sonra geleneksel olarka odun ateşinde bir
          fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli bir
          lezzetli bir yemektir.
        </p>
      </div>
      <div className="order-container">
        <form>
          <label>
            Boyut Seç <br/>
            <input type="radio" name="secim" value="kucuk" />
            Küçük
          </label>
          <br />
          <label>
            <input type="radio" name="secim" value="orta" />
            Orta
          </label>
          <br />
          <label>
            <input type="radio" name="secim" value="buyuk" />
            Büyük
          </label>
          <br />
          <label>
            Hamur Seç:
            <select name="hamur">
              <option value="ince">İnce</option>
              <option value="kalin">Kalın</option>
            </select>
          </label>
        </form>
      </div>
    </>
  );
}

export default Order;
