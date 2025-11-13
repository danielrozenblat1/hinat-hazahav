import React, { useState, useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import styles from './Timeline.module.css';
import Button from '../button/Button';
import learn from "../../icons/wired-outline-958-faq-frequent-ask-questions-hover-slide (1).json"
import faith from "../../icons/wired-outline-2354-cookies-hover-pinch.json"
import again from "../../icons/wired-outline-2209-dress-hover-rack.json"
import keep from "../../icons/wired-outline-1871-red-carpet-hover-pinch (2).json"

export default function ScrollTimeline() {
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef(null);
  const playerRefs = useRef([]);

  const items = [
    {
      icon: again,
      title: "פגישת היכרות ומדידות",
      description:
        "אחרי שסגרנו את האירוע, אנחנו קובעים יום מדידות מיוחד. הזוג מקבלים 3 הופעות מושלמות, האמהות 2 הופעות מרהיבות, וכל האורחים באולם מקבלים תלבושות מעוצבות. זה הרגע שבו הכל מתחיל להתגבש ואת רואה את החלום שלך מתעורר לחיים.",
    },
    {
      icon: learn,
      title: "תמיכה וליווי 24/7",
      description:
        "מרגע ההיכרות ועד ליום האירוע ואחריו - אני כאן בשבילך! זמינה לכל שאלה, חשש והתייעצות. את לא לבד בתהליך, אני דואגת לכל פרט קטן כדי שתוכלי להישאר רגועה וליהנות מהתקופה המיוחדת הזו ללא לחצים מיותרים.",
    },
    {
      icon: keep,
      title: "יום האירוע המושלם",
      description:
        "הגיע היום הגדול! אני מגיעה לאולם עם הצוות, מביאה את כל הציוד והתפאורה, מנחה את טקס החינה עם מלא אנרגיות ושמחה, ודואגת שכל רגע יהיה מושלם. את רק נהנית מהחגיגה בזמן שאני דואגת שהכל יתנהל בצורה החלקה ביותר!",
    },
    // {
    //   icon: keep,
    //   title: "זכרונות לנצח",
    //   description:
    //     "האירוע הסתיים אבל הזכרונות נשארים! אני ממשיכה להיות זמינה גם אחרי האירוע לכל שאלה. קיבלת את התלבושות המושלמות, את העוגיות הטעימות, את התפאורה המרהיבה ובעיקר - חוויה בלתי נשכחת שתישאר איתך לכל החיים. כל זה במקום אחד!",
    // },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const element = timelineRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementTop = rect.top;
      const elementHeight = rect.height;

      const startPoint = windowHeight * 0.7;
      const endPoint = windowHeight * 0.3;

      if (elementTop > startPoint) {
        setProgress(0);
      } else if (elementTop + elementHeight < endPoint) {
        setProgress(100);
      } else {
        const scrolled = startPoint - elementTop;
        const total = elementHeight + (startPoint - endPoint);
        const percentage = (scrolled / total) * 100;
        setProgress(Math.min(Math.max(percentage, 0), 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleComplete = (index) => {
    setTimeout(() => {
      playerRefs.current[index]?.playFromBeginning();
    }, 2500);
  };

  useEffect(() => {
    playerRefs.current.forEach((ref) => {
      ref?.playFromBeginning();
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div ref={timelineRef} className={styles.timeline}>
          <div className={styles.lineBackground} />
          <div className={styles.lineProgress} style={{ height: `${progress}%` }} />

          <div className={styles.itemsContainer}>
            {items.map((item, index) => {
              const itemProgress = Math.min(Math.max((progress - index * 25) * 4, 0), 100);
              const isActive = itemProgress > 0;

              return (
                <div key={index} className={styles.item}>
                  <div className={`${styles.circle} ${isActive ? styles.circleActive : ''}`}>
                    <div className={styles.iconWrapper}>
                      <Player
                        icon={item.icon}
                        ref={(el) => (playerRefs.current[index] = el)}
                        size="100%"
                        colorize="black"
                        onComplete={() => handleComplete(index)}
                      />
                    </div>
                    {isActive && itemProgress > 50 && <div className={styles.pulse} />}
                  </div>

                  <div
                    className={`${styles.content} ${isActive ? styles.contentActive : ''}`}
                    style={{
                      transform: `translateX(${isActive ? 0 : 40}px)`,
                      opacity: isActive ? 1 : 0.25,
                    }}
                  >
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}