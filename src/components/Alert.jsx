import React from 'react'
/* import FailureIcon from "../../Assets/Icons/Failure"; */
import SuccessIcon from '../icon/SuccessIcon'
import CloseIcon from '../icon/CloseIcon'

const Alert = (props) => {
  return (
    <div id="alert" className="group z-50 flex absolute top-10 right-10 flex-row-reverse space-x-4 space-x-reverse h-16 m-8 p-4 items-center rounded-md border-2 bg-green-200 border-green-400 shadow-lg">
        <button id="btn" onClick={props.onClick} className="text-[#4F5B62]">
          <CloseIcon />
        </button>
        <div className="text-lg text-center">
          <span className="text-black">{props.message}</span>
        </div>
        <div className="bg-green-600 rounded-md p-1">
          <SuccessIcon />
        </div>
      </div>
  )
}

export default Alert
