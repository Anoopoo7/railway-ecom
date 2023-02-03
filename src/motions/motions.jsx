import { motion } from 'framer-motion'

const Motion = ({ children }) => {
  return (
    <motion.div
      initial={{
        y: 60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
    >
      {children}
    </motion.div>
  )
}

export default Motion
