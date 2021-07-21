import React, {Fragment} from 'react';

import classes from './Header.module.css';


const Header = () => {
    return (
        <Fragment>
            <div  className={classes.header}>
                <h1>PORTFOLIO</h1>
                <span>Yves Faems</span>
            </div>
        </Fragment>
    )
}

export default Header;