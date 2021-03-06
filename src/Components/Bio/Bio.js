import React, {Fragment} from 'react';

import classes from './Bio.module.css';


const Bio = () => {
    return (
        <Fragment className={classes.bio} >
                <div className={classes.achter}></div>
                <div  className={classes.biography}>
                    <h3>Biography</h3>
                    <p>I am a lifelong learner specialized in both human and computer languages.</p>
                    <p>Teacher of Latin, Ancient Greek, French, and Dutch.</p>
                    <p>Aspiring Software Engineer focusing on React</p>
                    <h3>I worked with these technologies:</h3>
                    <p>HTML, CSS and JavaScript</p>
                    <p>Bootstrap</p>
                    <p>React, React Native</p>
                    <p>NodeJS, Express and MongoDB</p>
                    <p>Python</p>
                    <p>SQL, POSTGRESQL</p>
                    <p>SDLC and AGILE</p>
                    <p>DevOps and CI/CD</p>
                    <p>App deployment to Amazon AWS, Microsoft Azure and Google Cloud/Firestore</p>
            </div>
        </Fragment>
    )
}

export default Bio;
