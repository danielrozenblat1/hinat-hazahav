import { useState, useEffect, useRef } from 'react';
import styles from './FloatButton.module.css';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isStatic, setIsStatic] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // הצג את הכפתור רק אחרי 200px גלילה
      if (scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // בדוק אם הגענו לתחתית הדף (עם מרווח של 100px)
      if (scrollY + windowHeight >= documentHeight - 100) {
        setIsStatic(true);
      } else {
        setIsStatic(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // בדיקה ראשונית

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const phoneNumber = '972507277178';
    const message = 'היי חינת הזהב הגעתי מהדף שלכם, אשמח לשמוע עוד על..';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      ref={buttonRef}
      className={`${styles.floatingButton} ${isVisible ? styles.visible : ''} ${isStatic ? styles.static : ''}`}
      onClick={handleClick}
    >
      <div className={styles.shine}></div>
      <span className={styles.buttonText}>
    בואו נדבר על האירוע שלי!
      </span>
    </div>
  );
};

export default FloatingButton;