import React from 'react';

import classes from './Bio.module.css';


const Bio = () => {
    return (
        <div  className={classes.bio} >
                <div className={classes.achter}></div>
                <div  className={classes.biography}>
                    <h3>Biography</h3>
                    <p>I am a lifelong learner specialized in both human and computer languages.</p>
                    <p>My profound knowledge of Latin, Ancient Greek, French, Dutch and other languages, along with my extensive teaching experience, 
                        have facilitated my ability to work with JavaScript, Bootstrap, React, React Native, NodeJS, Express and MongoDB.</p>
                 </div>
            </div>
    )
}

export default Bio;
