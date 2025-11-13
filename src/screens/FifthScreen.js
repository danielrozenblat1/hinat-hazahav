import Works from "../components/recommends/Works"
import ScrollTimeline from "../components/Timeline/Timeline"

import styles from "./FifthScreen.module.css"
const FifthScreen=()=>{
  const openWhatsApp = () => {
    const phoneNumber = '972507277178'; // ללא סימנים מיוחדים
    const message = 'היי חינת הזהב, אשמח לקבל עוד פרטים לגבי האירוע שלי';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
    return <>
    <div className={styles.background}>
     <div className={styles.headerSection}>
     <div className={styles.title}>
            תהליך העבודה <span className={styles.goldText}> איתנו </span>
          </div>
      
          </div>
            <ScrollTimeline/>
             <div style={{paddingTop:"2%", paddingBottom:"2%"}}>  <button className={styles.ctaButton} onClick={openWhatsApp}>
          לחצי כאן ואנחנו מדברות על האירוע שלך
        </button>
          </div></div> 
  
    </>
}
export default FifthScreen