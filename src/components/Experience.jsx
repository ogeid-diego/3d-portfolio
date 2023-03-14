import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion';
import "react-vertical-timeline-component/style.min.css";
import { style } from '../style';
import { experiences, experiencesBr, bExperiences, bExperiencesBr } from '../constants';
import SectionWrapper from './../hoc/SectionWrapper';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience, index }) => (
<VerticalTimelineElement contentStyle={{ background: "#222", color: "#ffffff" }} contentArrowStyle={{ borderRight: "7px solid #39ff14"}} date={experience.date} iconStyle={{ background: experience.iconBg }} icon={
  <div className='flex justify-center items-center w-full h-full'>
    <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain"/>
  </div>
}>
  <div>
    <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
    <p className='text-[#39ff14] text-[6px] font-semibold' style={{ margin: 0}}>{experience.company_name}</p>
  </div>
  <ul className='mt-5 list-disc ml-5 space-y-2'>
    {experience.points.map((point, index) => (
      <li key={`experience-point-${index}`} className="text-white text-[14px] pl-1 tracking-wider">
        {point}
      </li>
    ))}
  </ul>
</VerticalTimelineElement>
)

const Experience = () => {
  const toggle = useSelector((state) => state.toggle.value);
  const [exp, setExp] = useState(experiences);
  const [bExp, setBExp] = useState(bExperiences);

  useEffect(() => {
    if (toggle === false) {
      setExp(experiencesBr);
      setBExp(bExperiencesBr);
    } else {
      setExp(experiences);
      setBExp(bExperiences);
    }
  }, [toggle]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>{bExp[0].what}</p>
        <h2 className={style.sectionHeadText}>{bExp[0].exp}</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {exp.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")