import React, { useState } from "react";
import logo from "../assets/iteration-1-images/logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Order.css";
import Header from "./Header";
import { ToastContainer } from "react-toastify";

function Order() {
  const maxMalzeme = 10;
  const minMalzeme = 4;
  const malzemeFiyat = 5;
  const secenekler = [
    "Yeşil Biber",
    "Jalepeono",
    "Zeytin",
    "Mısır",
    "Sosis",
    "Sucuk",
    "Sarımsak",
    "Soğan",
    "Ananas",
    "Salam",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Kabak",
  ];
  const [malzeme, setMalzeme] = useState([]);
  const toggleMalzeme = (item) => {
    if (malzeme.includes(item)) {
      setMalzeme((arr) => arr.filter((i) => i !== item));
    } else {
      if (malzeme.length < maxMalzeme) {
        setMalzeme((arr) => [...arr, item]);
      } else {
        toast.error(`En fazla ${maxMalzeme} Malzeme Ekleyebilirsiniz!`, {
          position: "bottom-right",
          autoClose: 2500,
        });
      }
    }
  };
  const isValid = malzeme.length >= minMalzeme && malzeme.length <= maxMalzeme;
  return (
    <>
      <Header />
      <header className="nav-menu">
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
      <div className="order-pages">
        <div className="order-header">
          <h2>Position Absolute Acı Pizza</h2>
          <p>
            Frontend Dev olarka hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza domates, peynir ve genellikle çeşitli
            malzemelerle kaplanmış, daha sonra geleneksel olarka odun ateşinde
            bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
            düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
            bir lezzetli bir yemektir.
          </p>

          <form style={{ display: "flex" }}>
            <div
              style={{
                width: "50%",
                display: "inline-block",
              }}
            >
              <label>
                Boyut Seç <br />
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
            </div>
            <div
              style={{
                width: "50%",
                display: "inline-block",
              }}
            >
              <label>
                Hamur Seç: <br />
                <select name="hamur" defaultValue="">
                  <option value="" disabled>
                    Hamur Kalınlığı
                  </option>
                  <option value="ince">İnce</option>
                  <option value="kalin">Kalın</option>
                </select>
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <h3>Ek Malzemeler</h3>
        <p>En fazla {maxMalzeme} Malzeme Seçebilirsiniz. 5₺</p>
        <div className="malzeme-container">
          {secenekler.map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                checked={malzeme.includes(item)}
                onChange={() => toggleMalzeme(item)}
              />
              {item}
            </label>
          ))}
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Order;
