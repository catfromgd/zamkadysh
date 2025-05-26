import React from "react";
import { useState } from "react";
import styles from "./zamkadysh.module.css";
import goodsList from "./goods.json"

const Zamkadysh = () => {
  // const [goods, setGoods] = useState({})

  // setGoods(goodsList)
  return (
    <div className={styles.container}>
      <header>
        <img
          src="src/assets/zamkadyshLogo.png"
          alt="bebra"
          className={styles.headerLogo}
        />
        <div className={styles.headerCategories}>
          <h2 className={styles.headerCategory}>Товары</h2>
          <h2 className={styles.headerCategory}>О нас</h2>
        </div>
      </header>
      <div className={styles.goods}>
        {/* {
          goods.map(el => {
            <div className={styles.goodsCard}>
              <h2>{el.title}</h2>
              <p>{el.description}</p>
              <a href={el.url} download={el.url}>Скачать</a>
            </div>
          })
        } */}
      </div>
    </div>
  );
};

export default Zamkadysh;
