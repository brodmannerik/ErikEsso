import React, { useState } from 'react'
import Card from '../Card/CanvasCard'
import useResponsiveWidth from '../hooks/useResponsiveStyles'
import ArchiveCard from '../Card/ArchiveCard'
import { canvasComponentCardData } from '../../data/CanvasComponentCardData'

const CanvasComponent = () => {
  const windowWidth = useResponsiveWidth()
  const screenToSmall = windowWidth < 1040
  const [cards, setCards] = useState(canvasComponentCardData)
  const handleCardDrag = (
    id: number,
    newPosition: { x: number; y: number }
  ): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, position: newPosition } : card
      )
    )
  }

  return (
    <>
      {screenToSmall ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            backgroundColor: '#F0F0F0',
            padding: '16px',
            justifyContent: 'center',
            paddingTop: '120px',
            paddingBottom: '150px'
          }}
        >
          {cards.map((card) => (
            //@ts-ignore
            <ArchiveCard key={card.id} {...card} />
          ))}
        </div>
      ) : (
        <div style={{ position: 'relative' }}>
          {cards.map((card) => (
            //@ts-ignore
            <Card key={card.id} {...card} onCardDrag={handleCardDrag} />
          ))}
        </div>
      )}
    </>
  )
}

export default CanvasComponent
