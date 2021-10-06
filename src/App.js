import React, {Fragment} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import MainHeader from './Components/UI/MainHeader/MainHeader';
import Header from './Components/UI/PageTitle/PageTitle';
import Bio from './Components/Bio/Bio';
import Apps from './Components/Apps/Apps';
import Projects from './Components/Projects/Projects';
import Contact from './Components/ContactForm/ContactForm';


function App() {
  return (
    <div className="superdiv">
        <MainHeader />
        <Switch>
            <Route path="/" exact>
                <Redirect to="/Welcome" />
            </Route>
            <Route path="/Welcome">
                <Header title="Welcome"
                        subtitle="Yves Faems" />
                <Bio />
                {/* <Apps /> */}
            </Route>
            <Route path="/Projects">
            <Header title="Projects"
                        subtitle="Some of my apps" />
                {/* <Apps /> */}
                < Projects />
            </Route>
            <Route path="/Contact">
            <Header title="Contact"
                        subtitle="Drop me a line!" />
                <Contact />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
