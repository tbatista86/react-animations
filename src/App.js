import React, { useState } from 'react'
import Dropdow from './components/Dropdow';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar'
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdow isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection />
    </>
  );
}

export default App;
