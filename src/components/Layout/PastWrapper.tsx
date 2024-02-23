import React from 'react'
import PastHeader from './PastHeader'

const PastWrapper = () => {
  return (
    <>
      <PastHeader />
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

export default PastWrapper
