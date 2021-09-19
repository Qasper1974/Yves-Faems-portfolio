import { Fragment } from "react";
import React from 'react';

import classes from './Projects.module.css'

import imagePCRGEN from '../../assets/PCRstart.png'
import imageItinera from '../../assets/ItineraVocApp.png'

const projectInfo = [
    {
        key: 1,
        title: "Patient Care Report GENERATOR",
        description: "EMTs have to write a report for every patient transport they handle. This app generates such a detailed and carefully written report by simply adjusting recurring parameters and asking for case-by-case specific input.",
        mainTechnologies: "html1",
        picUrl: imagePCRGEN,
        netlifyUrl: "https://naughty-rosalind-082c27.netlify.app/",
        githubCodeAddress : "github code url"
    },
    {
        key: 2,
        title: "Dictionary App",
        description: "Latin to Dutch Vocabulary App",
        mainTechnologies: "html2",
        picUrl: imageItinera,
        netlifyUrl: "https://wizardly-darwin-2fa9fc.netlify.app/",
        githubCodeAddress : "github code url"
    },
    {
        key: 3,
        title: "title3",
        description: "description3",
        mainTechnologies: "html3",
        picUrl: "someAddress3",
        netlifyUrl: "somehtppaddress",
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
                            <p>{project.mainTechnologies}</p>
                            <p>{project.description}</p>
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