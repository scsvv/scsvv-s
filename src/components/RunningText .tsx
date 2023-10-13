'use client'
import { motion } from 'framer-motion'

interface RunningTextProps {
  text: string
}

const RunningText: React.FC<RunningTextProps> = ({ text }) => {
  return (
    <motion.div
      className="py-6"
      initial={{ x: '100%' }}
      animate={{ x: '-100%' }}
      transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
    >
      <p className="text-5xl">{text}</p>
    </motion.div>
  )
}

export default RunningText
