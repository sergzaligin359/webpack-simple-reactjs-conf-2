import React from 'react'

export const App = () => {
  console.log('process.env', process.env.NODE_ENV);
  return(
    <div>
      Hello world!
    </div>
  )
}
