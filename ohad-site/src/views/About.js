import React from 'react';
import style from './About.module.css'

function About() {
  let user = "ohadnir33";
  let domain = "gmail.com";

  // The array must be closed with ]; and placed inside the function
  const logos = [
    "ההתאחדות.jpg",
    "Artboard.jpg",
    "el tony.png",
    "FN Planetary.png",
    "JNF_logo.jpg",
    "pinkbike-logo.jpg",
    "pivot.jpg",
    "title_logo.png",
    "troyleedisighn.png",
    "BW-Bike-BigWhite-Logo-stacked-b&w.png",
    "velosolutions.png"
  ]; 

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      
      {/* --- SCROLLING LOGOS SECTION --- */}
      <div className={style.logoSlider}>
        <div className={style.logoTrack}>
          {logos.map((logo, index) => (
            <img key={`first-${index}`} src={`${process.env.PUBLIC_URL}/${logo}`} alt="Client Logo" className={style.clientLogo} />
          ))}
          {logos.map((logo, index) => (
            <img key={`second-${index}`} src={`${process.env.PUBLIC_URL}/${logo}`} alt="Client Logo" className={style.clientLogo} />
          ))}
        </div>
      </div>
      {/* ----------------------------------- */}

      <div className={style.contain}>
        <div className={style.collage}>
          <img className={style.img1} src={`${process.env.PUBLIC_URL}/aboutMe1.jpg`} alt="Ohad portrait 1" />
          <img className={style.img2} src={`${process.env.PUBLIC_URL}/aboutMe2.jpg`} alt="Ohad portrait 2" />
        </div>
        <div className={style.bio}>
          <h2>About Me</h2>
          <p>I'm Ohad, a 33-year-old filmmaker with a passion for outdoor, sports, and bike-related work. I specialize in full production services, offering everything from concept to the final product.</p>
          <p>When you choose to work with me, you're placing your trust in my commitment to delivering the best possible product to help promote your company or product. I see every project as a collaboration, and I dedicate myself to ensuring your vision is brought to life in a way that resonates with your audience.</p>
          <p>I'm deeply passionate about documentary work and believe in the power of storytelling, especially in the world of sports. I think education within the sport can bring immense value, and sharing the stories behind the people who push themselves to achieve their goals can inspire others to do the same.</p>
          <p>Let’s work together to create something that not only showcases your business but tells a story worth sharing.</p>
          <a className={style.CTA} href={`mailto:${user}@${domain}`}>Let’s Build Your Vision – Email Me</a>
        </div>
      </div>
      
    </div>
  );
}

export default About;