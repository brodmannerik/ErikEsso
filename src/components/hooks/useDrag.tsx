import { useState, useEffect } from 'react'

type Position = {
  x: number
  y: number
}

type UseDragResult = {
  handleDragStart: number
  handleDragEnd: number
  isDragging: boolean
  initialMouseX: number
  initialMouseY: number
}

const useDrag = (
  onCardDrag: (id: string, newPosition: Position) => void,
  position: Position
): { initialMouseX: number; handleDragEnd: () => void; handleDragStart: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void; initialMouseY: number; isDragging: boolean } => {
  const [isDragging, setIsDragging] = useState(false)
  const [initialMouseX, setInitialMouseX] = useState(position.x)
  const [initialMouseY, setInitialMouseY] = useState(position.y)

  const handleDragStart = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    event.preventDefault()
    setIsDragging(true)
    setInitialMouseX(event.clientX - initialMouseX)
    setInitialMouseY(event.clientY - initialMouseY)
  }

  const handleDrag = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): Position | undefined => {
    event.preventDefault()
    if (isDragging) {
      const newX = event.clientX - initialMouseX
      const newY = event.clientY - initialMouseY
      return { x: newX, y: newY }
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false)
    }

    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ): void => {
      const position = handleDrag(event)
      if (position) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        onCardDrag(position)
      }
    }

    if (isDragging) {
      window.addEventListener(
        'mousemove',
        //@ts-ignore
        handleMouseMove as (event: MouseEvent) => void
      )
    }

    return () => {
      window.removeEventListener(
        'mousemove',
        //@ts-ignore
        handleMouseMove as (event: MouseEvent) => void
      )
    }
  }, [handleDrag, isDragging, onCardDrag])

  return {
    initialMouseX: 0,
    initialMouseY: 0,
    handleDragStart,
    handleDragEnd,
    isDragging
  }
}

export default useDrag
