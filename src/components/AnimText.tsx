'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import RedoAnimText from './RedoAnimText'
import CursorBlinker from './CursorBlinker'

export interface IAnimTextProps {
  delay: number
}

export default function AnimText({ delay }: IAnimTextProps) {
  const [done, setDone] = useState(false)
  const baseText = 'Dear Hiring Manager, '
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest),
  )

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: 'tween',
      delay: delay,
      duration: 1,
      ease: 'easeInOut',
      onComplete: () => {
        setDone(true)
      },
    })
    return controls.stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <span className="min-h-[400pxs]">
      <motion.span className="text-6xl">{displayText}</motion.span>
      {done && (
        <>
          <br /> <br />
        </>
      )}
      <RedoAnimText delay={delay + 1} />
      <CursorBlinker />
    </span>
  )
}
