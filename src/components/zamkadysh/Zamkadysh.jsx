import React, { useState, useEffect } from 'react';
import styles from './zamkadysh.module.css';

const Zamkadysh = () => {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowContent(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const carouselImages = [
    'https://via.placeholder.com/1920x1080/333/ccc?text=Zamkadysh.shop',
    'https://via.placeholder.com/1920x1080/555/eee?text=Premium+Products',
    'https://via.placeholder.com/1920x1080/777/fff?text=Exclusive+Collection'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className={styles.app}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>ZAMKADYSH</div>
        <nav className={styles.nav}>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#cart">Cart (0)</a>
        </nav>
      </header>

      {/* Fullscreen Carousel */}
      <section className={styles.fullscreenCarousel}>
        <div className={styles.carouselContainer}>
          {carouselImages.map((image, index) => (
            <div 
              key={index}
              className={`${styles.carouselSlide} ${index === currentImageIndex ? styles.active : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            >
              {index === currentImageIndex && (
                <div className={styles.carouselContent}>
                  <h1>ZAMKADYSH.SHOP</h1>
                  <p>Discover exclusive products</p>
                  <button className={styles.shopNow}>SHOP NOW</button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className={styles.carouselDots}>
          {carouselImages.map((_, index) => (
            <span 
              key={index}
              className={`${styles.dot} ${index === currentImageIndex ? styles.active : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className={`${styles.mainContent} ${showContent ? styles.visible : ''}`}>
        <section id="products" className={styles.section}>
          <h2>Our Products</h2>
          <div className={styles.productGrid}>
            <div className={styles.productCard}>Product 1</div>
            <div className={styles.productCard}>Product 2</div>
            <div className={styles.productCard}>Product 3</div>
            <div className={styles.productCard}>Product 4</div>
          </div>
        </section>
        
        <section id="about" className={styles.section}>
          <h2>About Us</h2>
          <p>Welcome to Zamkadysh.shop - your premium shopping destination.</p>
        </section>
        
        <section id="contact" className={styles.section}>
          <h2>Contact Us</h2>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>ZAMKADYSH.SHOP</h3>
            <p>Premium products for everyone</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Links</h4>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="#">Instagram</a>
              <a href="#">Telegram</a>
              <a href="#">VK</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          &copy; {new Date().getFullYear()} Zamkadysh.shop - All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Zamkadysh;