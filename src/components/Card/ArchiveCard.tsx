import React, { useState, useEffect } from 'react'
import useScroll from '../hooks/useScroll'
import useResponsiveWidth from '../hooks/useResponsiveStyles'

type Card = {
  id: number
  type: string
  text: string
  longText: boolean
  longInMobileView?: boolean
  content?: string
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
  contentHeightSmall?: string
  innerContent1?: string
  innerContent2?: string
  innerContent2Height?: string
  innerContent2HeightSmall?: string
  innerContent3?: string
  innerContent3Height?: string
  innerContent3HeightSmall?: string
  innerContent4?: string
  innerContent4Height?: string
  innerContent4HeightSmall?: string
  innerContent5?: string
  innerContent5Height?: string
  innerContent5HeightSmall?: string
}

const ArchiveCard = ({
  id,
  type,
  text,
  longText,
  longInMobileView,
  content,
  date,
  presentation,
  location,
  leftLocation,
  contentHeight,
  contentHeightSmall,
  image,
  imageSize,
  imageHeight,
  imageHeightSmall,
  image1,
  image1Size,
  image1Height,
  image1HeightSmall,
  image2,
  image2Size,
  image2Height,
  image2HeightSmall,
  image3,
  image3Size,
  image3Height,
  image3HeightSmall,
  image4,
  image4Size,
  image4Height,
  image4HeightSmall,
  innerContent1,
  innerContent2,
  innerContent2Height,
  innerContent2HeightSmall,
  innerContent3,
  innerContent3Height,
  innerContent3HeightSmall,
  innerContent4,
  innerContent4Height,
  innerContent4HeightSmall
}: Card): JSX.Element => {
  const fontFamilies =
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'

  const { cardRef, isScrolled, isOverflowed } = useScroll()
  const [showText, setShowText] = useState(false)

  const windowWidth = useResponsiveWidth()

  const bigScreen = windowWidth > 1800
  const screenToSmall = windowWidth < 1040
  const isSmallScreen = windowWidth < 415

  useEffect(() => {
    if (isOverflowed && isScrolled && !screenToSmall) {
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
    if (bigScreen) {
      const card = document.getElementById(`card-${id}`)
      card!.style.transform = 'scale(1.2)'
    }
  }, [isOverflowed, isScrolled, id, screenToSmall, bigScreen])

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

  const getTopValue = () => {
    if (isSmallScreen && longInMobileView) {
      return '85px'
    } else if (longText) {
      return '70px'
    } else {
      return '40px'
    }
  }

  const topValue = getTopValue()

  return (
    <div
      id={`card-${id}`}
      className={'card'}
      ref={cardRef}
      style={{
        position: 'relative',
        overflow: content ? 'auto' : 'hidden'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {type === 'card' && (
        <div
          style={{
            width: isSmallScreen ? '250px' : '377px',
            height: '269px',
            borderRadius: '17px',
            backgroundColor: '#FFFFFF'
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '17px',
              height:
                content && isScrolled
                  ? isSmallScreen
                    ? contentHeightSmall
                    : contentHeight
                  : '0',
              border: content && isScrolled ? '0.5px solid black' : ''
            }}
          >
            <p
              style={{
                position: 'absolute',
                top: '-2px',
                left: '18px',
                paddingRight: '4px',
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
                top: topValue,
                left: '18px',
                fontWeight: '400',
                fontSize: '19px',
                lineHeight: '29.05px',
                fontFamily: fontFamilies
              }}
              id={`icon-${id}`}
            >
              {content ? '>>' : ''}
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
              {content ? (showText ? 'scroll down' : '') : ''}
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
                width: isSmallScreen ? '215px' : '340px',
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
              {isSmallScreen ? location : presentation}
            </p>
            {isSmallScreen ? (
              ''
            ) : (
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
            )}
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
                  top: isSmallScreen ? imageHeightSmall : imageHeight,
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
                  top: isSmallScreen
                    ? innerContent2HeightSmall
                    : innerContent2Height,
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
                  top: isSmallScreen ? image1HeightSmall : image1Height,
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
                  top: isSmallScreen
                    ? innerContent3HeightSmall
                    : innerContent3Height,
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
                  top: isSmallScreen ? image2HeightSmall : image2Height,
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
                  top: isSmallScreen
                    ? innerContent4HeightSmall
                    : innerContent4Height,
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
                  top: isSmallScreen ? image3HeightSmall : image3Height,
                  width: image3Size
                }}
                src={image3}
                alt={'image3'}
              />
            ) : (
              ''
            )}
            {image4 ? (
              <img
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: isSmallScreen ? image4HeightSmall : image4Height,
                  width: image4Size
                }}
                src={image4}
                alt={'image4'}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ArchiveCard
