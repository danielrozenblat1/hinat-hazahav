import React, { useState, useRef, useEffect } from 'react';
import styles from './Sound.module.css';
import music from "../music/Song.mp3";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const tryPlay = async (unmute = false) => {
      try {
        if (!audioRef.current) return;
        audioRef.current.volume = 0.7;
        audioRef.current.muted = !unmute;
        await audioRef.current.play();
        if (unmute) audioRef.current.muted = false;
        setIsPlaying(true);
        return true;
      } catch {
        return false;
      }
    };

    const handleFirstInteraction = async () => {
      const success = await tryPlay(true);
      if (success) {
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
      }
    };

    // ניסיון ראשון: ניגון מושתק
    tryPlay(false).then(success => {
      if (!success) {
        // אם נחסם, נחכה לאינטראקציה
        document.addEventListener('click', handleFirstInteraction);
        document.addEventListener('touchstart', handleFirstInteraction);
        document.addEventListener('keydown', handleFirstInteraction);
      } else {
        // ביטול השתקה אחרי שניגן
        setTimeout(() => {
          if (audioRef.current) audioRef.current.muted = false;
        }, 500);
      }
    });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={music}
        loop
        preload="auto"
        muted
      />
      
      <button 
        className={`${styles.floatingPlayer} ${isPlaying ? styles.playing : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? 'השהה מוזיקה' : 'נגן מוזיקה'}
      >
        {isPlaying ? (
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="4" width="4" height="16" rx="1" fill="white"/>
            <rect x="14" y="4" width="4" height="16" rx="1" fill="white"/>
          </svg>
        ) : (
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5.14v13.72L19 12L8 5.14z" fill="white"/>
          </svg>
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
