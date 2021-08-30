import React, {Fragment} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import MainHeader from './Components/UI/MainHeader/MainHeader';
import Header from './Components/Header/Header';
import Bio from './Components/Bio/Bio';
import Apps from './Components/Apps/Apps';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="superdiv">
        <MainHeader />
        <Switch>
            <Route path="/" exact>
                <Redirect to="/Welcome" />
            </Route>
            <Route path="/Welcome">
                <Header />
                <Bio />
                <Apps />
            </Route>
            <Route path="/Projects">
                <Apps />
                < Projects />
                <div>Hello</div>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
