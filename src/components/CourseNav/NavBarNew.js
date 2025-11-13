import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './NavBarNew.module.css';
import logo from "../../images/חינת הזהב לוגו.png";

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
        document.body.style.overflow = 'auto';
      }, 500);
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
      document.body.style.overflow = 'auto';
    }, 500);
  };

  const openWhatsApp = () => {
    const phoneNumber = '972507277178';
    const message = 'היי חינת הזהב, אשמח לקבל עוד פרטים לגבי האירוע שלי';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    closeMenu();
  };

  const scrollToSection = (sectionId) => {
    closeMenu();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100; // התאמה לגובה ה-navbar
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 600); // ממתין לסגירת התפריט לפני הגלילה
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`}>
        <div className={styles.navbarInner}>
          <div className={styles.logo}>
            <img src={logo} alt="לוגו" />
          </div>
          <button className={styles.menuButton} onClick={toggleMenu}>
            <div className={styles.buttonContent}>
              <span className={styles.buttonText}>תפריט</span>
            </div>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={`${styles.menuOverlay} ${isClosing ? styles.closing : ''}`} onClick={toggleMenu}>
          <div className={styles.menuModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.menuHeader}>
              <button className={styles.menuCloseButton} onClick={toggleMenu}>
                <FaTimes />
              </button>
              <div className={styles.menuLogo}>
                <img src={logo} alt="לוגו" />
              </div>
            </div>
            
            <div className={styles.menuContent}>
              <button 
                className={styles.menuLink} 
                onClick={() => scrollToSection('מי אנחנו')}
              >
                <span>מי אנחנו</span>
              </button>
              
              <button 
                className={styles.menuLink} 
                onClick={() => scrollToSection('מה אומרים עלינו')}
              >
                <span>מה אומרים עלינו</span>
              </button>
              
              <button 
                className={styles.menuLink} 
                onClick={() => scrollToSection('מה תקבלי בחינה')}
              >
                <span>מה תוכלי לקבל בחינה</span>
              </button>
              
              <button 
                className={styles.menuLink} 
                onClick={() => scrollToSection('מפורסמים')}
              >
                <span>מפורסמים בחינת הזהב</span>
              </button>
              
              <button 
                className={`${styles.menuLink} ${styles.contactButton}`} 
                onClick={openWhatsApp}
              >
                <span>ליצירת קשר מיידי איתנו</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBarNew;