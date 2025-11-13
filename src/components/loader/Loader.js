import React from 'react';
import styles from './Loader.module.css';

const Loader = ({ size = '2.8rem', speed = '0.9s' }) => {
  const loaderStyle = {
    '--uib-size': size,
    '--uib-speed': speed,
  };

  return <>
  <div className={styles.background}>
    <div className={styles.dotSpinner} style={loaderStyle}>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
    </div>
    </div>
</>
};

export default Loader;