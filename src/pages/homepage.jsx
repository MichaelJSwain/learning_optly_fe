import React from 'react';
import {
  createInstance,
  OptimizelyProvider,
  useDecision,
  withOptimizely,
} from '@optimizely/react-sdk'

const optimizely = createInstance({
  sdkKey: 'A52EKCfHmgQrTARNjdwgz', // TODO: Update to your SDK Key
})

function Button(props) {
  const handleClick = () => {
    const { optimizely } = props;    
    optimizely.track('purchased')
  };
  return <button onClick={handleClick}>Purchase</button>;
}

const PurchaseButton = withOptimizely(Button)

function ProductSort() {
  const [ decision ] = useDecision('product_sort');
  const variationKey = decision.variationKey;
  const isEnabled = decision.enabled;
  const sortMethod = decision.variables['sort_method'];
  return (
    <div>      
      { /* If variation is null, display error */ }
      { variationKey === null && <div className="error">{ decision.reasons }</div> }

      { /* If feature is enabled, do something with the Sort Method variable */ }
      { isEnabled && <div>The Sort method is {sortMethod}</div> }
      
      { /* Show relevant component based on the variation key */ }
      { variationKey === 'control' && <div>Control Component</div> }
      { variationKey === 'treatment' && <div>Treatment Component</div> }
      
      { /* Show Purchase Button to track Purchase event */ }
      <PurchaseButton />
    </div>
  )
}

function Homepage() {
  return (
    <div>
        <h1>Homepage</h1>
    </div>
  );
}

export default Homepage;