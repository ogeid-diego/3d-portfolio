import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setShowElement } from '../Features/ShowElement';
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import { style } from '../style'
import Earth from './canvas/Earth';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { bContact, bContactBr } from '../constants';

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle.value);
  const [contact, setContact] = useState(bContact);
  const showElement = useSelector((state) => state.showElement.value);
  const showOrHide = () => dispatch(setShowElement(!showElement));
  

  useEffect(() => {
    if (toggle === false) {
      setContact(bContactBr);
    } else {
      setContact(bContact);
    }
  }, [toggle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send("service_1amizbn", "template_aef8rdj", {
      from_name: form.name,
      to_name: "Diego",
      from_email: form.email,
      to_email: "diegocunhaam@gmail.com",
      message: form.message
    }, "QCLPOK3cpLkcLUZzV").then(() => {
      setLoading(false);
      showOrHide();
      setForm({
        name: "",
        email: "",
        message: ""
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert("Something went wrong");
    });
  }

  return (
    <div className='relative xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-[#111] p-8 rounded-2xl">
        <p className={style.sectionSubText}>{contact[0].p}</p>
        <h3 className={style.sectionHeadText}>{contact[0].h3}</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className='flex flex-col'>
            <span className='text-[#39ff14] font-medium mb-4'>{contact[0].name}</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={contact[0].nameP} className='bg-[#222] py-4 px-6 placeholder:text-[#555] text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#39ff14] font-medium mb-4'>{contact[0].email}</span>
            <input type="text" name="email" value={form.email} onChange={handleChange} placeholder={contact[0].emailP} className='bg-[#222] py-4 px-6 placeholder:text-[#555] text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#39ff14] font-medium mb-4'>{contact[0].message}</span>
            <textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder={contact[0].messageP} className='bg-[#222] py-4 px-6 placeholder:text-[#555] text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <button type="submit" className='bg-[#222] py-3 px-8 outline-none w-fit text-[#39ff14] font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? `${contact[0].sending}` : `${contact[0].send}`}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <Earth />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");