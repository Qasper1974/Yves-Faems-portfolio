import React, {Fragment} from 'react';

import classes from './PageTitle.module.css';


const PageTitle = (props) => {
    return (
        <Fragment>
            <div  className={classes.header}>
                <h1>{props.title}</h1>
                <div>{props.subtitle}</div>
            </div>
        </Fragment>
    )
}

export default PageTitle;