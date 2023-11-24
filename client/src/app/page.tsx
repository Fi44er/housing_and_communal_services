import Image from "next/image";
import Header from "./components/header/Header";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.conatiner}>
        <div className={styles.homeContent}>
          <div>
            <h2>
              Мы заботимся <br /> о комфорте вашего дома!
            </h2>
          </div>
          <div>
            <Image
              className={styles.image1}
              src="/image 5.png"
              width={776}
              height={539}
              alt="image Home"
            />
            <Image
              className={styles.image2}
              src="/image 5.png"
              width={576}
              height={239}
              alt="image Home"
            />
          </div>
        </div>
      </div>
      <div className={styles.conatiner}>
        <div className={styles.homeContentиBottom}>
          <div>
            <Image
              className={styles.image1}
              src="/image 8.png"
              width={776}
              height={539}
              alt="image Home"
            />
            <Image
              className={styles.image3}
              src="/image 8.png"
              width={576}
              height={239}
              alt="image Home"
            />
          </div>
          <div className={styles.homeContentиBottomBlock}>
            <p>
              Наш сервис позволяет гражданам легко и эффективно
              взаимодействовать с ЖКХ, а так же с муниципальными службами для
              более прозрачности в области информирования граждан. Население
              всегда должно быть осведомлено о действиях и решениях
              муниципальной власти, а также иметь возможность выражать свое
              мнение по поводу этой деятельности
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
