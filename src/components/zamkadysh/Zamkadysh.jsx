import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from 'react';
import styles from "./zamkadysh.module.css";
import goodsList from "./goods.json";

const Zamkadysh = () => {
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const [goods, setGoods] = useState([]);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
    setGoods(Object.values(goodsList));
  }, []);

  
  return (
    <div className={styles.container}>
      <header>
        <img
          src="./zamkadysh-logo.png"
          alt="bebra"
          className={styles.headerLogo}
        />
        <div className={styles.headerCategories}>
          <h2 className={styles.headerCategory} onClick={() => scrollTo(targetRef1)} style={{ cursor: 'pointer' }}>Услуги</h2>
          <h2 className={styles.headerCategory} onClick={() => scrollTo(targetRef2)} style={{ cursor: 'pointer' }}>Товары</h2>
          <h2 className={styles.headerCategory} onClick={() => scrollTo(targetRef3)} style={{ cursor: 'pointer' }}>О нас</h2>
        </div>
      </header>
      <div className={styles.goods} ref={targetRef2}>
        {goods.map((el, index) => (
          <div className={styles.goodsCard} key={index}>
            <img src={`goods/${el.id}.png`} alt="" className={styles.goodsCardImg}/>
            <h2 className={styles.goodsCardTitle}>{el.title}</h2>
            <p className={styles.goodsCardDescription}>{el.description.length > 256 ? el.description.slice(0, 256) + '...' : el.description}</p>
            <a href={el.url} download={el.url} className={styles.goodsCardDownloadButton}>Скачать</a>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Zamkadysh;
