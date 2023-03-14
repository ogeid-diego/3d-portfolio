import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import Tilt from 'react-tilt'
import { motion } from "framer-motion"
import { style } from '../style'
import { services,/*  servicesBr, */ about, aboutBr } from '../constants'
import { fadeIn, textVariant } from './../utils/motion';
import { SectionWrapper } from '../hoc'

const ServicesCard = ({ index, title, icon }) => {

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full bg-gradient-to-b from-[#39ff14] to-[#ddd] p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className="bg-gradient-to-b from-[#202020] to-[#111] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h2 className="text-white text-[20px] font-bold text-center">{title}</h2>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {

  const toggle = useSelector((state) => state.toggle.value);
  const [service, setService] = useState(services);
  const [aboutText, setAboutText] = useState(about);

  useEffect(() => {
    if (toggle === false) {
      setAboutText(aboutBr);
    } else {
      setAboutText(about);
    }
  }, [toggle]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>{aboutText[0].intro}</p>
        <h2 className={style.sectionHeadText}>{aboutText[0].overview}</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]">
        {aboutText[0].aboutText}
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {service.map((s, index) => (
          <ServicesCard key={s.title} index={index} {...s}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")