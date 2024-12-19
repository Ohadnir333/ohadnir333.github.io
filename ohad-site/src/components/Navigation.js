import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router"
import styles from './Navigation.module.css'

function Navigation() {
  const firstElementRef = useRef(null);
  const [spacerWidth, setSpacerWidth] = useState(0);
  let user = "ohadnir33"
  let domain = "gmail.com"

  useEffect(() => {
    const updateSpacerWidth = () => {
      if (firstElementRef.current) {
        // Measure the width of the first element
        const width = firstElementRef.current.offsetWidth;
        setSpacerWidth(width);
      }
    };

    // Measure the size on mount
    updateSpacerWidth();

    // Optional: Recalculate on window resize for responsive layouts
    window.addEventListener("resize", updateSpacerWidth);
    return () => {
      window.removeEventListener("resize", updateSpacerWidth);
    };
  }, []);

    return (
        <div className={styles.contain}>
            <div className={styles.navFlex} ref={firstElementRef}>
                <Link className={styles.navLinks} to="/">VIDEO</Link>
                <Link className={styles.navLinks} to="/stills">STILLS</Link>
                <Link className={styles.navLinks} to="/about">ABOUT</Link>
            </div>
            <img className={styles.logo} src={`${process.env.PUBLIC_URL}/ON-black-icon.png`}/>
            <div className={styles.socials} style={{ width: `${spacerWidth}px` }}>
                <a href="https://www.instagram.com/ohadnir1/">
                    <img src={`${process.env.PUBLIC_URL}/instagram.svg`}/>
                </a>
                <a href="https://www.youtube.com/@OhadnirProductions">
                    <img src={`${process.env.PUBLIC_URL}/youtube.svg`}/>
                </a>
                <a href={`mailto:${user}@${domain}`}>
                    <img src={`${process.env.PUBLIC_URL}/email.svg`}/>
                </a>
            </div>
        </div>
    )
}

export default Navigation;