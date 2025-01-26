import React, { useState } from 'react';
import { createInstance, OptimizelyProvider, useDecision } from '@optimizely/react-sdk';

const App = () => {

  const optimizelyInstance = createInstance({
    sdkKey: 'A52EKCfHmgQrTARNjdwgz'
  })
  optimizelyInstance.onReady().then(() => {
    console.log("optly instance = ", optimizelyInstance);
  })

  return (
    <OptimizelyProvider
      optimizely={optimizelyInstance}
      user={{id: "user123"}}
    >
      <h1>App</h1>
    </OptimizelyProvider>
  )
}

export default App;