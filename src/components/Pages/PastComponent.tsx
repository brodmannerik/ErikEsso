import React from 'react'
import '../../utils/index.css'

const PastComponent = () => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div className="image-container" key={index}>
          <img src={`/assets/images/works/${image}`} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  )
}

export default PastComponent
