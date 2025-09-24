import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Select() {
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
      if (malzeme.length < 10) {
        setMalzeme((arr) => [...arr, item]);
      } else {
        toast.error("En fazla 10 Malzeme Ekleyebilirsiniz!", {
          position: "top-right",
          autoClose: 2500,
        });
      }
    }
  };
  const isValid = malzeme.length >= 4 && malzeme.length <= 10;
  return (
    <>
      <div>
        <h3>Ek Malzemeler</h3>
        <p>En fazla 10 Malzeme Seçebilirsiniz. 5₺</p>
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

export default Select;
