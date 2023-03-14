import { React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setShowElement } from './Features/ShowElement';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
/* import Feedbacks from './components/Feedbacks'; */
import Hero from './components/Hero';
import Tech from './components/Tech';
import Works from './components/Works';
import Stars from './components/canvas/Stars';
import Alert from './components/Alert';
import { bContact, bContactBr } from './constants';

const App = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState(bContact);
  const toggle = useSelector((state) => state.toggle.value);
  const showElement= useSelector((state) => state.showElement.value);
  const showOrHide = () => dispatch(setShowElement(!showElement));

  useEffect(() => {
    if (showElement === true) {
      setTimeout(() => {
        dispatch(setShowElement(false));
      }, 10000)
    }
  }, [showElement]);

  useEffect(() => {
    if (toggle === false) {
      setContact(bContactBr);
    } else {
      setContact(bContact);
    }
  }, [toggle]);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gradient-to-b from-[#202020] to-[#000]'>
        <div className="bg-gradient-to-b from-[#000] to-[#202020]">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <div className='relative z-0'>
          { showElement ? <Alert onClick={showOrHide} message={`${contact[0].alert}`}/> : null }
          <Contact/>
          <Stars />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;