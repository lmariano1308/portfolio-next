'use client'
import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { textCarouselVariants } from '@/utils/animations/text'
import OverflowHidden from '../OverflowHidden'
import { Container } from './styles'

interface TextCarouselProps {
  words: string[]
  interval?: number
}

const TextCarousel: React.FC<TextCarouselProps> = ({
  words,
  interval = 5000,
}) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, interval)

    return () => clearInterval(intervalId)
  }, [words, interval])

  return (
    <OverflowHidden>
      <AnimatePresence mode="wait">
        <Container
          variants={textCarouselVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={index}
        >
          {words[index]}
        </Container>
      </AnimatePresence>
    </OverflowHidden>
  )
}

export default TextCarousel
