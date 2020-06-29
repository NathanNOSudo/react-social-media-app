import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import Loadable from 'react-loadable'

// hydrate(<App />, document.getElementById('root'))
Loadable.preloadReady().then(() => {
    hydrate(
      <App />,
      document.getElementById('root')
    );
  });