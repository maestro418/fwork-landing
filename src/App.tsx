import React from 'react';

import Provider from './context';
import MainRouter from './router';

function App() {
  return (
    <Provider>
      <MainRouter />
    </Provider>
  );
}

export default App;
