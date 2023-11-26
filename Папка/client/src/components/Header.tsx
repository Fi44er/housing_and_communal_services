import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

export function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="headerLogo">
          <img
            className="logo1"
            src="/Group.svg"
            width={61}
            height={61}
            alt="Logo"
          />
          <img
            className="logo2"
            src="/Group.svg"
            width={31}
            height={31}
            alt="Logo"
          />
          <h2>Уютный город</h2>
        </div>
        <nav
          className={`headerNav ${isOpen ? "active" : ""}`}
          onClick={() => setOpen(false)}
        >
          <ul className="headerNavList">
            <li className="headerNavItem">
              <Link to="/">Главная </Link>
            </li>
            <li className="headerNavItem">
              <Link to="/contacts">Контакты</Link>
            </li>
            <li className="headerNavItem">
              <Link to="/jkh">О ЖКХ </Link>
            </li>
            <li className="headerNavItem">
              <Link to="/schedule">Раписание</Link>
            </li>
            <li className="headerNavItem">
              <Link to="/news">Новости</Link>
            </li>
            <div className="headerButtonMobile">
              <div>
                <Link to="/login">Войти</Link>
              </div>
              <div>
                <Link to="/reg">Регистрация</Link>
              </div>
            </div>
          </ul>
        </nav>
        <div className="headerButton">
          <div>
            <Link to="/login">Войти</Link>
          </div>
          <div>
            <Link to="/reg">Регистрация</Link>
          </div>
        </div>
        <div className="headerMenu">
          <button onClick={() => setOpen(!isOpen)}>
            <img src="/Category.svg" width={40} height={40} alt="" />
          </button>
        </div>
      </header>
    </>
  );
}
