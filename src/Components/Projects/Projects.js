import { Fragment } from "react";
import React from 'react';

import classes from './Projects.module.css'

import imagePCRGEN from '../../assets/PCRstart.png'
import imageItinera from '../../assets/ItineraVocApp.png'
import imagePortfolio from '../../assets/my_portfolio_img.png'
import imageSev from '../../assets/alphabetized_swahili_list.png'


const projectInfo = [
    {
        key: 1,
        title: "Patient Care Report GENERATOR",
        description: "EMTs have to write a report for every patient transport they handle. This app generates such a detailed and carefully written report by simply adjusting recurring parameters and asking for case-by-case specific input.",
        mainTechnologies: "JavaScript, Bootstrap",
        picUrl: imagePCRGEN,
        netlifyUrl: "https://naughty-rosalind-082c27.netlify.app/",
        githubCodeAddress : "github code url"
    },
    {
        key: 2,
        title: "Dictionary App",
        description: "Latin to Dutch Vocabulary App",
        mainTechnologies: "CSS, JavaScript",
        picUrl: imageItinera,
        netlifyUrl: "https://www.youtube.com/watch?v=Vg6K4pn_C8o",
        githubCodeAddress : "https://github.com/Qasper1974/sev"
    },
    {
        key: 3,
        title: "Swahili-English Vocabulary Tool",
        description: "A Swahili to English Vocabulary App",
        mainTechnologies: "Django, PostgreSQL, Docker, AWS",
        picUrl: imageSev,
        netlifyUrl: "https://portfolio-yfaems.netlify.app",
        githubCodeAddress : "github code url"
    },
    {
        key: 4,
        title: "My Portfolio",
        description: "My portfolio to showcase my projects",
        mainTechnologies: "React, CSS, JavaScript",
        picUrl: imagePortfolio,
        netlifyUrl: "https://portfolio-yfaems.netlify.app",
        githubCodeAddress : "github code url"
    }
]

const Projects = (props) => {

    const displayedProjects = projectInfo.map(
        (project) => {
            return (
                <section>
                    <div className={classes.parentdiv} key={project.key}>
                        <div className={classes.div1}
                        >
                            <img src={project.picUrl}  
                            className={classes.pic} />
                            </div>
                        <div className={classes.div2}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <p>Main Technologies: <span className={classes.maintechnologies}>{project.mainTechnologies}</span></p>
                            <a href={project.netlifyUrl} 
                            target="_blank">Click here to check it out in a webbrowser!</a>
                        </div>

                        <div 
                        style={{backgroundImage: project.picUrl}}
                        ></div>

                    </div>
                </section>
            )
    })

    return (
        <Fragment>
            {displayedProjects}
        </Fragment>
    )
}

export default Projects