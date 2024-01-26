import React from 'react';
import IMG1 from "../../assets/schoolui.png";
import Baydin from ".../../assets/baydinpj.png";
import "./portfolio.css";

const Portfolio = () => {
    const soloProjects = [
        {
            id: 1,
            title: "Eduford",
            img: IMG1,
            description:
                "It is the website ui for school project",
            technologies: "HTML | CSS",
            link: "https://eduford-eta.vercel.app/",
        },
        {
            id: 1,
            title: "Baydin",
            img: Baydin,
            description:
                "Baydin project fetch with api",
            technologies: "React",
            link: "https://baydin-ten.vercel.app/",
        }
    ];

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {soloProjects.map((pro) => (
                    <article className="portfolio__item" key={pro.id}>
                        <div className="portfolio__item-image">
                            <img src={pro.img} alt={pro.title} />
                        </div>
                        <div className="portfolio__item-content">
                            <h3>{pro.title}</h3>
                            <p>{pro.description}</p>
                            <p>{pro.technologies}</p>
                        </div>
                        <div className="portfolio__item-cta">
                            <a
                                href={pro.link}
                                target="_blank"
                                className="btn btn-primary"
                                rel="noreferrer"
                            >
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;