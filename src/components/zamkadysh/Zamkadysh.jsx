import React, { useEffect, useState, useRef } from "react";
import styles from "./zamkadysh.module.css";
import goodsList from "./goods.json";
import servicesList from "./services.json";
import helpList from "./help.json";
import LicenseModal from "./LicenseModal.jsx";

const Zamkadysh = () => {
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const [goods, setGoods] = useState([]);
  const [services, setServices] = useState([]);
  const [helpItems, setHelpItems] = useState([]);
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showLicenseModal, setShowLicenseModal] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    setGoods(Object.values(goodsList));
    setServices(Object.values(servicesList));
    setHelpItems(Object.values(helpList));

    const visitedBefore = localStorage.getItem("visitedBefore");
    if (!visitedBefore) {
      setShowLicenseModal(true);
      localStorage.setItem("visitedBefore", "true");
      setIsFirstVisit(true);
    } else {
      setIsFirstVisit(false);
    }
  }, []);

  const handleShowFullDescription = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const openLicenseModal = () => {
    setShowLicenseModal(true);
  };

  const handleCloseLicenseModal = () => {
    setShowLicenseModal(false);
  };

  return (
    <div className={styles.container}>
      <header>
        <img
          src="zamkadysh-logo.svg"
          alt="Логотип"
          className={styles.headerLogo}
        />
        <div className={styles.headerCategories}>
          <h2
            className={styles.headerCategory}
            onClick={() => scrollTo(targetRef1)}
            style={{ cursor: "pointer" }}
          >
            Услуги
          </h2>
          <h2
            className={styles.headerCategory}
            onClick={() => scrollTo(targetRef2)}
            style={{ cursor: "pointer" }}
          >
            Товары
          </h2>
          <h2
            className={styles.headerCategory}
            onClick={() => scrollTo(targetRef3)}
            style={{ cursor: "pointer" }}
          >
            Помощь
          </h2>
        </div>
      </header>

      {/* Услуги */}
      <div className={styles.servicesContainer} ref={targetRef1}>
        <h2 className={styles.servicesTitle}>Услуги</h2>
        <div className={styles.cardsContainer}>
          {services.map((service, index) => (
            <div className={styles.serviceCard} key={index}>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                <p className={styles.serviceCardDescription}>
                  {service.description}
                </p>
              </div>
              <button
                className={styles.serviceCardArrow}
                onClick={() =>
                  handleShowFullDescription({
                    title: service.title,
                    description: service.fullDescription || service.description,
                  })
                }
              >
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Товары */}
      <div className={styles.goodsContainer}>
        <h2 className={styles.goodsTitle}>Товары</h2>
        <div className={styles.goods} ref={targetRef2}>
          {goods.map((el, index) => (
            <div className={styles.goodsCard} key={index}>
              <img
                src={`goods/${el.id}.png`}
                alt={el.title}
                className={styles.goodsCardImg}
              />
              <h2 className={styles.goodsCardTitle}>{el.title}</h2>
              <p className={styles.goodsCardDescription}>
                {el.description.length > 600
                  ? el.description.slice(0, 600) + "..."
                  : el.description}
              </p>
              <div className={styles.goodsCardButtons}>
                <a
                  href={el.url}
                  download={el.url}
                  className={styles.goodsCardDownloadButton}
                >
                  Скачать
                </a>
                {el.description.length > 600 && (
                  <button
                    className={styles.goodsCardReadMore}
                    onClick={() => handleShowFullDescription(el)}
                  >
                    Подробнее
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Помощь */}
      <div className={styles.helpContainer} ref={targetRef3}>
        <h2 className={styles.helpTitle}>Помощь</h2>
        <div className={styles.cardsContainer}>
          {helpItems.map((help, index) => (
            <div className={styles.serviceCard} key={index}>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>{help.title}</h3>
                <p className={styles.serviceCardDescription}>
                  {help.description}
                </p>
              </div>
              <button
                className={styles.serviceCardArrow}
                onClick={() =>
                  handleShowFullDescription({
                    title: help.title,
                    description: help.fullDescription || help.description,
                  })
                }
              >
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalCloseButton}
              onClick={handleCloseModal}
            >
              ×
            </button>
            <h2 className={styles.modalTitle}>{modalContent?.title}</h2>
            <p className={styles.modalDescription}>
              {modalContent?.description.split("\n").map((paragraph, i) => (
                <React.Fragment key={i}>
                  {paragraph}
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      )}

      {showLicenseModal && (
        <LicenseModal
          isFirstVisit={isFirstVisit}
          onClose={handleCloseLicenseModal} // Передаем функцию закрытия
        />
      )}

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2025 Замкадыш. Все права защищены.</p>
          <div className={styles.footerLinks}>
            <button className={styles.licenseButton} onClick={openLicenseModal}>
              Лицензионное соглашение
            </button>
            <a href="/privacy" className={styles.footerLink}>
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Zamkadysh;
