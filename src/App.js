import React, {Fragment} from 'react';

import Header from './Components/Header/Header';
import Bio from './Components/Bio/Bio';
import Apps from './Components/Apps/Apps';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <Fragment>
        {/* <Header />
        <Bio /> */}
        <Apps />
        < Projects />
    </Fragment>
  );
}

export default App;
