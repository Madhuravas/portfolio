import { useState } from 'react'
import Header from './components/Header';
import IntroBg from './animations/introBg';
import Intro from './components/intro';

function App() {

  return (
    <div className="bg-[#ffffff]">
      <Header/>
      <Intro/>
    </div>
  )
}

export default App
