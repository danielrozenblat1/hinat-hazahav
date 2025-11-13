import Works from "../components/recommends/Works"
import RecommendsScreen from "./RecommendsScreen"
import styles from "./ThirdScreen.module.css"
const ThirdScreen=()=>{

    return <>
     <div className={styles.headerSection} id="מה אומרים עלינו">
     <div className={styles.title}>
            מה  <span className={styles.goldText}> אומרים עלינו</span>
          </div>
          </div>
   <Works/>
    </>
}
export default ThirdScreen