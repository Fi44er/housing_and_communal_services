import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import "./lkUser.css";

export default function LkUser() {
  return (
    <main className="LkUser">
      <div className="container">
        <div className="LkUserContent">
          <div className="userProfile">
            <div className="userProfileHeading">
              <h2>Фотография профиля</h2>
            </div>
            <div className="userProfileImg">
              <Image
                className="im1"
                src="/image 19.png"
                width={508}
                height={508}
                alt="user_Img"
              />
              <Image
                className="im2"
                src="/image 19.png"
                width={358}
                height={358}
                alt="user_Img"
              />
            </div>
            {/* <label className="inputFile">
              Выберете фото
              <input type="file" name="file" />
            </label> */}
          </div>
          <div className="userProfileInfo">
            <div className="userProfileInfoItems">
              <div className="userProfileInfoItem">
                <h2>ФИО</h2>
                <div className="userProfileInfoItemBlock">
                  <p>111</p>
                </div>
              </div>
              <div className="userProfileInfoItem">
                <h2>Телефон</h2>
                <div className="userProfileInfoItemBlock">
                  <p>111</p>
                </div>
              </div>
              <div className="userProfileInfoItem">
                <h2>E-mail</h2>
                <div className="userProfileInfoItemBlock">
                  <p>111</p>
                </div>
              </div>
              <div className="userProfileInfoItem">
                <h2>Адрес</h2>
                <div className="userProfileInfoItemBlock">
                  <p>111</p>
                </div>
              </div>
              <div className="userProfileInfoItemLink">
                <div className="userProfileInfoItemBlock1">
                  <Link href="https://web.telegram.org/k/#@ZHKH_online_hakaton_bot">
                    Отправить сообщение муниципальным службам
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
