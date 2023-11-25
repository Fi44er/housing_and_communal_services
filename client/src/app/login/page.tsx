"use client";

import "./login.css";
// import Link from "next/link";
import Image from "next/image";
// import { useState } from "react";
import { Context } from "../layout";
import { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth()
    }
  }, [])
  if (localStorage.getItem("token")) {
      location.href = '/lk_user'
      return (
        <div className="w-full h-full flex justify-center items-center">
            <h1 className="font-bold text-7xl">Загрузка...</h1>
        </div>
      )
  }

  return (
    <main className="login">
      <div className="container">
        <div className="modal">
          <div className="modalInfo">
            <Image
              className="imag1"
              src="/formImg.svg"
              width={400}
              height={200}
              alt="noteBook"
            />
            <Image
              className="imag2"
              src="/formImg.svg"
              width={200}
              height={150}
              alt="noteBook"
            />
            <div className="modalForm">
              <h1>Вход</h1>
              <h1 className="text-red-600">{store.message}</h1>
              <div className="modalInput">
                <div className="input">
                  <Image src="/email.svg" width={29} height={29} alt="" />
                  <input
                    type="text"
                    placeholder="Почта"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="input">
                  <Image src="/pass.svg" width={29} height={29} alt="" />
                  <input
                    type="password"
                    placeholder="Пароль"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <button
                  className="formButton"
                  onClick={() => store.login(email, password)}
                >
                  Войти
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
