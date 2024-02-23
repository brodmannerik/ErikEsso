import React, { useState } from 'react'
import CanvasCard from './CanvasCard'

type Card = {
  id: number
  image: string
  text: string
}

type CardListProps = {
  cards: Card[]
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  const [cardList, setCardList] = useState<Card[]>(cards)

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.dataTransfer.setData('text/plain', id)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const shuffleCards = () => {
    const shuffledCards = [...cardList]
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const j = Math.floor(Math.random() * (i + 1))
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    setCardList(shuffledCards)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.preventDefault()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const dragCardId: number = e.dataTransfer.getData('text/plain')
    const dragCardIndex = cardList.findIndex((card) => card.id === dragCardId)
    const targetCardIndex = cardList.findIndex((card) => card.id === id)
    const updatedCardList = [...cardList]
    const [dragCard] = updatedCardList.splice(dragCardIndex, 1)
    updatedCardList.splice(targetCardIndex, 0, dragCard)
    setCardList(updatedCardList)
  }

  return (
    <div className="card-list">
      <button onClick={shuffleCards}>Shuffle Cards</button>
      {cardList.map((card, index) => (
        <CanvasCard
          key={card.id}
          id={card.id}
          image={card.image}
          text={card.text}
          index={index}
          handleDragStart={handleDragStart}
          //eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
        />
      ))}
    </div>
  )
}

export default CardList
