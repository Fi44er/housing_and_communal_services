import "./login.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  return (
    <main className="login">
      <div className="container">
        <div className="modal">
          <div className="modalInfo">
            <Image src="/formImg.svg" width={400} height={200} alt="noteBook" />
            <div className="modalForm">
              <h1>Вход</h1>
              {/* <h1>{store.login}</h1> */}
              <div className="modalInput">
                <div className="input">
                  <Image src="/email.svg" width={29} height={29} alt="" />
                  <input
                    type="text"
                    placeholder="Почта"
                    // onChange={(e) => setEmail(e.target.value)}
                    // value={email}
                  />
                </div>
                <div className="input">
                  <Image src="/pass.svg" width={29} height={29} alt="" />
                  <input
                    type="password"
                    placeholder="Пароль"
                    // onChange={(e) => setPassword(e.target.value)}
                    // value={password}
                  />
                </div>
                <button
                  className="formButton"
                  //   onClick={() => store.login(email, password)}
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
