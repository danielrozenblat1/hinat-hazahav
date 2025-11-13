import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import ilanitPhoto from "../../images/אילנית ראובן מי אני.png";
import ScrollReveal from 'scrollreveal';

const AboutMe = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const sr = ScrollReveal({
        duration: 900,
        delay: 120,
        opacity: 0,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        viewFactor: 0.18
      });

      sr.reveal(`.${styles.revealItem}`, {
        origin: 'bottom',
        distance: '18px',
        interval: 90
      });
    }

    return () => {
      try {
        if (ScrollReveal().isInitialized) {
          ScrollReveal().destroy();
        }
      } catch (e) {}
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '972507277178';
    const message = 'היי חינת הזהב הגעתי מהדף שלכם, אשמח לשמוע עוד על..';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section ref={containerRef} className={styles.section} id="מי אנחנו">
      <div className={styles.container}>
        <div className={`${styles.imageWrapper} ${styles.revealItem}`}>
          <img src={ilanitPhoto} alt="אילנית פור-ראובן" className={styles.image} />
        </div>

        <div className={`${styles.content} ${styles.revealItem}`}>
          <h2 className={styles.mainTitle}>נעים להכיר, אילנית פור-ראובן</h2>

          <div className={styles.quoteContainer}>
            <p className={styles.quote}>
              "החזון שלי הוא להפוך את החינה מחגיגה מרוקאית יפה לאירוע מלכותי, מרגש ומלא נשמה - כזה שמחזיר את הקסם של מרוקו של פעם."
            </p>
          </div>

          <div className={styles.textBlock}>
            <p className={styles.paragraph}>
              אני אילנית פור-ראובן, מפיקת אירועים ומעצבת שמלות חינה, ומנהלת את חברת <strong>חינת הזהב</strong>.  
              כבר למעלה מ-18 שנה אני חיה את הרגעים האלה - כשהמסורת פוגשת את החלום.  
              כשהקולות, הצבעים והריחות מתמזגים לאירוע שאין שני לו.
            </p>

            <div className={styles.divider}></div>

            <p className={styles.paragraph}>
              כשהקמתי את חינת הזהב, רציתי לקחת את טקס החינה המסורתי ולתת לו מראה מלכותי.  
              לשמר את השורשים, אך לעצב אותם ברמת יוקרה גבוהה, עם תשומת לב לכל פרט - מהבד הראשון ועד האבן הקטנה ביותר.  
              חלק מהבדים והתכשיטים אני מייבאת בעצמי ממרוקו, כדי לשמור על אותנטיות שאין לה תחליף.  
              בכל שנה אני מציגה קולקציה חדשה של תלבושות בעיצובים ייחודיים - לחתן, לכלה, למשפחה, לאורחים ואפילו לילדים.  
              גם לקהל הדתי אני מציעה תלבושות צנועות ומרשימות, בלי לוותר על עושר ואלגנטיות.
            </p>

            <div className={styles.divider}></div>

            <p className={styles.paragraph}>
              אני מאמינה שכל אירוע צריך להרגיש כמו סיפור שמתרחש בעולם אחר.  
              לכן אני יוצרת חוויה כוללת: אוהלים מעוצבים, כרכרות, אפריונים, פינות ישיבה אותנטיות, עוגיות מרוקאיות, מופלטה וספינג'.  
              כל פרט מתוכנן בקפידה כדי להפוך את האולם ל<strong>ממלכה קטנה ממרוקו</strong>, מלאה באור, זהב ואדום עמוק.
            </p>

            <div className={styles.divider}></div>

            <p className={styles.paragraph}>
              לצד החינות, אני מפיקה גם טקסי בר מצווה בסגנון הר סיני - טקסים מרגשים שמחברים את הילד לזהות ולשורשים שלו,  
              ונותנים תחושת משמעות וגאווה אמיתית.
            </p>

            <div className={styles.divider}></div>

            <p className={styles.paragraph}>
              במהלך השנים הפקתי אירועים לחברות גדולות, לסלבס ולעיריות שאירחו במימונות שלהן אישי ציבור בכירים.  
              כל הפקה היא אתגר מרגש שמוכיח לי כל פעם מחדש כמה כוח יש לשילוב בין מקצועיות לאהבה אמיתית למסורת.
            </p>

            <div className={styles.divider}></div>

            <p className={styles.paragraph}>
              הסטודיו שלי הוא נקודת המפגש הראשונה עם החלום.  
              שם אני פוגשת את הזוגות, מתאימה את התלבושות, מדברת על הרעיונות, וביחד אנחנו מתחילים לתכנן את הערב שיהפוך לזיכרון של חיים שלמים.  
              אני מלווה אתכם אישית מהפגישה הראשונה ועד סוף האירוע, זמינה לכל פרט ודואגת שהכול יתנהל בשקט ובדיוק.
            </p>

            <div className={styles.divider}></div>

            <p className={styles.finalText}>
              בעיניי, חינה היא לא עוד אירוע.  
              זו חגיגה של שורשים, אהבה, צבע וקסם שמגיע מבפנים.  
              עם חינת הזהב, החינה שלך תהפוך לערב מלכותי, מרגש ובלתי נשכח.
            </p>
          </div>

          <button
            className={styles.ctaButton}
            onClick={handleWhatsAppClick}
          >
            <span className={styles.buttonIcon}>💫</span>
            החינה שלך מתחילה כאן
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;