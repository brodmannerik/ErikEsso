import React, { useState } from 'react'
import Header from './Header'

const LayoutWrapper = () => {
  return (
    <>
      <Header />
      <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          overflow: 'auto',
          background:
            'linear-gradient(to bottom, #5e9df7, #87c4f6, #a3e3f0, #b1dfe9, #c3dedd, #dad9ca, #ecd7b6)',
          pointerEvents: 'none'
        }}
      ></div>
    </>
  )
}

export default LayoutWrapper
