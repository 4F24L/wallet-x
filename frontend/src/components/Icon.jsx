import React from 'react'

const Icon = ({src, shape}) => {
  return (
    <>
    <img src={src} alt="" className={`p-1  h-14 ${shape}`} />
    </>
  )
}

export default Icon