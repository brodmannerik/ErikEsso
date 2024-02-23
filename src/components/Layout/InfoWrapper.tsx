import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InfoHeader from './InfoHeader'

const InfoWrapper = () => {
  return (
    <>
      <InfoHeader />
      <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          overflow: 'auto',
          pointerEvents: 'none'
        }}
      ></div>
    </>
  )
}

export default InfoWrapper
