import React from 'react';
import "./intro.css";
import img from "../../assets/Me.jpg";


const Intro = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={img} alt="Rasif Taghizade" />
                    </div>
                </div>
                <div className="about__content">
                    <p>
                        
                        Hi there! I'm Kyaw Kyaw Hein, a passionate Web developer. <br />

                        I am first year CS student and I have left university.<br />
                        I am passionate in web developing and I've made projects with React & Laravel. <br />
                        Whether you're a fellow software development looking to collaborate or someone interested in my work, I'd love to connect. <br />Feel free to browse through my portfolio, and don't hesitate to reach out—I'm always up for a chat over <a href="mailto:hhein6223@gmail.com">email</a>.
                        Let's create something awesome together!
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Intro;