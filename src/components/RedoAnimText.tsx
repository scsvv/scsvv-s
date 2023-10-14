'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

export interface IRedoAnimTextProps {
  delay: number
}

export default function RedoAnimText({ delay }: IRedoAnimTextProps) {
  const textIndex = useMotionValue(0)
  const texts = [
    'I am writing to you because I want a job.',
    'I am the best candidate for this job.',
    'In my grand adventure as a seasoned designer...',
    "Knock knock! Who's there? Your new employee!",
    'Walking the tightrope balance of project management...',
    'I find myself compelled to express my interest due to...',
    'My pen (or should I say, keyboard) is at work today because...',
    'Inspired by the alluring challenge in the job posting, I am writing...',
    'Stirred to my keyboard by the tantalizing nature of the role…',
  ]

  const baseText = useTransform(textIndex, (latest) => texts[latest] || '')
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  )
  const updatedThisRound = useMotionValue(true)

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      delay: delay,
      duration: 1,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false)
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0)
          } else {
            textIndex.set(textIndex.get() + 1)
          }
          updatedThisRound.set(true)
        }
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <motion.span className="inline text-6xl">{displayText}</motion.span>
}
