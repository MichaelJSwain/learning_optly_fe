import React from 'react';
import {
  createInstance,
  OptimizelyProvider
} from '@optimizely/react-sdk'
import Homepage from './pages/homepage';

const optimizely = createInstance({
  sdkKey: 'A52EKCfHmgQrTARNjdwgz', // TODO: Update to your SDK Key
})

function App() {
  return (
    <OptimizelyProvider optimizely={optimizely} user={{ id: 'user123' }}>
      <Homepage />
    </OptimizelyProvider>
  );
}

export default App;