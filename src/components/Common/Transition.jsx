import React from 'react';
import { motion } from "framer-motion";

const Transition = ({ children }) => {
  return <motion.div
    initial="initial"
    animate="animate"
    variants={{
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
    }}
  >{children}
  </motion.div>
}

export default Transition;