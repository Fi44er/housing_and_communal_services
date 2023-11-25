import "./reg.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Reg() {
  return (
    <main className="reg">
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
              <h1>Регистрация</h1>
              {/* <h1>{store.login}</h1> */}
              <div className="modalInput">
                <div className="input">
                  <Image src="/fio.svg" width={29} height={29} alt="" />
                  <input
                    type="text"
                    placeholder="ФИО"
                    // onChange={(e) => setEmail(e.target.value)}
                    // value={email}
                  />
                </div>
                <div className="input">
                  <Image src="/phone.svg" width={29} height={29} alt="" />
                  <input
                    type="text"
                    placeholder="Телефон"
                    // onChange={(e) => setEmail(e.target.value)}
                    // value={email}
                  />
                </div>
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
                  Зарегистрироваться
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}