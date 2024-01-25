import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const languages = [
  {value: "", text: "Options"},
  {value: "en", text: "English"},
  {value: "hi", text: "Hindi"},
  {value: "mr", text: "Marathi"}
];

function Header() {
  const { t } = useTranslation();

  const [lang, setLang] = useState("");

  function changeLang(e) {
    setLang(e.target.value);
    let loc = "http://localhost:3000/";
    window.location.replace(loc + "?lng=" + e.target.value);
  }

  return (
    <header>
      <Link to="/">
        <h1>{t("title")}</h1>
      </Link>
      <label>{t("choose")}</label>

      <select value={lang} onChange={changeLang}>
        {languages.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
      <Link to="/cart">
        <img
          src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/shopping-cart-512.png"
          alt="cart-img"
        />
      </Link>
    </header>
  );
}

export default Header;
