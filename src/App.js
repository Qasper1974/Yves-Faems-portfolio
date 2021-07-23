import React, {Fragment} from 'react';

import Header from './Components/Header/Header';
import Bio from './Components/Bio/Bio';
import Apps from './Components/Apps/Apps';

function App() {
  return (
    <Fragment>
        <Header />
        <Bio />
        <Apps />
    </Fragment>
  );
}

export default App;
