import Image from "next/image";
import Link from "next/link";
import styles from "./news.module.css";

export default function News() {
  return (
    <main className={styles.news}>
      <div className={styles.container}>
        <div className={styles.newsSearch}>
          <input type="text" placeholder="поиск" />
        </div>
        <div className={styles.newsFilters}>
          <div className={styles.newsFiltersContent}>
            <div className={styles.newsFilter}>
              <h2>Фильтры</h2>
              <div className={styles.newsFilterItem}>
                <Link href="#">Газ</Link>
                <Link href="#">Вода</Link>
                <Link href="#">Свет</Link>
                <Link href="#">Отопление</Link>
                <Link href="#">Улица</Link>
                <Link href="#">Другое</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsHading}>
          <h2>НОВОСТИ</h2>
        </div>
        <div className={styles.newsContentBlock}>
          <div className={styles.newsContentItems}>
            <div className={styles.newsContentItemText}>
              <h2>Уточнены правила реализации программ газификации ЖКХ</h2>
              <p>
                С 1 сентября 2024 года вносятся изменения в правила разработки и
                реализации межрегиональных и региональных программ газификации
                ЖКХ, промышленных и иных организаций.
              </p>
            </div>
            <div className={styles.newsContentItemImg}>
              <Image src="/Rectangle 111.svg" width={379} height={308} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
