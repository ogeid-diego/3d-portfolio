import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { motion } from 'framer-motion'
import { style } from "../style"
import Computers from './canvas/Computers';
import { heroText, heroTextBr } from '../constants';

const Hero = () => {
  
  const toggle = useSelector((state) => state.toggle.value);
  const [hero, setHero] = useState(heroText);

  useEffect(() => {
    if (toggle === false) {
      setHero(heroTextBr);
    } else {
      setHero(heroText);
    }
  }, [toggle]);

  return (
    <section className='ralative w-full h-screen mx-auto'>
      <div className={`${style.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#39ff14]' />
          <div className='w-1 h-40 sm:h-80 bg-gradient-to-b from-[#39ff14] to-transparent'/>
        </div>
        <div className=''>
          <h1 className={`${style.heroHeadText} text-white`}>{hero[0].greetings}<span className='text-[#39ff14]'> Diego</span></h1>
          <p className={`${style.heroSubText} mt-2 text-white-100`}>
            {hero[0].whatIDo_1} <br className='sm:block hidden'/> {hero[0].whatIDo_2}
          </p>
        </div>
      </div>
        <Computers/>
        {
          window.innerWidth > 1900
            ?
            <div className='absolute top-[42rem] xl:top-[52rem] w-full flex justify-center items-center'>
            <a href='#about'>
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#39ff14] flex justify-center items-start p-2'>
                <motion.div animate={{
                  y: [0, 24, 0]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }} className="w-3 h-3 rounded-full bg-[#39ff14] mb-1"/>
              </div>
            </a>
          </div>
            :
                null
        }
    </section>
  )
}

export default Hero