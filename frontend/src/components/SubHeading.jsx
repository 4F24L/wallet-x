import React from 'react'

const SubHeading = ({label, classs, onClick}) => {
  return (
    <div onClick={onClick} className={` fill-slate-800 text-l ${classs}`}>
        {label}
    </div>
  )
}

export default SubHeading