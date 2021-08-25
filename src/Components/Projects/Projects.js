import { Fragment } from "react";
import React from 'react';

import classes from './Projects.module.css'

const projectInfo = [
    {
        key: 1,
        title: "title1",
        description: "description1",
        mainTechnologies: "html1",
        picUrl: "someAddress1"
    },
    {
        key: 2,
        title: "title2",
        description: "description2",
        mainTechnologies: "html2",
        picUrl: "someAddress2"
    },
    {
        key: 3,
        title: "title3",
        description: "description3",
        mainTechnologies: "html3",
        picUrl: "someAddress3"
    }
]

const Projects = (props) => {

    const displayedProjects = projectInfo.map(
        (project) => {
            return (
                <div className={classes.parentdiv} key={project.key}>
                    <div className={classes.div1}>{project.picUrl}</div>
                    <div className={classes.div2}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                </div>
            )
    })


    return (
        <Fragment>
            {displayedProjects}
        </Fragment>
    )
}

export default Projects