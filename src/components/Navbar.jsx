import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setToggle } from '../Features/Toggle';
import { Link } from 'react-router-dom'
import { style } from "../style"
import { navLinks, navLinksBr } from './../constants/index';
import { logo } from "../../public/assets"
import Switcher from './Switcher';

const Navbar = () => {

  const dispatch = useDispatch();
  const [active, setActive] = useState("");
  const toggle = useSelector((state) => state.toggle.value);
  const [nav, setNav] = useState(navLinks);

  useEffect(() => {
    if (toggle === false) {
      setNav(navLinksBr);
    } else {
      setNav(navLinks);
    }
  }, [toggle]);

  return (
    <nav className={`${style.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-b from-[#111] to-black`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"></img>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Diego&nbsp;
            <span className='sm:block hidden'>| JavaScript Dev</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {nav.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-[#39ff14]" : "text-secondary"} hover:text-[#ffffff] text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <Switcher onClick={() => dispatch(setToggle(!toggle))}/>
    </nav>
  )
}

export default Navbar