"use client";
import Link from "next/link";
import Image from "next/image";
import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="headerLogo">
        <Image className="logo1" src="/Group.svg" width={61} height={61} alt="Logo" />
        <Image className="logo2" src="/Group.svg" width={31} height={31} alt="Logo" />
        <h2>Уютный город</h2>
      </div>
      <nav className={`headerNav ${isOpen ? "active" : ""}`}>
        <ul className="headerNavList">
          <li className="headerNavItem">
            <Link href="/">Главная </Link>
          </li>
          <li className="headerNavItem">
            <Link href="/about_us">Контакты</Link>
          </li>
          <li className="headerNavItem">
            <Link href="#">О ЖКХ </Link>
          </li>
          <li className="headerNavItem">
            <Link href="#">Раписание</Link>
          </li>
          <li className="headerNavItem">
            <Link href="#">Новости</Link>
          </li>
          <div className="headerButtonMobile">
            <div>
              <button>Войти</button>
            </div>
            <div>
              <button>Регистрация</button>
            </div>
          </div>
        </ul>
      </nav>
      <div className="headerButton">
        <div>
          <button>Войти</button>
        </div>
        <div>
          <button>Регистрация</button>
        </div>
      </div>
      <div className="headerMenu">
        <button onClick={() => setOpen(!isOpen)}>
          <Image src="/Category.svg" width={40} height={40} alt="" />
        </button>
      </div>
    </header>
  );
}
