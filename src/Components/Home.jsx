import React from 'react'
import Design from './Design'

const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='box'>
          <div className='content'>
            <h1 className='heading'>EdTech Platform</h1>
            <p>An Online Platform which educates the keen learner in feasible amount.Educated over 2.3 million students till now.Over 150+ courses at our site.Come join us in this journey of upskilling the needy individuals...</p>
            <h3>Welcome to our website</h3>
            <img src='https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='imgg'></img>
          </div>
          <div className='img'>
            <img src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='education'></img>
            <div className='overlay'></div>
          </div>
        </div>
      </div>
      <Design title={"Home"}/>
    </>
    
  )
}

export default Home