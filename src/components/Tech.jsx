import React from 'react'
import Ball from './canvas/Ball';
import Tippy from '@tippyjs/react';
import SectionWrapper from './../hoc/SectionWrapper';
import {technologies } from "../constants"

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <Tippy content={technology.name}><div className='w-28 h-28' key={technology.name}>
          <Ball icon={technology.icon}/>
        </div></Tippy>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")