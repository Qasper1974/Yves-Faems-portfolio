import React, {Fragment} from 'react';

import classes from './Header.module.css';


const Header = () => {
    return (
        <Fragment>
            <div  className={classes.header}>
                <h1>Portfolio</h1>
                <div>Yves Faems</div>
            </div>
        </Fragment>
    )
}

export default Header;