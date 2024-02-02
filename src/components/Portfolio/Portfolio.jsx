import React from 'react';
import { Schoolui,Baydin,EcomLara,Survey,Autoverse,Chatgpt } from '../../assets/assets';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./portfolio.css";

const Portfolio = () => {
    const soloProjects = [
        {
            id: 1,
            title: "Survey Project",
            img: Survey,
            description: "",
            features: "User Authentication | Survey CRUD | Survey owner can add questions with various input in survey and you can add or view answers in survey.",
            technologies: "React | Laravel",
            link: null,
            githubLink: "https://github.com/KyawKyawHein/Survey_frontend"
        },
        {
            id: 2,
            title: "Ecommerce Website",
            img: EcomLara,
            description:"Laravel Ecommerce Website",
            features : "User Authentication | Category CRUD | Product CRUD | Admin Order Control | Admin Panel | Add to Cart ",
            technologies: "Laravel",
            link: null,
            githubLink: "https://github.com/KyawKyawHein/ecommerce_ "
        },
        {
            id: 3,
            title: "Autoverse",
            img: Autoverse,
            description:"Car project fetch with Rapid api",
            technologies: "React",
            link: "https://autoverse-gamma.vercel.app/",
            githubLink: "https://github.com/KyawKyawHein/Car_pj_"
        },
        {
            id: 4,
            title: "Chat gpt3 clone ui",
            img: Chatgpt,
            description:"Chat gpt3 clone ui based on design",
            technologies: "React",
            link: "https://chatgpt3-ui.vercel.app/",
            githubLink: "https://github.com/KyawKyawHein/Chatgpt3-clone-ui"
        },
        {
            id: 5,
            title: "Baydin",
            img: Baydin,
            description:"Baydin project fetch with api",
            technologies: "React",
            link: "https://baydin-ten.vercel.app/",
            githubLink: "https://github.com/KyawKyawHein/Baydin"
        },
        {
            id: 6,
            title: "Eduford",
            img: Schoolui,
            description:
                "It is the website ui for school project",
            technologies: "HTML | CSS",
            link: "https://eduford-eta.vercel.app/",
            githubLink: "https://github.com/KyawKyawHein/Eduford"
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
                            {
                                pro.features && <p><span className='portfolio-features-title'>Features</span> : <br /> {pro.features}</p>
                            }
                            <p>{pro.technologies}</p>
                        </div>
                        <div className="portfolio__item-cta">
                            {
                                pro.link && 
                                <a
                                    href={pro.link}
                                    target="_blank"
                                    className="btn btn-primary"
                                    rel="noreferrer"
                                >
                                    Live Demo
                                </a>
                            }
                            <a
                                href={pro.githubLink}
                                target="_blank"
                                className="btn"
                                rel="noreferrer"
                            >
                                Github
                                <FontAwesomeIcon className='portfolio-github-icon' icon={faGithub} />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;