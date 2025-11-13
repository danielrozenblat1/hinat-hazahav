import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './SecondScreen.module.css';
// יש להחליף את הנתיב לרכיב האמיתי שלך
import IconTextComponent from '../components/can/Can';
// יש להחליף את הנתיב/מקור לאייקון האמיתי שלך
import camel from "../icons/wired-outline-1212-camel-hover-pinch.json"; 
import market from "../icons/wired-outline-481-shop-hover-pinch.json"
import event from "../icons/wired-outline-1871-red-carpet-hover-pinch (2).json"
import cookies from "../icons/wired-outline-2354-cookies-hover-pinch.json"
import confetti from "../icons/wired-outline-1103-confetti-hover-pinch.json"
import shoneesre from "../icons/wired-outline-2418-number-18-hover-draw.json"
import dress from "../icons/wired-outline-2209-dress-hover-rack.json"
import donut from "../icons/wired-outline-564-donut-hover-pinch.json"

gsap.registerPlugin(ScrollTrigger);

const features = [
    { title: "כניסה על גמל", text: "כניסה מיוחדת על גמל לחינה - רגע בלתי נשכח שישאיר את כולם עם פה פתוח", icon: camel },
    { title: "עוגיות מרוקאיות", text: "עוגיות מרוקאיות טריות ומושקעות - טעם אותנטי שמזכיר את הבית", icon: cookies },
    { title: "שוק פיצוחים", text: 'מבחר פיצוחים מיוחד - "שוק פיצוחים" מלא באווירה ובצבעים', icon: market },
    { title: "תלבושות מהודרות", text: "תלבושות מהודרות ומעוצבות - לכלה, לחתן, להורים ולכל האורחים", icon: dress },
    { title: "תפאורה מרהיבה", text: "תפאורה עשירה ומרהיבה - עיצוב שהופך את האולם לארמון מרוקאי", icon: confetti },
    { title: "מופלטות וספינג", text: "מופלטות וספינג מעוצבים - פינוקים מתוקים שמוסיפים קסם לאירוע", icon: donut },
    { title: "ויטרינות ושולחנות מעוצבים", text: "ויטרינות מרהיבות - תצוגה מושקעת שמעלה את רמת האירוע", icon: camel },
    { title: "הנחיית טקס", text: "הנחיית טקס מקצועית - אני מנחה את הערב ודואגת שהכל יזרום חלק", icon: event },
    { title: "18 שנות ניסיון בתחום האירועים", text: "18 שנות ניסיון בתחום - מאות חינות מוצלחות ולדקוחות מרוצים", icon: shoneesre },
    { title: "ליווי אישי 24/7", text: "ליווי אישי 24/7 - אני כאן בשבילך מרגע ההזמנה ועד אחרי האירוע", icon: camel }
];

const SecondScreen = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);
  const summaryRef = useRef(null);
  const ctaRef = useRef(null);
  const connectingSvgRef = useRef(null);
  const [pathSegments, setPathSegments] = useState([]);
  const segmentsRef = useRef([]);

  // פונקציית עזר ליצירת נתיב מעוקל (Bezier Cubic)
  const createCurvedPath = (x1, y1, x2, y2, isRightStart) => {
    // קביעת נקודות בקרה ליצירת קימור נגד כיוון הפריט
    const offset = 50;
    const cx1 = isRightStart ? x1 - offset : x1 + offset;
    const cx2 = isRightStart ? x2 - offset : x2 + offset;
    
    // קביעת נקודות בקרה אנכיות
    const cy1 = y1 + (y2 - y1) * 0.3; 
    const cy2 = y2 - (y2 - y1) * 0.3;
    
    return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
  };

  // פונקציה לפתיחת WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = '972507277178'; // ללא סימנים מיוחדים
    const message = 'היי חינת הזהב, אשמח לקבל עוד פרטים לגבי האירוע שלי';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // useLayoutEffect לחישוב מיקומי ה-SVG אחרי שהרכיבים נטענו
  useLayoutEffect(() => {
    const calculatePaths = () => {
      if (!sectionRef.current) return;

      const pathContainer = sectionRef.current.querySelector(`.${styles.pathContainer}`);
      const svgEl = connectingSvgRef.current;
      
      // בדיקה שכל הפריטים נטענו
      if (itemsRef.current.filter(Boolean).length !== features.length) {
        return;
      }
      
      // הגדרת גובה ה-SVG כגובה של הקונטיינר המכיל את הפריטים
      if (svgEl && pathContainer) {
          svgEl.style.height = `${pathContainer.offsetHeight}px`;
          svgEl.setAttribute('viewBox', `0 0 800 ${pathContainer.offsetHeight}`);
      }

      const newSegments = [];
      if (!svgEl) return;

      itemsRef.current.forEach((item, index) => {
        // יש צורך בפריט הנוכחי וגם בפריט הבא כדי ליצור קטע שביל
        if (item && itemsRef.current[index + 1]) {
          const nextItem = itemsRef.current[index + 1];
          const itemRect = item.getBoundingClientRect();
          const nextRect = nextItem.getBoundingClientRect();

          // גובה גלילה נוכחי
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          // 1. קואורדינטות מרכז הקופסא הנוכחית (ביחס לראש ה-SVG)
          const currentIsRight = item.classList.contains(styles.featureRight);
          const currentCenterX = currentIsRight
            ? 700 // קצה ימין (ב-800px רוחב)
            : 100; // קצה שמאל
          
          // Y ביחס לראש ה-SVG - תיקון החישוב
          const svgTop = pathContainer.getBoundingClientRect().top + scrollTop;
          const currentCenterY = (itemRect.top + itemRect.bottom) / 2 + scrollTop - svgTop;

          // 2. קואורדינטות מרכז הקופסא הבאה
          const nextIsRight = nextItem.classList.contains(styles.featureRight);
          const nextCenterX = nextIsRight
            ? 700 
            : 100;
          const nextCenterY = (nextRect.top + nextRect.bottom) / 2 + scrollTop - svgTop;
          
          // 3. יצירת הנתיב המעוקל
          const d = createCurvedPath(currentCenterX, currentCenterY, nextCenterX, nextCenterY, currentIsRight);

          newSegments.push({ id: index, d });
        }
      });

      setPathSegments(newSegments);
    };

    // חישוב ראשוני עם דיליי קטן
    const initialTimer = setTimeout(calculatePaths, 100);
    
    // חישוב נוסף לאחר שהכל נטען
    const loadTimer = setTimeout(calculatePaths, 500);
    
    // כאשר המסך משנה גודל, צריך לחשב מחדש
    const handleResize = () => {
      calculatePaths();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', calculatePaths);
    
    return () => {
      clearTimeout(initialTimer);
      clearTimeout(loadTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', calculatePaths);
    };
  }, [features.length]); // מפעיל רק כאשר מספר הפריטים משתנה

  // useEffect ללוגיקת ה-GSAP והאנימציות
  useEffect(() => {
    if (pathSegments.length === 0) return;

    const ctx = gsap.context(() => {
      
      // אנימציה לכותרת (כניסה)
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", end: "top 40%", scrub: 1 },
          opacity: 1, y: 0, scale: 1, ease: "power2.out"
        }
      );

      // אנימציה לפריטים (כניסה מהצד ו-hover)
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        // אנימציית הופעה
        gsap.fromTo(
          item,
          { opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.7 },
          {
            scrollTrigger: { trigger: item, start: "top 90%", end: "top 60%", scrub: 1 },
            opacity: 1, x: 0, scale: 1, ease: "power3.out",
          }
        );

        // אנימציית hover
        item.addEventListener('mouseenter', () => gsap.to(item, { scale: 1.08, y: -10, duration: 0.4, ease: "power2.out" }));
        item.addEventListener('mouseleave', () => gsap.to(item, { scale: 1, y: 0, duration: 0.4, ease: "power2.out" }));
      });
      
      // *** אנימציה קריטית לשביל - קטע אחרי קטע ***
      segmentsRef.current.forEach((path, index) => {
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        const currentItem = itemsRef.current[index];
        const nextItem = itemsRef.current[index + 1];

        if (currentItem && nextItem) {
          gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: currentItem,
              // מתחיל כשהפריט הראשון מגיע למרכז המסך
              start: "top center", 
              endTrigger: nextItem,
              // נגמר כשהפריט השני מגיע למרכז המסך
              end: "top center", 
              scrub: 0.5, // ערך נמוך יותר לתגובה מהירה ורציפה לגלילה
              invalidateOnRefresh: true, // מאפשר עדכון אוטומטי בעת ריענון
            }
          });
        }
      });
      
      // אנימציה לסיכום ולכפתור
      gsap.fromTo(summaryRef.current, { opacity: 0, y: 60 }, { scrollTrigger: { trigger: summaryRef.current, start: "top 85%", end: "top 60%", scrub: 1 }, opacity: 1, y: 0, ease: "power2.out" });
      gsap.fromTo(ctaRef.current, { opacity: 0, scale: 0.8, y: 40 }, { scrollTrigger: { trigger: ctaRef.current, start: "top 90%", end: "top 70%", scrub: 1 }, opacity: 1, scale: 1, y: 0, ease: "back.out(1.7)" });

    }, sectionRef);

    return () => ctx.revert();
  }, [pathSegments]); // מפעיל שוב כאשר הנתיבים נוצרו

  return (
    <div ref={sectionRef} className={styles.secondScreen} id="מה תקבלי בחינה">
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.mainTitle}>
         מה תוכלו למצוא <span className={styles.goldText}>בחינת הזהב?</span>
        </h2>

        <div className={styles.pathContainer}>
          {/* שכבת ה-SVG המכילה את כל קטעי השביל המחברים */}
          {/* ה-viewBox מוגדר בצורה דינמית ב-useLayoutEffect */}
          <svg ref={connectingSvgRef} className={styles.connectingSvg} preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#c9a876" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#e8dcc8" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
            
            {/* יצירת קטעי השביל לפי החישובים */}
            {pathSegments.map((segment, index) => (
              <path
                key={segment.id}
                ref={el => segmentsRef.current[index] = el}
                className={styles.pathSegment}
                d={segment.d}
                stroke="url(#pathGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </svg>

          {/* אלמנטים לאורך השביל */}
          <div className={styles.featuresPath}>
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => itemsRef.current[index] = el}
                className={`${styles.featureItem} ${index % 2 === 0 ? styles.featureRight : styles.featureLeft}`}
              >
                <IconTextComponent 
                  title={feature.title}
                  text={feature.text} 
                  icon={feature.icon} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* תיאור סיכום */}
        <div ref={summaryRef} className={styles.summarySection}>
          <p className={styles.summaryText}>
            זה לא רק שירות של תלבושות או עוגיות, אלא <span className={styles.highlight}>חבילת חינה מלאה</span> שמטפלת בכל פרט, מהעיצוב ועד ההנחיה על הבמה.
          </p>
        </div>

        {/* כפתור קריאה לפעולה */}
        <button ref={ctaRef} className={styles.ctaButton} onClick={openWhatsApp}>
          לחצי כאן ואנחנו מדברות על האירוע שלך
        </button>
      </div>
    </div>
  );
};

export default SecondScreen;