import React, { useState, useEffect } from 'react'
import useDrag from '../hooks/useDrag'
import useScroll from '../hooks/useScroll'
import useResponsiveWidth from '../hooks/useResponsiveStyles'

type Card = {
  index: number
  id: number
  position: { x: number; y: number }
  type: string
  text: string
  longText: boolean
  date: string
  presentation: string
  location: string
  leftLocation: string
  image?: string
  image1?: string
  image2?: string
  image3?: string
  image4?: string
  imageSize?: string
  image1Size?: string
  image2Size?: string
  image3Size?: string
  image4Size?: string
  imageHeight?: string
  image1Height?: string
  image2Height?: string
  image3Height?: string
  image4Height?: string
  imageHeightSmall?: string
  image1HeightSmall?: string
  image2HeightSmall?: string
  image3HeightSmall?: string
  image4HeightSmall?: string
  contentHeight?: string
  innerContent1?: string
  innerContent2?: string
  innerContent2Height?: string
  innerContent3?: string
  innerContent3Height?: string
  innerContent4?: string
  innerContent4Height?: string
  innerContent5?: string
  onCardDrag: (id: number, newPosition: { x: number; y: number }) => void
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, id: string) => void
}

type Position = {
  x: number
  y: number
}

const CanvasCard = ({
  id,
  index,
  position,
  type,
  text,
  longText,
  date,
  presentation,
  location,
  leftLocation,
  image,
  imageHeight,
  imageSize,
  image1,
  image1Height,
  image1Size,
  image2,
  image2Height,
  image2Size,
  image3,
  image3Height,
  image3Size,
  contentHeight,
  innerContent1,
  innerContent2,
  innerContent2Height,
  innerContent3,
  innerContent3Height,
  innerContent4,
  innerContent4Height,
  innerContent5,
  onCardDrag
}: Card): JSX.Element => {
  const fontFamilies =
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const {
    handleDragStart,
    handleDragEnd,
    isDragging
  }: {
    handleDragStart: (e: React.DragEvent<HTMLDivElement>) => void
    handleDragEnd: (e: React.DragEvent<HTMLDivElement>) => void
    isDragging: boolean
  } = useDrag(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    (newPosition: Position) => onCardDrag(id, newPosition),
    position
  )
  const { cardRef, isScrolled, isOverflowed } = useScroll()
  const [showText, setShowText] = useState(false)
  const windowWidth = useResponsiveWidth()

  useEffect(() => {
    if (isOverflowed && isScrolled) {
      const card = document.getElementById(`card-${id}`)
      if (card) {
        card.style.zIndex = '2'
        card.style.transform = 'scale(1.6)'
      }
    } else {
      const card = document.getElementById(`card-${id}`)
      if (card) {
        card.style.zIndex = '1'
        card.style.transform = 'scale(1)'
      }
    }
  }, [isOverflowed, isScrolled, id])

  const handleClick = () => {
    setShowText(true)

    setTimeout(() => {
      setShowText(false)
    }, 3000)
  }

  const handleMouseEnter = () => {
    const icon = document.getElementById(`icon-${id}`)
    if (icon) {
      icon.style.transform = 'rotate(90deg)'
    }
  }

  const handleMouseLeave = () => {
    const icon = document.getElementById(`icon-${id}`)
    if (icon) {
      icon.style.transform = 'rotate(0deg)'
    }
  }

  return (
    <div
      id={`card-${id}`}
      className={`card ${isDragging ? 'dragging' : ''}`}
      ref={cardRef}
      style={{
        top: position.y,
        left: position.x,
        position: 'absolute',
        overflow: 'auto'
      }}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {type === 'card' && (
        <div
          style={{
            width: '377px',
            height: '269px',
            borderRadius: '17px',
            backgroundColor: '#FFFFFF'
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '17px',
              height: isScrolled ? contentHeight : '0',
              border: isScrolled ? '0.5px solid black' : ''
            }}
          >
            <p
              style={{
                position: 'absolute',
                top: '-2px',
                left: '18px',
                fontWeight: '700',
                fontSize: '24px',
                fontFamily: fontFamilies
              }}
            >
              {text}
            </p>
            <p
              style={{
                position: 'absolute',
                top: longText ? '70px' : '40px',
                left: '18px',
                fontWeight: '400',
                fontSize: '19px',
                lineHeight: '29.05px',
                fontFamily: fontFamilies
              }}
              id={`icon-${id}`}
            >
              {'>>'}
            </p>
            <p
              style={{
                position: 'absolute',
                top: longText ? '70px' : '40px',
                left: '50px',
                fontWeight: '400',
                fontSize: '19px',
                lineHeight: '29.05px',
                fontFamily: fontFamilies
              }}
            >
              {showText ? 'scroll down' : ''}
            </p>
            <p
              style={{
                position: 'absolute',
                top: '153px',
                left: '18px',
                fontWeight: '400',
                fontSize: '19px',
                lineHeight: '29.05px',
                fontFamily: fontFamilies
              }}
            >
              {date}
            </p>
            <p
              style={{
                position: 'absolute',
                width: '340px',
                top: '198px',
                left: '18px',
                border: '0.5px solid #000000',
                fontFamily: fontFamilies
              }}
            />
            <p
              style={{
                position: 'absolute',
                top: '207px',
                left: '18px',
                fontWeight: '400',
                fontSize: '19px',
                lineHeight: '29.05px',
                fontFamily: fontFamilies
              }}
            >
              {presentation}
            </p>
            <p
              style={{
                position: 'absolute',
                top: '207px',
                left: leftLocation,
                fontWeight: '400',
                fontSize: '19px',
                lineHeight: '29.05px',
                fontFamily: fontFamilies
              }}
            >
              {location}
            </p>
            {innerContent1 ? (
              <p
                style={{
                  position: 'absolute',
                  top: '280px',
                  left: '18px',
                  right: '18px',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '29.05px',
                  fontFamily: fontFamilies
                }}
              >
                {innerContent1}
              </p>
            ) : (
              ''
            )}
            {image ? (
              <img
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: imageHeight,
                  width: imageSize
                }}
                src={image}
                alt={'image'}
              />
            ) : (
              ''
            )}
            {innerContent2 ? (
              <p
                style={{
                  position: 'absolute',
                  top: innerContent2Height,
                  left: '18px',
                  right: '18px',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '29.05px',
                  fontFamily: fontFamilies
                }}
              >
                {innerContent2}
              </p>
            ) : (
              ''
            )}
            {image1 ? (
              <img
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: image1Height,
                  width: image1Size
                }}
                src={image1}
                alt={'image1'}
              />
            ) : (
              ''
            )}
            {innerContent3 ? (
              <p
                style={{
                  position: 'absolute',
                  top: innerContent3Height,
                  left: '18px',
                  right: '18px',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '29.05px',
                  fontFamily: fontFamilies
                }}
              >
                {innerContent3}
              </p>
            ) : (
              ''
            )}
            {image2 ? (
              <img
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: image2Height,
                  width: image2Size
                }}
                src={image2}
                alt={'image2'}
              />
            ) : (
              ''
            )}
            {innerContent4 ? (
              <p
                style={{
                  position: 'absolute',
                  top: innerContent4Height,
                  left: '18px',
                  right: '18px',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '29.05px',
                  fontFamily: fontFamilies
                }}
              >
                {innerContent4}
              </p>
            ) : (
              ''
            )}
            {image3 ? (
              <img
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: image3Height,
                  width: image3Size
                }}
                src={image3}
                alt={'image3'}
              />
            ) : (
              ''
            )}
            {innerContent5 ? (
              <p
                style={{
                  position: 'absolute',
                  top: '450px',
                  left: '18px',
                  right: '18px',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '29.05px',
                  fontFamily: fontFamilies
                }}
              >
                {innerContent5}
              </p>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default CanvasCard
