import React from 'react';
import { Fragment } from "react";
import { NavLink } from 'react-router-dom'

import classes from './MainHeader.module.css'

const MainHeader = () => {

    return (
        <Fragment>
           <header className={classes.header}>
               <nav>
                   <ul>
                       <li><NavLink to="/Welcome">Welcome</NavLink></li>
                   </ul>
                   <ul>
                       <li><NavLink to="/Projects">Projects</NavLink></li>
                   </ul>
               </nav>
           </header>
        </Fragment>
    )
}

export default MainHeader