import React from 'react'
import './startup.css'
import StartupCells from './components/startupcell/StartupCells'
import StartupNews from './components/startupnews/StartupNews'
import Chatbot from './components/chatbot/Chatbot'
import StartupSchemes from './components/startupschemes/StartupSchemes'
import Blogs from './components/blog/Blogs'
const Startup = () => {
  return (
    <div className=''>
      <StartupCells/>
      <StartupNews/>
      <hr className='mb-4'/>
      <Chatbot/>
      <StartupSchemes/>
      <Blogs/>
    </div>
  )
}

export default Startup
