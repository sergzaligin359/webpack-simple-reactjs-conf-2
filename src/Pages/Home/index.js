import React from 'react';

const Home = () => {
  console.log('process.env', process.env.NODE_ENV);
  return(
    <div>
      <h1>Home page</h1>
    </div>
  )
}

export default Home;