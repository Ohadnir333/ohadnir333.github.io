import React from 'react';
import style from './About.module.css'

function About() {
    let user = "ohadnir33"
    let domain = "gmail.com"
    return (
        <div className={style.contain}>
            <div className={style.collage}>
                <img className={style.img1} src={`${process.env.PUBLIC_URL}/aboutMe1.jpg`}></img>
                <img className={style.img2} src={`${process.env.PUBLIC_URL}/aboutMe2.jpg`}></img>
            </div>
            <div className={style.bio}>
                <h2>About Me</h2>
                <p>I'm Ohad, a 32-year-old filmmaker based in Vancouver, British Columbia, Canada, with a passion for outdoor, sports, and bike-related work. I specialize in full production services, offering everything from concept to the final product.</p>

                <p>When you choose to work with me, you're placing your trust in my commitment to delivering the best possible product to help promote your company or product. I see every project as a collaboration, and I dedicate myself to ensuring your vision is brought to life in a way that resonates with your audience.</p>

                <p>I'm deeply passionate about documentary work and believe in the power of storytelling, especially in the world of sports. I think education within the sport can bring immense value, and sharing the stories behind the people who push themselves to achieve their goals can inspire others to do the same.</p>

                <p>Let’s work together to create something that not only showcases your business but tells a story worth sharing.</p>
                
                <a className={style.CTA} href={`mailto:${user}@${domain}`}>Let’s Build Your Vision – Email Me</a>
            </div>
        </div>
    )
}

export default About;