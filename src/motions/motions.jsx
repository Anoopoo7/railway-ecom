import { motion } from 'framer-motion'

const Motion = ({ children, initial, animate }) => {
  return (
    <motion.div
      initial={
        initial || {
          y: 6,
          opacity: 0,
        }
      }
      animate={
        animate || {
          y: 0,
          opacity: 1,
        }
      }
    >
      {children}
    </motion.div>
  )
}

export default Motion
