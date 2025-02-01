import React from 'react'

const Icon = ({src, shape}) => {
  return (
    <>
    <img src={src} alt="" className={`border m-2 h-12 ${shape}`} />
    </>
  )
}

export default Icon