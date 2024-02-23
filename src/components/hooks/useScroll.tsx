import { useState, useEffect, useRef } from 'react'

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOverflowed, setIsOverflowed] = useState(false)
  const cardRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    const div = cardRef.current
    setIsScrolled(div!.scrollTop > 0)
    setIsOverflowed(div!.scrollHeight > div!.clientHeight)
  }

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return { cardRef, isScrolled, isOverflowed }
}

export default useScroll
