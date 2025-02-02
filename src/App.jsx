import { useState } from 'react'
import Header from './components/Header';
import IntroBg from './animations/introBg';

function App() {

  return (
    <div className="bg-[#ffffff]">
      <Header/>
      <IntroBg/>
    </div>
  )
}

export default App
