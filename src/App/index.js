import React from 'react';

const App = () => {
  console.log('process.env', process.env.NODE_ENV);
  return(
    <div>
      Hello world!
    </div>
  )
}

export default App;