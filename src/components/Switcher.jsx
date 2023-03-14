import React from 'react'

const Switcher = (props) => {
  return (
    <label htmlFor='lang-switcher' className='inline-flex relative cursor-pointer align-middle'>
      <div className='mx-4 text-sm font-medium text-white peer-checked:text-[#39ff14] peer-checked:font-bold'>EN</div>
      <input id='lang-switcher' type="checkbox" value="" className='sr-only peer' checked={props.isOn} onClick={props.onClick}/>
      <div className="w-11 h-6 bg-white rounded-full peer peer-checked:after:translate-x-[1.25rem] peer-checked:after:bg-[#fff] after:content-[''] after:absolute after:top-0.5 after:left-[3.2rem] after:bg-[#39ff14] after:border-[#222] after:border-2 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#39ff14]"></div>
      <div className='mx-4 text-sm font-medium text-white peer-checked:text-[#39ff14] peer-checked:font-bold'>PT</div>
    </label>
  )
}

export default Switcher
