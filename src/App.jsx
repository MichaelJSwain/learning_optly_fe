import React from 'react';
import {
  createInstance,
  OptimizelyProvider
} from '@optimizely/react-sdk'
import Homepage from './pages/homepage';

const optimizely = createInstance({
  sdkKey: 'A52EKCfHmgQrTARNjdwgz', // TODO: Update to your SDK Key
})

const userId = Math.floor(Math.random() * 10000000)

function App() {
  return (
    <OptimizelyProvider optimizely={optimizely} user={{ id: `${userId}` }}>
      <Homepage />
    </OptimizelyProvider>
  );
}

export default App;